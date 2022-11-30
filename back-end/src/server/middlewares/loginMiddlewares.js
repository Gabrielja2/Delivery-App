const { findUser } = require('../services/LoginService');
const { loginSchema, registrationSchema } = require('../validations/JoiSchemas');

const findUserLogin = (req, res, next) => {
  const user = findUser(req.body);

  if (!user) return res.status(404).json({ message: 'User not found' });

  next();
};

const findUserRegister = (req, res, next) => {
  const user = findUser(req.body);

  if (user) return res.status(401).json({ message: 'User already exist' });

  next();
};

const loginInputValidation = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) return res.status(401).json({ message: error.details[0].message });

  next();
};

const registerInputValidation = (req, res, next) => {
  const { error } = registrationSchema.validate(req.body);

  if (error) return res.status(401).json({ message: error.details[0].message });

  next();
};

module.exports = { findUserLogin, findUserRegister, loginInputValidation, registerInputValidation };
