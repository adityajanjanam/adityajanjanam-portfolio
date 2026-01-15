import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  FaCheckCircle,
  FaGem,
  FaHeart,
  FaLightbulb,
  FaRocket,
  FaThumbsUp,
} from "react-icons/fa";

import { getDeviceId } from "../lib/deviceFingerprint";
import {
  createFeedbackStore,
  FEEDBACK_LOCAL_VOTE_KEY,
  FEEDBACK_OPT_OUT_KEY,
} from "../lib/feedbackStore";

// Modern feedback options - Professional Tech Portfolio Style
// Balanced: Professional enough for employers, modern enough for tech community
const FEEDBACK_OPTIONS = [
  { key: "great", label: "Great", icon: FaThumbsUp, color: "text-sky-500", darkColor: "text-sky-400" },
  { key: "love", label: "Loved", icon: FaHeart, color: "text-rose-500", darkColor: "text-rose-400" },
  { key: "impressive", label: "Wow", icon: FaRocket, color: "text-violet-500", darkColor: "text-violet-400" },
  { key: "innovative", label: "Fresh", icon: FaLightbulb, color: "text-amber-500", darkColor: "text-amber-400" },
  { key: "wellDone", label: "Polished", icon: FaGem, color: "text-cyan-500", darkColor: "text-cyan-400" },
  { key: "onPoint", label: "Sharp", icon: FaCheckCircle, color: "text-emerald-500", darkColor: "text-emerald-400" },
];

const initialCounts = {
  great: 0,
  love: 0,
  impressive: 0,
  innovative: 0,
  wellDone: 0,
  onPoint: 0,
  total: 0,
  dailyTotal: 0,
  weeklyTotal: 0,
};

