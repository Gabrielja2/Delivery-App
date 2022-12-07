const md5 = require('md5');
const { User } = require('../../database/models');
const errorGenerate = require('../utils/errorGenerate');

const create = async ({ name, email, password, role }) => {
  const checkUser = await User.findOne({ where: { email } });
  
  if (checkUser) throw errorGenerate(409, 'User already exists');

  const hashPass = md5(password);
  
  const newUser = await User.create({ name, email, password: hashPass, role: role || 'customer' });
  return newUser;
};

module.exports = {
  create,
};