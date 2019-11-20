import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import config from "./config.json";

const firebase = require("firebase");
require("firebase/firestore");
// const config = require("../config.json");
// Initialize Firebase
firebase.initializeApp({
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  databaseURL: config.DATABASE_URL,
  projectId: config.PROJECT_ID,
  storageBucket: config.STORAGE_BUCKET,
  messagingSenderId: config.MESSAGING_SENDER_ID,
  appId: config.APP_ID,
  measurementId: config.MEASUREMENT_ID
});
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("evernote-container"));
