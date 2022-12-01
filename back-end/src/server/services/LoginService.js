const { User } = require('../../database/models');
const errorGenerate = require('../utils/errorGenerate');
const { generateToken } = require('../utils/JWT');
const { comparePass } = require('../validations/md5Login');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw errorGenerate(404, 'User not found');

  const compare = comparePass(password, user.password);
  if (!compare) throw new Error('The password does not match');
  
  const { id, role } = user;
  const token = generateToken({ id, role });

  return token; 
};

module.exports = {
  login,
};