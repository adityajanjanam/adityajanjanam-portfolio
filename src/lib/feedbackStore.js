/* eslint-disable no-undef */
const DEFAULT_COUNTS = {
  great: 0,
  love: 0,
  impressive: 0,
  innovative: 0,
  wellDone: 0,
  onPoint: 0,
  total: 0,
  dailyTotal: 0,
  weeklyTotal: 0,
  todayDate: null,
  weekStartDate: null,
  reactions: [], // Array of { emoji, timestamp, deviceId }
};

// Helper functions for date calculations
function getTodayKey() {
  return new Date().toISOString().split("T")[0]; // YYYY-MM-DD
}

function getWeekStartKey() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diff = today.getDate() - dayOfWeek; // Sunday = 0
  const weekStart = new Date(today.setDate(diff));
  return weekStart.toISOString().split("T")[0];
}

function calculateDailyWeekly(reactions, todayKey, weekStartKey) {
  if (!Array.isArray(reactions)) reactions = [];
  const today = reactions.filter(
    (r) => r.timestamp && r.timestamp.split("T")[0] === todayKey
  ).length;
  const weekStart = new Date(weekStartKey);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 7);
  const thisWeek = reactions.filter((r) => {
    if (!r.timestamp) return false;
    const reactionDate = new Date(r.timestamp);
    return reactionDate >= weekStart && reactionDate < weekEnd;
  }).length;

  return { dailyTotal: today, weeklyTotal: thisWeek };
}

class LocalStorageFeedbackStore {
  constructor(storageKey = "emojiFeedbackCounts") {
    this.storageKey = storageKey;
    if (!globalThis.localStorage.getItem(this.storageKey)) {
      const todayKey = getTodayKey();
      const weekStartKey = getWeekStartKey();
      globalThis.localStorage.setItem(
        this.storageKey,
        JSON.stringify({
          ...DEFAULT_COUNTS,
          todayDate: todayKey,
          weekStartDate: weekStartKey,
        })
      );
    }
  }

  async getCounts() {
    try {
      const raw = globalThis.localStorage.getItem(this.storageKey);
      if (!raw) return { ...DEFAULT_COUNTS };
      const counts = JSON.parse(raw);
      const todayKey = getTodayKey();
      const weekStartKey = getWeekStartKey();

      // Reset daily/weekly if date changed
      if (counts.todayDate !== todayKey || counts.weekStartDate !== weekStartKey) {
        const { dailyTotal, weeklyTotal } = calculateDailyWeekly(
          counts.reactions || [],
          todayKey,
          weekStartKey
        );
        counts.dailyTotal = dailyTotal;
        counts.weeklyTotal = weeklyTotal;
        counts.todayDate = todayKey;
        counts.weekStartDate = weekStartKey;
        globalThis.localStorage.setItem(this.storageKey, JSON.stringify(counts));
      }

      return { ...DEFAULT_COUNTS, ...counts };
    } catch {
      return { ...DEFAULT_COUNTS };
    }
  }

  async increment(emoji, deviceId) {
    const counts = await this.getCounts();
    const todayKey = getTodayKey();
    const weekStartKey = getWeekStartKey();

    // Check if this device already voted
    const hasVoted = (counts.reactions || []).some((r) => r.deviceId === deviceId);
    if (hasVoted) {
      throw new Error("Device has already voted");
    }

    counts[emoji] = (counts[emoji] || 0) + 1;
    counts.total = (counts.total || 0) + 1;

    // Add reaction with timestamp
    if (!counts.reactions) counts.reactions = [];
    counts.reactions.push({
      emoji,
      timestamp: new Date().toISOString(),
      deviceId,
    });

    // Update daily/weekly
    const { dailyTotal, weeklyTotal } = calculateDailyWeekly(counts.reactions || [], todayKey, weekStartKey);
    counts.dailyTotal = dailyTotal;
    counts.weeklyTotal = weeklyTotal;
    counts.todayDate = todayKey;
    counts.weekStartDate = weekStartKey;

    globalThis.localStorage.setItem(this.storageKey, JSON.stringify(counts));
    return counts;
  }

