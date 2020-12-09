const express = require('express');
const auth = require('./auth');
const storage = require('./storage');

const api = express();

api.use('/auth', auth);
api.use('/storage', storage);

module.exports = api;