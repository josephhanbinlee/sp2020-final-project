// Import
const express = require("express");
const router = express.Router();
const app = express();
const port = process.env.PORT || 4000;

const firebase = require("firebase");

// Get config object to communicate with Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBAzVaQUZLREshHTHzbqyI7IY1I-Y6vkaA",
    authDomain: "final-project-d704f.firebaseapp.com",
    databaseURL: "https://final-project-d704f.firebaseio.com",
    projectId: "final-project-d704f",
    storageBucket: "final-project-d704f.appspot.com",
    messagingSenderId: "398220089345",
    appId: "1:398220089345:web:3b626a4fb2e047cd9d4800"
  };

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");

// Serve Static Files
app.use("/static", express.static("public"));
// Routing in Express
app.use("/", indexRoute);

app.listen(port, () => console.log("API is ready!"))