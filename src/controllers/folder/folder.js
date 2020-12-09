/**
 * 
 * Storage controller
 * 
 */

const FolderModel = require('../../models/folder');
const StorageModel = require('../../models/storage');

const create_folder = async(req, res) => {
    const storage = new FolderModel({
        name: req.body.name == '' ? 'New Folder' : req.body.name,
        author: req.body.author,
        folder: req.body.folder,
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

const current_folder = async(req, res) => {
    try {
        const get_folders = await FolderModel.find({ folder: req.body.folder })
        const get_files = await StorageModel.find({ folder: req.body.folder })
        res.status(200).json({
            error: false,
            path: req.body.folder,
            folders: get_folders,
            files: get_files
        })
    } catch (e) {
        res.status(200).json({ error: true, exception: e })
    }
}

module.exports = { create_folder, current_folder }