const { authenticateToken } = require('../utils/JWT');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const validate = await authenticateToken(authorization);
    
    next();
    // if (!validate) return res.status(401).json({ message: 'Expired or invalid token' });
  } catch (error) {
    return res.status(401).json({ message: error });
  }

  next();
};

module.exports = validateToken;