  async hasDeviceVoted(deviceId) {
    const counts = await this.getCounts();
    return (counts.reactions || []).some((r) => r.deviceId === deviceId);
  }

  async reset() {
    const todayKey = getTodayKey();
    const weekStartKey = getWeekStartKey();
    const resetData = {
      ...DEFAULT_COUNTS,
      todayDate: todayKey,
      weekStartDate: weekStartKey,
    };
    globalThis.localStorage.setItem(this.storageKey, JSON.stringify(resetData));
    return resetData;
  }
}

// Lazy Firebase import; only used when config is present
class FirestoreFeedbackStore {
  constructor(docPath = "feedback/portfolio") {
    this.docPath = docPath;
  }

  async init() {
    if (this.firestore) return;
    const { initializeApp, getApps } = await import("firebase/app");
    const { getFirestore, doc, getDoc, setDoc, updateDoc, increment, collection, query, where, getDocs, onSnapshot } = await import("firebase/firestore");
    // eslint-disable-next-line no-undef
    const config = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
    };
    if (!config.apiKey || !config.projectId) {
      throw new Error("Firebase config missing");
    }
    // Use existing Firebase app if available, otherwise create new one
    const existingApps = getApps();
    this.firebaseApp = existingApps.length > 0 ? existingApps[0] : initializeApp(config);
    this.firestore = getFirestore(this.firebaseApp);
    this._doc = doc;
    this._getDoc = getDoc;
    this._setDoc = setDoc;
    this._updateDoc = updateDoc;
    this._increment = increment;
    this._collection = collection;
    this._query = query;
    this._where = where;
    this._getDocs = getDocs;
    this._onSnapshot = onSnapshot;
  }

  async getCounts() {
    await this.init();
    const [collectionName, id] = this.docPath.split("/");
    const ref = this._doc(this.firestore, collectionName, id);
    const snap = await this._getDoc(ref);

    if (!snap.exists()) {
      const todayKey = getTodayKey();
      const weekStartKey = getWeekStartKey();
      return {
        ...DEFAULT_COUNTS,
        todayDate: todayKey,
        weekStartDate: weekStartKey,
      };
    }

    const data = snap.data();
    const todayKey = getTodayKey();
    const weekStartKey = getWeekStartKey();

    // Calculate daily/weekly from reactions
    const reactions = data.reactions || [];
    const { dailyTotal, weeklyTotal } = calculateDailyWeekly(reactions, todayKey, weekStartKey);

    return {
      ...DEFAULT_COUNTS,
      ...data,
      dailyTotal,
      weeklyTotal,
      todayDate: todayKey,
      weekStartDate: weekStartKey,
    };
  }

  async increment(emoji, deviceId) {
    await this.init();
    const [collectionName, id] = this.docPath.split("/");
    const ref = this._doc(this.firestore, collectionName, id);
    const snap = await this._getDoc(ref);

    // Check if device already voted
    if (snap.exists()) {
      const data = snap.data();
      const reactions = data.reactions || [];
      if (reactions.some((r) => r.deviceId === deviceId)) {
        throw new Error("Device has already voted");
      }
    }

    const timestamp = new Date().toISOString();
    const reaction = { emoji, timestamp, deviceId };

    if (!snap.exists()) {
      const todayKey = getTodayKey();
      const weekStartKey = getWeekStartKey();
      await this._setDoc(ref, {
        ...DEFAULT_COUNTS,
        [emoji]: 1,
        total: 1,
        dailyTotal: 1,
        weeklyTotal: 1,
        todayDate: todayKey,
        weekStartDate: weekStartKey,
        reactions: [reaction],
      });
      return {
        ...DEFAULT_COUNTS,
        [emoji]: 1,
        total: 1,
        dailyTotal: 1,
        weeklyTotal: 1,
        todayDate: todayKey,
        weekStartDate: weekStartKey,
        reactions: [reaction],
      };
    }

    // Update counts and add reaction
    await this._updateDoc(ref, {
      [emoji]: this._increment(1),
      total: this._increment(1),
    });

    // Add reaction to array (Firestore array union)
    const { arrayUnion } = await import("firebase/firestore");
    await this._updateDoc(ref, {
      reactions: arrayUnion(reaction),
    });

    const updated = await this._getDoc(ref);
    const data = updated.data();
    const todayKey = getTodayKey();
    const weekStartKey = getWeekStartKey();
    const { dailyTotal, weeklyTotal } = calculateDailyWeekly(
      data.reactions || [],
      todayKey,
      weekStartKey
    );

    return {
      ...DEFAULT_COUNTS,
      ...data,
      dailyTotal,
      weeklyTotal,
      todayDate: todayKey,
      weekStartDate: weekStartKey,
    };
  }

  async hasDeviceVoted(deviceId) {
    await this.init();
    const [collectionName, id] = this.docPath.split("/");
    const ref = this._doc(this.firestore, collectionName, id);
    const snap = await this._getDoc(ref);
    if (!snap.exists()) return false;
    const data = snap.data();
    const reactions = data.reactions || [];
    return reactions.some((r) => r.deviceId === deviceId);
  }

  async reset() {
    await this.init();
    const [collectionName, id] = this.docPath.split("/");
    const ref = this._doc(this.firestore, collectionName, id);
    const todayKey = getTodayKey();
    const weekStartKey = getWeekStartKey();
    const resetData = {
      ...DEFAULT_COUNTS,
      todayDate: todayKey,
      weekStartDate: weekStartKey,
    };
    await this._setDoc(ref, resetData);
    return resetData;
  }

  // Real-time listener for counts
  async subscribeToUpdates(callback) {
    await this.init();
    const [collectionName, id] = this.docPath.split("/");
    const ref = this._doc(this.firestore, collectionName, id);
    
    return this._onSnapshot(ref, (snap) => {
      const todayKey = getTodayKey();
      const weekStartKey = getWeekStartKey();
      
      if (!snap.exists()) {
        callback({
          ...DEFAULT_COUNTS,
          todayDate: todayKey,
          weekStartDate: weekStartKey,
        });
        return;
      }

      const data = snap.data();
      const reactions = data.reactions || [];
      const { dailyTotal, weeklyTotal } = calculateDailyWeekly(reactions, todayKey, weekStartKey);

      callback({
        ...DEFAULT_COUNTS,
        ...data,
        dailyTotal,
        weeklyTotal,
        todayDate: todayKey,
        weekStartDate: weekStartKey,
      });
    });
  }
}

export function createFeedbackStore() {
  // eslint-disable-next-line no-undef
  const hasFirebase = Boolean(
    process.env.REACT_APP_FIREBASE_API_KEY && process.env.REACT_APP_FIREBASE_PROJECT_ID
  );
  console.log("🔥 Firebase config check:", {
    hasApiKey: Boolean(process.env.REACT_APP_FIREBASE_API_KEY),
    hasProjectId: Boolean(process.env.REACT_APP_FIREBASE_PROJECT_ID),
    usingFirestore: hasFirebase
  });
  if (hasFirebase) {
    try {
      const store = new FirestoreFeedbackStore();
      console.log("✅ Created FirestoreFeedbackStore");
      return store;
    } catch (err) {
      console.error("❌ Failed to create FirestoreFeedbackStore, falling back to LocalStorage:", err);
      return new LocalStorageFeedbackStore();
    }
  }
  console.log("ℹ️ Using LocalStorageFeedbackStore (no Firebase config)");
  return new LocalStorageFeedbackStore();
}

export const FEEDBACK_LOCAL_VOTE_KEY = "emojiFeedbackVoted";
export const FEEDBACK_OPT_OUT_KEY = "emojiFeedbackOptOut";
