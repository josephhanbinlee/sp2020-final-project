const express = require("express");
const router = express.Router();
// Require Firebase
const firebase = require("firebase");

// Initialize Firestore Database
const db = firebase.firestore()
// Reference to collection
const posts = db.collection("posts");

// Get single blog post 
router.get("/", (req, res) => {
    res.send("Please Include an ID") })

router.get("/:id", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");

    const queryId = req.params.id;
    posts
        .doc(queryId)
        .get()
        .then(function(doc) {
            if (doc.exists) {
                return res.send(doc.data());
            } else {
                return res.send("No such document");
            }
        })
        .catch(function(error) {
            console.log('Error:', error);
            return res.send(error);
        });
    });

module.exports = router;