// Get the packages we need
const express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    path = require('path'),
    bluebird = require('bluebird'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon')

mongoose.Promise = bluebird

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

// Create our Express application
const app = express();
const secure = require('express-force-https');


let HOST = ""
if (process.env.NODE_ENV === 'production'){
    HOST = "http://mikeliu8492.herokuapp.com"
}
else {
    HOST = "http://wwww.localhost:5000"
}


const allowCrossDomain = (req, res, next) => {
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization");
    //res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    
    next();
};
app.use(allowCrossDomain);


// Connect to a MongoDB
mongoose.connect(process.env.DB_STRING, { useMongoClient: true});

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")))

// Equip the API With Middleware
const api = require('./api.js');

app.use('/api', api(app, router));

// Serve up the front-end static JS Bundle contents in production environment
if(process.env.NODE_ENV !== "production"){
    //app.use(secure)
    app.use(express.static('client/build'));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client','build', 'index.html'), (err) => {
            if (err) {
              res.status(500).send(err)
            }
          }
        );
    });    
}
else{
    console.log("NOT PRODUCTION!")
}

app.listen(process.env.PORT || 5000 )
