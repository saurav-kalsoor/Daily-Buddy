const createError = require('http-errors')
const User = require('../models/User')
const { registerSchema, loginSchema } = require('../utilities/validation_schema')
const { signAccessToken, signRefreshToken, verifyRefreshToken, } = require('../utilities/jwt_helper')

module.exports = {
    register: async (req, res, next) => {
        try {
            const result = await registerSchema.validateAsync(req.body)
            const doesExit = await User.findOne({ email: result.email })
            if (doesExit)
                throw createError.Conflict(`${result.email} already exits`)
    
            const newUser = new User(result)
            const savedUser = await newUser.save()
            let success = true
            res.send({ success })
    
        } catch (error) {
            if (error.isJoi)
                error.status = 422; // by default it will give 500 error status which is not correct
            next(error)
        }
    },

    login: async (req, res, next) => {
        try {
            const result = await loginSchema.validateAsync(req.body)
    
            const user = await User.findOne({ email: result.email })
            if (!user) throw createError.NotFound('User not registered')
    
            const isMatch = await user.isPasswordValid(result.password)
            if (!isMatch) throw createError.Unauthorized('Email/password not valid')
    
            const accessToken = await signAccessToken(user.id)
            const refreshToken = await signRefreshToken(user.id)
            let success = true
            res.send({ success, accessToken, refreshToken })
    
        } catch (error) {
            if (error.isJoi)
                return next(createError.BadRequest("Invalid Username or Password"))
            next(error)
        }
    },

    refreshToken: async (req, res, next) => {
        try {
            const { refreshToken } = req.body;
            if (!refreshToken) throw createError.BadRequest()
            
            const userId = await verifyRefreshToken(refreshToken)
            const accessToken = await signAccessToken(userId)
            const refToken = await signRefreshToken(userId)
    
            let success = true
            res.send({ success, accessToken, refreshToken: refToken })
        } catch (error) {
            next(error)
        }
    },

    logout: async (req, res, next) => {
        try {
            const { refreshToken } = req.body
            if (!refreshToken) throw createError.BadRequest()
            const userId = await verifyRefreshToken(refreshToken)
    
            const user = await User.findById(userId).select("-password");
            user.refreshToken = "";
            await user.save();
    
            res.sendStatus(204)
        } catch (error) {
            next(error)
        }
    },

    getuser: async (req, res, next) => {
        try {
            const userId = req.payload.aud;
            const user = await User.findById(userId).select("-password -refreshToken");
            res.send(user);
        } catch (error) {
            console.error(error.message);
            next(error)
        }
    }
}