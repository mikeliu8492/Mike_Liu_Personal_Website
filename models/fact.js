// Load required packages
let mongoose = require('mongoose');

// Define our fact schema
let FactSchema = new mongoose.Schema({
    category: {
        type: String,
        require: true
    },
    preferred_list:{
        type: Array,
        require: true
    }
}, {versionKey: false});


// Export the Mongoose model
let Fact = module.exports = mongoose.model('Fact', FactSchema);