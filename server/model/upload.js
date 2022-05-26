const mongoose = require('mongoose');

var uploadschema = new mongoose.Schema({
    id : {
        type: String,
        required: true,
    },
    profilepic: {
        type: String,
        required: true
    },
})

const Upload = mongoose.model('image', uploadschema);

module.exports = Upload;