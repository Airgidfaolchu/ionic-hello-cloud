var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

function helloRoute() {
    var hello = new express.Router();
    hello.use(cors());
    hello.use(bodyParser());


    // GET REST endpoint - query params may or may not be populated
    hello.get('/', function(req, res) {
        var word = req.query.payload.userInput;

        // see http://expressjs.com/4x/api.html#res.json
        res.json(200, {
            msg: 'FeedHenry says: Hello ' + word
        });
    });

    // POST REST endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
    // This can also be added in application.js
    // See: https://github.com/senchalabs/connect#middleware for a list of Express 4 middleware
    hello.post('/', function(req, res) {
        var word = req.body.payload.userInput;
        if (res != null || undefined) {
            // see http://expressjs.com/4x/api.html#res.json
            res.json(200, {
                msg: 'FeedHenry says: Hello ' + word
            });
            console.log('Hello Cloud call Successful ');
        } else {
            res.json(500, {
                error: 'hello failed'
            });
            console.error('hello failed');
        }
    });

    return hello;
};

module.exports = helloRoute;