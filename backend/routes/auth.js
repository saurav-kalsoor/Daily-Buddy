var express = require('express');
const createError = require('http-errors')
const User = require('../models/User')
const { authSchema } = require('../helpers/validation_schema')
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../helpers/jwt_helper')
const client = require('../helpers/init_redis')

// Using Router of express
var router = express.Router();

router.post('/register', async (req, res, next) => {
    try {
        const result = await authSchema.validateAsync(req.body)
        const doesExit = await User.findOne({ email: result.email })
        if (doesExit)
            throw createError.Conflict(`${result.email} already exits`)

        const newUser = new User(result)
        const savedUser = await newUser.save()
        const accessToken = await signAccessToken(savedUser.id)
        const refreshToken = await signRefreshToken(savedUser.id)
        res.send({ accessToken, refreshToken })

    } catch (error) {
        if (error.isJoi)
            error.status = 422; // by default it will give 500 error status which is not correct
        next(error)
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const result = await authSchema.validateAsync(req.body)
        const user = await User.findOne({ email: result.email })
        if (!user) throw createError.NotFound('User not registered')

        const isMatch = await user.isPasswordValid(result.password)
        if (!isMatch) throw createError.Unauthorized('Email/password not valid')

        const accessToken = await signAccessToken(user.id)
        const refreshToken = await signRefreshToken(user.id)
        res.send({ accessToken, refreshToken })

    } catch (error) {
        if (error.isJoi)
            return next(createError.BadRequest("Invalid Username or Password"))
        next(error)
    }
})

router.post('/refreshToken', async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) throw createError.BadRequest()

        const userId = await verifyRefreshToken(refreshToken)
        const accessToken = await signAccessToken(userId)
        const refToken = await signRefreshToken(userId)
        res.send({ accessToken, refreshToken: refToken })

    } catch (error) {
        next(error)
    }
})

router.delete('/logout', async (req, res, next) => {
    try {
        const { refreshToken } = req.body
        if (!refreshToken) throw createError.BadRequest()

        const userId = await verifyRefreshToken(refreshToken)
        client.DEL(userId, (err, val) => {
            if (err) {
                console.log(err.message)
                throw createError.InternalServerError()
            }
            console.log(val)
        })
        res.sendStatus(204)

    } catch (error) {
        next(error)
    }
})

module.exports = router;