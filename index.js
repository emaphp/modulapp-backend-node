/**
 * index.js - Main application
 */

var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//create app
var app = express();

//setup configuration
app.set('port', (process.env.PORT || 5000));
app.set('db', (process.env.DB || 'mongodb://localhost/modulapp-node'));

//body parser
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

//enable cors
app.use(cors());

//append routes
require('./notes')(app);
require('./contacts')(app);

//404 route
app.use(function(req, res, next) {
    return res.status(404).send("Not Found");
});

//connect to database
mongoose.connect(app.get('db'));

//ready and serve
app.listen(app.get('port'));