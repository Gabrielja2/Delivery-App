const LoginService = require('../services/LoginService');

const login = async (req, res, next) => {
  try {
    const data = await LoginService.login(req.body);
    const {token, name } = data
    return res.status(200).json({ token, name });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};