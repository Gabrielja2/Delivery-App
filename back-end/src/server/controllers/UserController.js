const userService = require('../services/UserService');

const create = async (req, res, next) => {
  try {
    await userService.create(req.body);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await userService.findUserById(id);
    
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserById,
  create,
};