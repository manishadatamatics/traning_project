const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    dob : {
        type: Date,
        required: true,
    },
    firstname : {
        type : String,
        required: true
    },
    lastname : {
        type : String,
        required: true
    }
})

const User = mongoose.model('user', schema);

module.exports = User;