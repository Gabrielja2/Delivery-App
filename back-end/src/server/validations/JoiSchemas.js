const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const registrationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).regex(/(?=.*[A-Z])(?=.*[0-9])/i).required()
  .messages({
    'any.required': 'Password should have at least 8 characters and one letter in uppercase',
  }),
});

module.exports = { loginSchema, registrationSchema };