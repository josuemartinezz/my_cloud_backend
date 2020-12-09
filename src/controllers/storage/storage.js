/**
 * 
 * Storage controller
 * 
 */

const bodyParser = require('body-parser');
const StorageModel = require('../../models/storage');

const upload_file = async(req, res) => {

    const storage = new StorageModel({
        name: req.body.name,
        type: req.body.type,
        data_information: req.body.data_information,
        author: req.body.author,
        currentLocation: req.body.current_location
    })
    try {
        const is_save = await storage.save()
        res.status(200).json({
            error: false,
            is_save
        })
    } catch (error) {
        res.status(200).json({ error })
    }
}

module.exports = { upload_file }