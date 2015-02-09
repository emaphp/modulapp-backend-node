/**
 * index.js - Main application
 */

var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');

//create app
var app = express();

//setup configuration
app.set('port', (process.env.PORT || 5000));
app.set('db', (process.env.DB || 'mongodb://localhost/modulapp-node'));

//enable cors
app.use(cors());

//append routes
require('./notes')(app);
require('./contacts')(app);

//404 route
app.use(function(req, res, next) {
    return res.send(404, "Not Found");
});

//connect to database
mongoose.connect(app.get('db'));

//ready and serve
app.listen(app.get('port'));