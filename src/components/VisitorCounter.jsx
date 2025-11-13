import { useEffect, useMemo, useState } from "react";
import { FaUsers } from "react-icons/fa";

import { getDeviceId } from "../lib/deviceFingerprint";
import { createVisitorStore } from "../lib/visitorStore";

export const VisitorCounter = ({ className, isDarkMode }) => {
  const store = useMemo(() => createVisitorStore(), []);
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    let pollingInterval = null;

    const trackAndLoad = async () => {
      try {
        const deviceId = getDeviceId();
        // Track the visitor
        await store.trackVisitor(deviceId);
        // Get the updated count
        const data = await store.getVisitorCount();
        if (mounted) {
          setVisitorCount(data.totalVisitors);
        }
      } catch (error) {
        console.error("Error tracking visitor:", error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    const updateCount = async () => {
      try {
        const data = await store.getVisitorCount();
        if (mounted) {
          setVisitorCount(data.totalVisitors);
        }
      } catch (error) {
        console.error("Error updating visitor count:", error);
      }
    };

    // Initial track and load
    trackAndLoad();

    // Poll for updates every 10 seconds to keep count fresh
    pollingInterval = setInterval(() => {
      if (mounted) {
        updateCount();
      }
    }, 10000); // Update every 10 seconds

    return () => {
      mounted = false;
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
    };
  }, [store]);

  const textMuted = isDarkMode ? "text-gray-300" : "text-gray-600";

  if (loading) {
    return null; // Don't show anything while loading
  }

  const iconColor = isDarkMode ? "text-cyan-400" : "text-blue-600";

  return (
    <div className={`text-xs ${textMuted} ${className || ""}`}>
      <div className="flex flex-col items-center gap-2">
        <span className="inline-flex items-center gap-1.5">
          <FaUsers className={`${iconColor} text-sm`} />
          <span className="font-medium">{visitorCount.toLocaleString()}</span>
          <span>total visitors</span>
        </span>
      </div>
    </div>
  );
};

// No default export; use named export only

