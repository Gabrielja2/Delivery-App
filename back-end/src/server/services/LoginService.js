const md5 = require('md5');
const { User } = require('../../database/models');
const { generateToken } = require('../utils/JWT');
const errorGenerate = require('../utils/errorGenerate');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  const md5Password = md5(password);

  if (!user) throw errorGenerate(404, 'User not found');
  if (md5Password !== user.password) throw errorGenerate(401, 'Incorrect password');

  const { id, role } = user;
  const token = generateToken({ id, role });

  return token;  
};

module.exports = {
  login,
};