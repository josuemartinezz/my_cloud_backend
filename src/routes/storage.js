const { upload_file } = require('../controllers/storage/storage')
const { create_folder, current_folder } = require('../controllers/folder/folder')
const express = require('express')

const api = express()

api.post('/upload', upload_file);
api.post('/folder/create', create_folder);
api.post('/folder/current', current_folder);

module.exports = api