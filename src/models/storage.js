const mongoose = require('mongoose')

const storage = mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    creation: {
        type: Date,
        default: Date.now
    },
    is_share: {
        type: Boolean,
        default: false,
        required: true,
    },
    folder: {
        type: String,
        required: true,
        default: 'mycloud'
    },
    data_information: {
        type: Object
    },
    author: {
        type: String
    },
    currentLocation: {
        type: Array
    }
})

module.exports = mongoose.model('Storage', storage)