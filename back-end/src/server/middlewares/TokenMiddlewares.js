const { authenticateToken } = require('../utils/JWT');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    await authenticateToken(authorization);
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = validateToken;