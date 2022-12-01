const userService = require('../services/UserService');

const create = async (req, res, next) => {
  try {
    await userService.create(req.body);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};