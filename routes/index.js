const express = require("express");
const router = express.Router();

const firebase = require("firebase");

//Initialize Firestore Database
const db = firebase.firestore();

// Ref to Collections
const posts = db.collection("posts");

router.get("/", (req, res) => {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
    // Create array
    const postsArray = [];
    // Get posts
    posts
        .get()
        .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // Push document into array every time the query loops over existing articles
            postsArray.push(doc.data());
        });
        return res.send(postsArray);
    })
    .catch(function(error) {
        console.log('Error:', error);
        return res.send(error);
    });
});

module.exports = router;