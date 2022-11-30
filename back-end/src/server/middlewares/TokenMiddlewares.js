const { authenticateToken } = require('../utils/JWT');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  const validate = authenticateToken(authorization);

  if (!validate) return res.status(401).json({ message: 'Invalid token' });

  next();
};

module.exports = validateToken;