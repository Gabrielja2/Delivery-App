const { authenticateToken } = require('../utils/JWT');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const validate = await authenticateToken(authorization);

    if (!validate) return res.status(401).json({ message: 'Expired or invalid token' });
  } catch (error) {
    return res.status(401).json({ message: error });
  }

  next();
};

module.exports = validateToken;