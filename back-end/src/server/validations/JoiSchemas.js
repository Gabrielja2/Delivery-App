const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const registrationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
  .messages({
    'any.required': 'Password should have at least 6 characters',
  }),
});

module.exports = { loginSchema, registrationSchema };