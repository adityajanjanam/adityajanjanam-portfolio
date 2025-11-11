const DEFAULT_VISITOR_DATA = {
  totalVisitors: 0,
  visitors: [], // Array of { deviceId, timestamp, firstVisit }
  activeSessions: {}, // Object of { deviceId: lastHeartbeat }
  lastResetDate: null,
};

// Active session timeout (3 minutes)
const ACTIVE_SESSION_TIMEOUT = 3 * 60 * 1000; // 3 minutes in milliseconds

// Helper function to get today's date key
function getTodayKey() {
  return new Date().toISOString().split("T")[0]; // YYYY-MM-DD
}

class LocalStorageVisitorStore {
  constructor(storageKey = "visitorCounts") {
    this.storageKey = storageKey;
    if (!window.localStorage.getItem(this.storageKey)) {
      const todayKey = getTodayKey();
      window.localStorage.setItem(
        this.storageKey,
        JSON.stringify({
          ...DEFAULT_VISITOR_DATA,
          lastResetDate: todayKey,
        })
      );
    }
  }

  async getVisitorCount() {
    try {
      const raw = window.localStorage.getItem(this.storageKey);
      if (!raw) return { totalVisitors: 0, visitors: [], activeViewers: 0 };
      const data = JSON.parse(raw);
      
      // Calculate active viewers (sessions with heartbeat in last 3 minutes)
      const now = Date.now();
      const activeSessions = data.activeSessions || {};
      const activeViewers = Object.keys(activeSessions).filter(deviceId => {
        const lastHeartbeat = activeSessions[deviceId];
        return (now - lastHeartbeat) < ACTIVE_SESSION_TIMEOUT;
      }).length;
      
      return {
        totalVisitors: data.totalVisitors || 0,
        visitors: data.visitors || [],
        activeViewers,
      };
    } catch {
      return { totalVisitors: 0, visitors: [], activeViewers: 0 };
    }
  }

  async updateActiveSession(deviceId) {
    try {
      const raw = window.localStorage.getItem(this.storageKey);
      const data = raw ? JSON.parse(raw) : { ...DEFAULT_VISITOR_DATA };
      
      if (!data.activeSessions) {
        data.activeSessions = {};
      }
      
      data.activeSessions[deviceId] = Date.now();
      
      // Clean up old sessions
      const now = Date.now();
      Object.keys(data.activeSessions).forEach(id => {
        if ((now - data.activeSessions[id]) >= ACTIVE_SESSION_TIMEOUT) {
          delete data.activeSessions[id];
        }
      });
      
      window.localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.error("Error updating active session:", error);
    }
  }

  async trackVisitor(deviceId) {
    const data = await this.getVisitorCount();
    const visitors = data.visitors || [];

    // Check if this device has visited before
    const existingVisitor = visitors.find((v) => v.deviceId === deviceId);
    
    if (!existingVisitor) {
      // New visitor
      const timestamp = new Date().toISOString();
      visitors.push({
        deviceId,
        timestamp,
        firstVisit: timestamp,
      });
      
      const updatedData = {
        totalVisitors: visitors.length,
        visitors,
        lastResetDate: getTodayKey(),
      };
      
      window.localStorage.setItem(this.storageKey, JSON.stringify(updatedData));
      return { totalVisitors: visitors.length, isNewVisitor: true };
    }
    
    return { totalVisitors: visitors.length, isNewVisitor: false };
  }

  async reset() {
    const resetData = {
      ...DEFAULT_VISITOR_DATA,
      lastResetDate: getTodayKey(),
    };
    window.localStorage.setItem(this.storageKey, JSON.stringify(resetData));
    return resetData;
  }
}

// Lazy Firebase import; only used when config is present
class FirestoreVisitorStore {
  constructor(docPath = "visitors/portfolio") {
    this.docPath = docPath;
  }

  async init() {
    if (this.firestore) return;
    const { initializeApp } = await import("firebase/app");
    const { getFirestore, doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs } = await import("firebase/firestore");
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
    this.firebaseApp = initializeApp(config);
    this.firestore = getFirestore(this.firebaseApp);
    this._doc = doc;
    this._getDoc = getDoc;
    this._setDoc = setDoc;
    this._updateDoc = updateDoc;
    this._collection = collection;
    this._query = query;
    this._where = where;
    this._getDocs = getDocs;
  }

