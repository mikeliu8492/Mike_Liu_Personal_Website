let finalPrivateKey = ""

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
  finalPrivateKey = process.env.FIREBASE_PRIVATE_KEY
}
else {
  finalPrivateKey = JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
}

const serviceAccount = require('./firebase_admin_cert')


const serviceAccountCredentials = {
    "type": process.env.FIREBASE_ACCOUNT_TYPE,
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
    "private_key": finalPrivateKey,
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_CLIENT_ID,
    "auth_uri": process.env.FIREBASE_AUTH_URI,
    "token_uri": process.env.FIREBASE_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
}

const admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DB_URL
});

const extractBearerToken = (req, res) => {
    let tokenProps = null
    return new Promise((resolve, reject) => {
        try{
            if(req.headers.authorization === undefined || req.headers.authorization === null){
                reject({status: 401, error: true, message:  "You didn't send a token.  Access denied"})
            }
    
            tokenProps = req.headers.authorization.split(" ");
            
            if(tokenProps.length < 2 || tokenProps[0] !== "Bearer"){
                reject({status: 401, error: true, message:  "Invalid token payload format"})
            }

            resolve(tokenProps[1])
        }
        catch(err){
            reject({status: 400, error: true, message:  err.toString()})
        }
    })

    
    
}

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {

        if (token === undefined || token === null) {
            reject({status: 401, error: true, message:  "Incorrect payload.  Access denied"})
        }

        admin.auth().verifyIdToken(token)
        .then(decodedToken => {
            let uid = decodedToken.sub;
            resolve(uid)
        })
        .catch(err => {
            console.log(err)
            reject({status: 500, error:true, message: err.toString()})
        })
    })
}

const middlewareSecurityFunction = (req, res, next) => {
        if(process.env.NODE_ENV !== 'production') {
            console.log("Middlware functionality occcured in NON-PRODUCTION")
            extractBearerToken(req, res)
            .then(token => {
                return verifyToken(token)
            })
            .then(result => {
                console.log(result)
                return next()
            })
            .catch(errObject => {
                console.log(errObject)
                return res.status(500).json({error: errObject.error, message: "My message"})
            })
            
        }
        else {
            console.log("Middlware functionality occcured in PRODUCTION")
            return next()
        }  
}


module.exports = {
    //verifyUserByToken: verifyUserByToken,
    middlewareSecurityFunction: middlewareSecurityFunction
};