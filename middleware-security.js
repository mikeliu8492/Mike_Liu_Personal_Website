let finalPrivateKey = ""

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
  finalPrivateKey = process.env.FIREBASE_PRIVATE_KEY
}
else {
  finalPrivateKey = JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
}

const serviceAccount = require('./firebase_admin_cert')

const admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DB_URL
});

const extractBearerToken = (headers) => {
    let tokenProps = null
    return new Promise((resolve, reject) => {
        try{
            console.log(headers)
            if(headers.authorization === undefined || headers.authorization === null){
                console.log("NO TOKEN SENT")
                reject({status: 401, error: true, message:  "You didn't send a token.  Access denied"})
            }
    
            tokenProps = headers.authorization.split(" ");
            
            if(tokenProps.length < 2 || tokenProps[0] !== "Bearer"){
                console.log("TOKEN PAYLOAD ERROR")
                reject({status: 401, error: true, message:  "Invalid token payload format"})
            }

            resolve(tokenProps[1])
        }
        catch(err){
            console.log("Something else in extracting bearer token")
            console.log(err.toString())
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
            reject({status: 500, error:true, message: err.toString()})
        })
    })
}

const middlewareSecurityFunction = (req, res, next) => {
    console.log(req.headers.authorization)
        if(process.env.NODE_ENV === 'production') {
            extractBearerToken(req.headers)
            .then(token => {
                return verifyToken(token)
            })
            .then(uid => {
                if (uid === process.env.FIREBASE_CLIENT_UID) {
                    return next()
                }
                else {
                    return res.json(401).status({error: true, message: "Token does not match client.  Access denied!"})
                }
            })
            .catch(err => {
                return res.status(500).json({error: true, message: err.toString()})
            })
            
        }
        else {
            return next()
        }
        
}


module.exports = {
    middlewareSecurityFunction: middlewareSecurityFunction
};