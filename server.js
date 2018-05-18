// Get the packages we need
const express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    path = require('path'),
    bluebird = require('bluebird')
    bodyParser = require('body-parser');

mongoose.Promise = bluebird

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

// Create our Express application
const app = express();

// Use environment defined port or 5000
const port = process.env.PORT || 5000;

// Connect to a MongoDB
mongoose.connect(process.env.DB_STRING, { useMongoClient: true});

// Allow CORS so that backend and frontend could be put on different servers

const allowCrossDomain = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
};
app.use(allowCrossDomain);


// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Use api routes as a module as a module (see api.js)
const api = require('./api.js');
app.use('/api', api(app, router));


// Serve up the front-end static JS Bundle contents
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


// Start the server
app.listen(port);
console.log('Server running on port ' + port);