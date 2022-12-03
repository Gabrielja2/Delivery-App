require('dotenv').config();
const jwt = require('jsonwebtoken');
require('dotenv');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'secret';

const generateToken = (payload) => {    
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign(payload, TOKEN_SECRET_KEY, jwtConfig);
    return token;
};

const authenticateToken = async (token) => {
    const validateToken = jwt.verify(token, TOKEN_SECRET_KEY);
    
    return validateToken;
};

module.exports = {
  generateToken,
  authenticateToken,
};