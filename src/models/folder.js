const mongoose = require('mongoose')

const folder = mongoose.Schema({
    name: {
        type: String,
        default: 'New Folder'
    },
    folder: {
        required: true,
        type: String,
        default: 'mycloud'
    },
    creation: {
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String
    },
    currentLocation: {
        type: Array
    }
})

module.exports = mongoose.model('Folder', folder)