/**
 * 
 * Auth controller
 * 
 */

const AuthModel = require('../../models/auth');
const bcrypt = require('bcrypt');
const { json } = require('body-parser');
const jwt = require('jsonwebtoken')

const register = async(req, res) => {
    const isEmailExist = await AuthModel.findOne({ email: req.body.email })
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)
    if (isEmailExist) return res.status(200).json({ error: true, message: "The email already exists" })
    const auth = new AuthModel({ name: req.body.name, email: req.body.email, password })
    try {
        const savedUser = await auth.save();
        res.status(200).json({ error: false, message: "The user was created successfully", user: savedUser, })
    } catch (error) {
        res.status(200).json(error)
    }
}

const login = async(req, res) => {
    const user = await AuthModel.findOne({ email: req.body.email })
    const validatePassword = await bcrypt.compare(req.body.password, user ? user.password : '')
    if (!user || !validatePassword) { return res.status(200).json({ error: true, message: "Invalid data" }) }

    const token = jwt.sign({
        username: user.username,
        email: user.email,
        name: user.name,
        id: user._id
    }, process.env.TOKEN_SECRET)

    res.json({
        error: false,
        token: token
    })
}


const test = async(req, res) => {
    res.status(200).json({
        error: false,
        message: "Este endpoint es de Test"
    })
}

module.exports = { register, login, test }