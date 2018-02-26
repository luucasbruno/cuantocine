const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const http = require('@angular/http').Jsonp
// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/cuantocine', (err, client) => {
        if (err) return console.log(err);
        let db = client.db('cuantocine');
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get one film from DB
router.get('/film', (req, res) => {
    id = req.query.id;
    
    connection((db) => {
        db.collection('films')
            .findOne({tconst: id})
            .then((film) => {
                response.data = film;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
// Get all posts from main feed 
router.get('/posts', (req, res) => {
    connection((db) => {
        db.collection('posts')
            .find()
            .limit(200)
            .toArray()
            .then((films) => {
                response.data = films;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
router.get('/post', (req, res) => {
    var id = req.query.id;
    var o_id = new ObjectID(id);
    connection((db) => {
        db.collection('posts')
            .findOne({_id: o_id})
            .then((post) => {
                response.data = post;
                               
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;