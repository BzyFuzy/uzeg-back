const jwt = require('jsonwebtoken');
const JProfile = require('../models/journalist');
const User = require('../models/user');

const auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', ''); 
        const data = jwt.verify(token, 'uzeg');
        const user = await User.findOne({ _id: data._id, 'tokens.token': token }).select({"__v": 0, "password": 0 });
        const profile = await JProfile.findOne({ user: user._id }).select({"__v": 0, "password": 0 });
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.profile = profile
        req.token = token
        next()
    } catch (error) {
        res.json({ status: 3, error: 'Not authorized to access this resource' })
    }
}
module.exports = auth;