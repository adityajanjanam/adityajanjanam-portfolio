import { useEffect, useMemo, useState } from "react";
import { FaEye, FaUsers } from "react-icons/fa";

import { getDeviceId } from "../lib/deviceFingerprint";
import { createVisitorStore } from "../lib/visitorStore";

export const VisitorCounter = ({ className, isDarkMode }) => {
  const store = useMemo(() => createVisitorStore(), []);
  const [visitorCount, setVisitorCount] = useState(0);
  const [activeViewers, setActiveViewers] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    let heartbeatInterval = null;

    const trackAndLoad = async () => {
      try {
        const deviceId = getDeviceId();
        // Track the visitor
        await store.trackVisitor(deviceId);
        // Update active session
        await store.updateActiveSession(deviceId);
        
        // Get the updated count
        const data = await store.getVisitorCount();
        if (mounted) {
          setVisitorCount(data.totalVisitors);
          setActiveViewers(data.activeViewers || 0);
        }
      } catch (error) {
        console.error("Error tracking visitor:", error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    const updateCounts = async () => {
      try {
        const deviceId = getDeviceId();
        await store.updateActiveSession(deviceId);
        const data = await store.getVisitorCount();
        if (mounted) {
          setActiveViewers(data.activeViewers || 0);
        }
      } catch (error) {
        console.error("Error updating counts:", error);
      }
    };

    trackAndLoad();

    // Set up heartbeat to update active session every 30 seconds
    heartbeatInterval = setInterval(() => {
      if (mounted) {
        updateCounts();
      }
    }, 30000); // 30 seconds

    // Update active session on page visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden && mounted) {
        updateCounts();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Update on window focus
    const handleFocus = () => {
      if (mounted) {
        updateCounts();
      }
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      mounted = false;
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
    };
  }, [store]);

  const textMuted = isDarkMode ? "text-gray-300" : "text-gray-600";

  if (loading) {
    return null; // Don't show anything while loading
  }

  const iconColor = isDarkMode ? "text-cyan-400" : "text-blue-600";
  const activeIconColor = isDarkMode ? "text-green-400" : "text-green-600";

  return (
    <div className={`text-xs ${textMuted} ${className || ""}`}>
      <div className="flex flex-col items-center gap-2">
        <span className="inline-flex items-center gap-1.5">
          <FaUsers className={`${iconColor} text-sm`} />
          <span className="font-medium">{visitorCount.toLocaleString()}</span>
          <span>total visitors</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FaEye className={`${activeIconColor} text-sm animate-pulse`} />
          <span className="font-medium">{activeViewers}</span>
          <span>viewing now</span>
        </span>
      </div>
    </div>
  );
};

// No default export; use named export only

