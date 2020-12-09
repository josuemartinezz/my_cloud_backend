const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        required: false,
        default: null
    },
    password: {
        type: String,
        required: true
    },
    metadata: {
        type: Object,
        default: { storage: 0, premium: false, private: true, }
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('User', UserSchema);