const Joi = require('joi')

module.exports = {
    registerSchema: Joi.object({
        username: Joi.string().min(3).required(),
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(3).required()
    }),
    loginSchema: Joi.object({
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(3).required()
    })
}