// Import
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const firebase = require("firebase");

// Get config object to communicate with Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBVf-2nfzRgrQKNUipch2Rsx7N_Gf5hI60",
    authDomain: "final-project-35589.firebaseapp.com",
    databaseURL: "https://final-project-35589.firebaseio.com",
    projectId: "final-project-35589",
    storageBucket: "final-project-35589.appspot.com",
    messagingSenderId: "450723592040",
    appId: "1:450723592040:web:346d2ada401c006a1608dd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Get Posts
const postsArray = []; // create array
const posts = db.collection("posts")

const allPosts = posts
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            // Push document into array
            postsArray.push(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error", error);
    })

// Get single post
const documentToGet = "sample-post"
const singlePost = posts
.doc(documentToGet)
.get()
.then(function(doc) {
    if (doc.exists) {
        console.log('Document data', doc.data());
    } else {
        console.log("No such document!");
    }
})
app.get("/", (req, res) => res.send(postsArray));

// Set up app so that it runs when this file is run
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);