const { User } = require('../../database/models');
const errorGenerate = require('../utils/errorGenerate');

const findUserById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!user) throw errorGenerate(404, 'User not found');

  return user;
};

const create = async ({ name, email, password, role }) => {
  const checkUser = await User.findOne({ where: { email } });

  if (checkUser) throw errorGenerate(401, 'User already exists');

  const newUser = User.create({ name, email, password, role });

  return newUser;
};

module.exports = {
  findUserById,
  create,
};