  async getVisitorCount() {
    await this.init();
    const [collectionName, id] = this.docPath.split("/");
    const ref = this._doc(this.firestore, collectionName, id);
    const snap = await this._getDoc(ref);

    if (!snap.exists()) {
      return { totalVisitors: 0, visitors: [], activeViewers: 0 };
    }

    const data = snap.data();
    
    // Calculate active viewers from activeSessions
    const now = Date.now();
    const activeSessions = data.activeSessions || {};
    const activeViewers = Object.keys(activeSessions).filter(deviceId => {
      const lastHeartbeat = activeSessions[deviceId];
      return (now - lastHeartbeat) < ACTIVE_SESSION_TIMEOUT;
    }).length;
    
    return {
      totalVisitors: data.totalVisitors || 0,
      visitors: data.visitors || [],
      activeViewers,
    };
  }

  async updateActiveSession(deviceId) {
    await this.init();
    const [collectionName, id] = this.docPath.split("/");
    const ref = this._doc(this.firestore, collectionName, id);
    const snap = await this._getDoc(ref);

    const now = Date.now();
    let activeSessions = {};

    if (snap.exists()) {
      const data = snap.data();
      activeSessions = data.activeSessions || {};
    }

    // Update this device's heartbeat
    activeSessions[deviceId] = now;

    // Clean up old sessions
    Object.keys(activeSessions).forEach(id => {
      if ((now - activeSessions[id]) >= ACTIVE_SESSION_TIMEOUT) {
        delete activeSessions[id];
      }
    });

    if (!snap.exists()) {
      await this._setDoc(ref, {
        ...DEFAULT_VISITOR_DATA,
        activeSessions,
      });
    } else {
      await this._updateDoc(ref, {
        activeSessions,
      });
    }
  }

  async trackVisitor(deviceId) {
    await this.init();
    const [collectionName, id] = this.docPath.split("/");
    const ref = this._doc(this.firestore, collectionName, id);
    const snap = await this._getDoc(ref);

    const timestamp = new Date().toISOString();

    if (!snap.exists()) {
      // First visitor ever
      const visitor = {
        deviceId,
        timestamp,
        firstVisit: timestamp,
      };
      await this._setDoc(ref, {
        totalVisitors: 1,
        visitors: [visitor],
        activeSessions: { [deviceId]: Date.now() },
        lastResetDate: getTodayKey(),
      });
      return { totalVisitors: 1, isNewVisitor: true };
    }

    const data = snap.data();
    const visitors = data.visitors || [];

    // Check if this device has visited before
    const existingVisitor = visitors.find((v) => v.deviceId === deviceId);

    if (!existingVisitor) {
      // New visitor - read current array, add new visitor, write back
      const visitor = {
        deviceId,
        timestamp,
        firstVisit: timestamp,
      };
      const updatedVisitors = [...visitors, visitor];
      
      // Also update active session for new visitor
      const activeSessions = { ...(data.activeSessions || {}), [deviceId]: Date.now() };
      
      await this._updateDoc(ref, {
        totalVisitors: updatedVisitors.length,
        visitors: updatedVisitors,
        activeSessions,
      });

      return { totalVisitors: updatedVisitors.length, isNewVisitor: true };
    }

    return { totalVisitors: data.totalVisitors || 0, isNewVisitor: false };
  }

  async reset() {
    await this.init();
    const [collectionName, id] = this.docPath.split("/");
    const ref = this._doc(this.firestore, collectionName, id);
    const resetData = {
      ...DEFAULT_VISITOR_DATA,
      lastResetDate: getTodayKey(),
    };
    await this._setDoc(ref, resetData);
    return resetData;
  }
}

export function createVisitorStore() {
  const hasFirebase = Boolean(
    process.env.REACT_APP_FIREBASE_API_KEY && process.env.REACT_APP_FIREBASE_PROJECT_ID
  );
  if (hasFirebase) {
    try {
      return new FirestoreVisitorStore();
    } catch {
      return new LocalStorageVisitorStore();
    }
  }
  return new LocalStorageVisitorStore();
}

