// Simple device fingerprinting for vote prevention
// Uses browser characteristics to create a unique (but not perfect) identifier

export function generateDeviceFingerprint() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.textBaseline = "top"; 
  ctx.font = "14px 'Arial'";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#f60";
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = "#069";
  ctx.fillText("Device fingerprint", 2, 15);
  ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
  ctx.fillText("Device fingerprint", 4, 17);

  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    screen.width + "x" + screen.height,
    new Date().getTimezoneOffset(),
    canvas.toDataURL(),
    navigator.hardwareConcurrency || "unknown",
    navigator.platform,
  ].join("|");

  // Simple hash function
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
}

export function getDeviceId() {
  const STORAGE_KEY = "emojiFeedbackDeviceId";
  let deviceId;
  
  // Try localStorage first (normal mode)
  try {
    deviceId = localStorage.getItem(STORAGE_KEY);
    if (!deviceId) {
      deviceId = generateDeviceFingerprint();
      localStorage.setItem(STORAGE_KEY, deviceId);
    }
  } catch (e) {
    // Fallback for incognito mode or localStorage disabled
    // Use session-based storage or just the fingerprint
    deviceId = sessionStorage.getItem(STORAGE_KEY);
    if (!deviceId) {
      deviceId = generateDeviceFingerprint();
      try {
        sessionStorage.setItem(STORAGE_KEY, deviceId);
      } catch (sessionError) {
        // If even sessionStorage fails, just use the fingerprint directly
        // This will regenerate on page reload but allows voting in incognito
      }
    }
  }
  
  return deviceId;
}

