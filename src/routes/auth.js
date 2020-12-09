const { register, login } = require('../controllers/profile/auth')
const express = require('express')

const api = express()

api.post('/register', register);
api.post('/login', login);

module.exports = api