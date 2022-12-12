const { Sale } = require('../../database/models');

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
module.exports = {
  getAll,
  create,
};