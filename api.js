const Fact = require('./models/fact')
const Gallery = require('./models/gallery')
const axios = require('axios')
const middleware = require('./middleware-security')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

module.exports = (app, router) => {
    
    router.use((req, res, next) => {
        console.log("ENTERED MIDDLEWARE!")
        console.log('Request URL:', req.originalUrl)
        console.log('Request Type:', req.method)
        middleware.middlewareSecurityFunction(req, res, next)
    })
    

    // Home page route.
    router.get('/fact', (req, res) => {
        Fact.find().exec()
        .then(result => {
            return res.status(200).json({result: result})
        })
        .catch(err => {
            return res.status(200).json({message: `I got an error: ${err.toString()}`})
        })
        
    })

    // Create page route.
    router.post('/fact', (req, res) => {

        let fact = req.body;

        Fact.create(fact)
        .then(result => {
            return res.status(201).json({message: "I created a fact", result: fact})
        })
        .catch(err => {
            return res.status(200).json({message: `I got an error: ${err.toString()}`})
        })    
    })

    // Delete page route.
    router.delete('/fact', (req, res) =>{
        return res.status(200).json({message: "I deleted a fact"})
    })

    // TODO:  Create an update endpoint





    // Galleries
    router.get('/gallery', (req, res) => {
        Gallery.find().exec()
        .then(result => {
            return res.status(200).json(result)
        })
        .catch(err => {
            return res.status(200).json({message: `I got an error: ${err.toString()}`})
        })
    })

    // Gallery by Id
    router.get('/gallery/:_id', (req, res) => {
        Gallery.findById(req.params._id).exec()
        .then(result => {
            return res.status(200).json(result)
        })
        .catch(err => {
            return res.status(200).json({message: `I got an error: ${err.toString()}`})
        })
    })



    // Create Galleries
    router.post('/gallery', (req, res) => {

        let gallery = req.body;

        Gallery.create(gallery)
        .then(result => {
            return res.status(201).json({message: "I created a fact", result: gallery})
        })
        .catch(err => {
            return res.status(200).json({message: `I got an error: ${err.toString()}`})
        })    
    })



















    // This endpoint call the luis bot and passes it the function
    router.post('/luis', (req, res) => {

        let encodedQuestion = req.body.question

        if(!encodedQuestion || encodedQuestion.length === 0){
            return res.status(200).json({message: "You have to actually type something to get an answer."})
        }

        let callToLUIS = `${process.env.LUIS_STRING}${encodedQuestion}`;

        axios.get(callToLUIS)
        .then(result => {
            let luisCategory = result.data.topScoringIntent.intent;
            let queryPhrase = luisCategory.toLowerCase()
            return Fact.findOne({category: queryPhrase})
        })
        .then(answer => {
            if(!answer) {
                return res.status(200).json({message: "Mike has not provided an answer (yet).  Please check back later."})
            }
            
            let list = answer.preferred_list
            let length = list.length
            let randomIndex = Math.floor(Math.random()*length)
            return res.status(200).json({message: list[randomIndex]})
        })
        .catch(err => {
            console.error(err.toString())
            res.status(500).json({message: "Something went wrong! Please try again later."})
        })



    })

    return router
}