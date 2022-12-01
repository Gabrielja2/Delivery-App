const { User } = require('../../database/models');
const errorGenerate = require('../utils/errorGenerate');

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });

  if (!user) return undefined;

  return user.email;
};

const create = async ({ name, email, password, role }) => {
  const checkUser = await findUser(email);

  if (checkUser) throw errorGenerate(401, 'User already exists');

  const newUser = User.create({ name, email, password, role });

  return newUser;
};

module.exports = {
  create,
};