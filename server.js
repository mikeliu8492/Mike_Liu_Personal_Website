// Get the packages we need
const express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    path = require('path'),
    bluebird = require('bluebird')
    bodyParser = require('body-parser')
    favicon = require('serve-favicon');

mongoose.Promise = bluebird

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

// Create our Express application
const app = express();



// Connect to a MongoDB
mongoose.connect(process.env.DB_STRING, { useMongoClient: true});

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")))

// Use api routes as a module as a module (see api.js)
const api = require('./api.js');
app.use('/api', api(app, router));

// Serve up the front-end static JS Bundle contents
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}
else{
    console.log("NOT PRODUCTION!")
}


// Start the server
app.listen(process.env.PORT || 5000)
