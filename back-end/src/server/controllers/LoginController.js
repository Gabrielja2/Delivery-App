const LoginService = require('../services/LoginService');

const login = async (req, res) => {
  try {
    const token = await LoginService.login(req.body);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid password' });
  }
};

module.exports = {
  login,
};