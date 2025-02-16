interface Config {
  firebaseApiKey: string;
  firebaseAuthDomain: string;
  firebaseProjectId: string;
  firebaseStorageBucket: string;
  messageSender: string;
  appId: string;
  measurementId: string;
}

export const config: Config = {
  firebaseApiKey: process.env.REACT_APP_FIREBASE_API_KEY || "",
  firebaseAuthDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "",
  firebaseProjectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "",
  firebaseStorageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "",
  messageSender: process.env.REACT_APP_MESSAGE_SENDER || "",
  appId: process.env.REACT_APP_APP_ID || "",
  measurementId: process.env.REACT_MEASUREMENT_ID || "",
};
