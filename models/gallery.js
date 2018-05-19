// Load required packages
let mongoose = require('mongoose');

// Define our fact schema
let GallerySchema = new mongoose.Schema({
    category: {
        type: String,
        require: true
    },
    picture_urls:{
        type: Array,
        require: true
    }
}, {versionKey: false});


// Export the Mongoose model
let Gallary = module.exports = mongoose.model('Gallery', GallerySchema);