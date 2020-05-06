const express = require("express");
const router = express.Router();

const firebase = require("firebase");
const db = firebase.firestore();
const posts = db.collection("posts");

/*
const form = `<form action="/create-scrapbook/submit">
<input type="text" name="scrapbook" placeholder="Title" />
<input type="text" name="text" placeholder="Text" />
<button type="submit">Submit</button>
</form>`;

router.get("/", (req, res) => res.send(form));
*/

router.get("/", (req, res) => {
    const queryParams = req.query;
    console.log('queryParams', queryParams);

    posts
        .doc()
        .set(queryParams)
        .then(function(doc) {
            //res.send("<h1>Submission Successful</h1><p><a href='/create-scrapbook'>Create another Scrapbook</a></p>");
            console.log('success', doc);
            res.send({success: 'Successful submission'});
        })
        
        .catch(function(error) {
            console.log('Error', error);
            res.send(`Error Submitting: ${error.toString()}`);
    });
});

module.exports = router;