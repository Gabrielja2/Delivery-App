const { User } = require('../../database/models');
const { generateToken } = require('../utils/JWT');
const { comparePass } = require('../validations/md5Login');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  const compare = comparePass(password, user.password);

  if (!compare) throw new Error('The password does not match');
  
  const { id, role } = user;
  const token = generateToken({ id, role });

  return token;  
};

const findUser = async ({ email }) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user) return undefined;

  return user.email;
};

module.exports = {
  login,
  findUser,
};