export const EmojiFeedback = ({ className, isDarkMode, adminKey = null }) => {
  const store = useMemo(() => createFeedbackStore(), []);
  const [counts, setCounts] = useState(initialCounts);
  const [hasVoted, setHasVoted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const [optOut, setOptOut] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [clickedEmoji, setClickedEmoji] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  useEffect(() => {
    let mounted = true;
    let unsubscribe = null;
    
    // Check opt-out status with fallback for incognito mode
    let optOutStatus = false;
    try {
      optOutStatus = localStorage.getItem(FEEDBACK_OPT_OUT_KEY) === "true";
    } catch (e) {
      // Incognito mode - assume not opted out
      optOutStatus = false;
    }
    setOptOut(optOutStatus);

    if (!optOutStatus) {
      const id = getDeviceId();
      setDeviceId(id);

      // Check if device has voted
      store
        .hasDeviceVoted(id)
        .then((voted) => {
          if (mounted) setHasVoted(voted);
        })
        .catch(() => {
          // Fallback to localStorage/sessionStorage check
          if (mounted) {
            let hasVotedLocal = false;
            try {
              hasVotedLocal = Boolean(localStorage.getItem(FEEDBACK_LOCAL_VOTE_KEY));
            } catch (e) {
              // Try sessionStorage for incognito mode
              try {
                hasVotedLocal = Boolean(sessionStorage.getItem(FEEDBACK_LOCAL_VOTE_KEY));
              } catch (sessionError) {
                // Allow voting even if storage fails
                hasVotedLocal = false;
              }
            }
            setHasVoted(hasVotedLocal);
          }
        });

      // Subscribe to real-time updates if available
      if (store.subscribeToUpdates) {
        store.subscribeToUpdates((counts) => {
          if (mounted) {
            setCounts(counts);
            setLoading(false);
          }
        }).then((unsub) => {
          unsubscribe = unsub;
        }).catch(() => {
          // Fallback to one-time fetch if real-time not available
          store
            .getCounts()
            .then((c) => {
              if (mounted) setCounts(c);
            })
            .catch(() => {
              if (mounted) setError("Failed to load feedback");
            })
            .finally(() => {
              if (mounted) setLoading(false);
            });
        });
      } else {
        // Fallback for LocalStorage store (no real-time)
        store
          .getCounts()
          .then((c) => {
            if (mounted) setCounts(c);
          })
          .catch(() => {
            if (mounted) setError("Failed to load feedback");
          })
          .finally(() => {
            if (mounted) setLoading(false);
          });
      }
    } else {
      setLoading(false);
    }

    return () => {
      mounted = false;
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [store, optOut]);

  const onClick = async (key) => {
    if (hasVoted || loading || optOut || !deviceId) return;

    setClickedEmoji(key);
    try {
      setLoading(true);
      const updated = await store.increment(key, deviceId);
      setCounts(updated);
      
      // Mark as voted in storage (with fallback for incognito)
      try {
        localStorage.setItem(FEEDBACK_LOCAL_VOTE_KEY, "1");
      } catch (e) {
        try {
          sessionStorage.setItem(FEEDBACK_LOCAL_VOTE_KEY, "1");
        } catch (sessionError) {
          // Storage not available, but vote still recorded in Firebase
        }
      }
      
      setHasVoted(true);
      setTimeout(() => setClickedEmoji(null), 1000);
    } catch (e) {
      if (e.message.includes("already voted")) {
        setHasVoted(true);
        try {
          localStorage.setItem(FEEDBACK_LOCAL_VOTE_KEY, "1");
        } catch (storageError) {
          try {
            sessionStorage.setItem(FEEDBACK_LOCAL_VOTE_KEY, "1");
          } catch (sessionError) {
            // Ignore storage errors
          }
        }
      } else {
        setError("Failed to submit feedback");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOptOut = () => {
    const newOptOut = !optOut;
    setOptOut(newOptOut);
    try {
      localStorage.setItem(FEEDBACK_OPT_OUT_KEY, newOptOut.toString());
    } catch (e) {
      // Storage not available in incognito
    }
    if (newOptOut) {
      setHasVoted(false);
      setCounts(initialCounts);
    }
  };

  const handleAdminReset = async () => {
    if (adminPassword !== adminKey || !adminKey) {
      alert("Invalid admin key");
      return;
    }
    if (!window.confirm("Are you sure you want to reset all feedback data?")) {
      return;
    }
    try {
      await store.reset();
      setCounts(initialCounts);
      setHasVoted(false);
      try {
        localStorage.removeItem(FEEDBACK_LOCAL_VOTE_KEY);
      } catch (e) {
        try {
          sessionStorage.removeItem(FEEDBACK_LOCAL_VOTE_KEY);
        } catch (sessionError) {
          // Ignore storage errors
        }
      }
      alert("Feedback data reset successfully");
      setShowAdmin(false);
      setAdminPassword("");
    } catch (e) {
      alert("Failed to reset feedback data");
    }
  };

  const cardBg = isDarkMode ? "bg-gray-900/60 border-gray-800" : "bg-white border-gray-200";
  const textMuted = isDarkMode ? "text-gray-300" : "text-gray-600";
  const ring = isDarkMode ? "hover:ring-gray-600" : "hover:ring-gray-300";
  const linkColor = isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700";

  if (optOut) {
    return (
      <div className={`w-full border ${cardBg} rounded-lg p-3 shadow-sm ${className || ""}`}>
        <div className="flex items-center justify-between">
          <p className={`text-xs ${textMuted}`}>Feedback widget is disabled</p>
          <button
            onClick={handleOptOut}
            className={`text-xs ${linkColor} underline`}
          >
            Enable
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full border ${cardBg} rounded-lg p-3 sm:p-4 shadow-sm ${className || ""}`}
    >
      <div className="flex items-baseline justify-between gap-2 flex-wrap">
        <h3 className="text-sm sm:text-base font-semibold">How do you feel about this portfolio?</h3>
        <div className={`text-xs ${textMuted}`}>
          {counts.total} people have shared their thoughts
        </div>
      </div>

      {counts.dailyTotal > 0 && (
        <div className={`mt-1.5 text-xs ${textMuted}`}>
          {counts.dailyTotal} reacted today • {counts.weeklyTotal} this week
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {FEEDBACK_OPTIONS.map((option) => {
          const IconComponent = option.icon;
          const isClicked = clickedEmoji === option.key;
          const iconColor = isDarkMode ? option.darkColor : option.color;
          
          return (
            <motion.button
              key={option.key}
              onClick={() => onClick(option.key)}
              disabled={hasVoted || loading}
              whileHover={!hasVoted && !loading ? { scale: 1.05 } : {}}
              whileTap={!hasVoted && !loading ? { scale: 0.95 } : {}}
              animate={
                isClicked
                  ? {
                      scale: [1, 1.25, 1],
                      rotate: [0, 8, -8, 0],
                    }
                  : {}
              }
              transition={{ duration: 0.3 }}
              className={`group flex flex-col items-center justify-center gap-1 border rounded-lg py-2.5 px-2 transition shadow-sm disabled:opacity-60 disabled:cursor-not-allowed ${ring} ${cardBg}`}
            >
              <motion.div
                className={`${iconColor} text-base sm:text-lg`}
                aria-hidden
                animate={isClicked ? { scale: [1, 1.4, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <IconComponent />
              </motion.div>
              <span className="text-xs font-medium leading-tight">{option.label}</span>
              <motion.span
                className={`text-xs ${textMuted} leading-tight`}
                animate={isClicked ? { scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {counts[option.key]}
              </motion.span>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-between flex-wrap gap-2">
        <div className="text-xs">
          {error ? (
            <span className="text-red-500">{error}</span>
          ) : hasVoted ? (
            <span className={textMuted}>Thanks for your feedback!</span>
          ) : (
            <span className={textMuted}>Click an option to share your quick feedback</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPrivacy(!showPrivacy)}
            className={`text-xs ${linkColor} underline`}
          >
            Privacy
          </button>
          {adminKey && (
            <button
              onClick={() => setShowAdmin(!showAdmin)}
              className={`text-xs ${linkColor} underline`}
            >
              Admin
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showPrivacy && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`mt-2 p-2 rounded-md border ${cardBg} text-xs ${textMuted}`}
          >
            <p className="mb-1.5">
              <strong>Privacy Notice:</strong> This widget uses device fingerprinting to prevent duplicate votes.
              No personal information is collected. Your vote is stored locally and optionally synced to a secure database.
            </p>
            <button
              onClick={() => setShowPrivacy(false)}
              className={`${linkColor} underline`}
            >
              Close
            </button>
          </motion.div>
        )}

        {showAdmin && adminKey && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`mt-2 p-2 rounded-md border ${cardBg}`}
          >
            <p className={`text-xs ${textMuted} mb-1.5`}>Admin Reset</p>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              placeholder="Enter admin key"
              className={`w-full px-2 py-1 text-xs rounded border ${
                isDarkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300"
              } mb-1.5`}
            />
            <button
              onClick={handleAdminReset}
              className={`w-full px-2 py-1 text-xs rounded ${
                isDarkMode
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
            >
              Reset All Feedback
            </button>
            <button
              onClick={() => {
                setShowAdmin(false);
                setAdminPassword("");
              }}
              className={`mt-1.5 w-full px-2 py-1 text-xs rounded border ${cardBg} ${textMuted}`}
            >
              Cancel
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmojiFeedback;
