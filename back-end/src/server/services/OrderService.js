const { User, Sale } = require('../../database/models');

const create = async ({ orderData, _productData }) => {
  const orders = await Sale.create(orderData);
  return orders;
};
const getAll = async (req) => {
  const { id/* , role */ } = req;
  // const userRole = role === 'seller' ? 'sellerId' : 'userId';
  // const user  = { [userRole]: id }
  const orders = await Sale.findAll({ where: { id } });
  return orders;
};

const getAllSellers = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' }, attributes: ['id', 'name'] });

  return sellers;
};

module.exports = {
  getAll,
  create,
  getAllSellers,
};