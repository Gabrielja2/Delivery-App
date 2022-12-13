const { Sequelize } = require('sequelize');
const { Sale, SaleProduct } = require('../../database/models');
const errorGenerate = require('../utils/errorGenerate');

const { production } = require('../../database/config/config');

const sequelize = new Sequelize(production);

const create = async ({ orderData, productData }) => {
  const t = await sequelize.transaction();

  try {
    const newOrder = await Sale.create(orderData,
       { transaction: t });
       
       await SaleProduct.create(productData, { transaction: t });
       
       t.commit();
       
       return newOrder.id;
      } catch (e) {
    console.log(e);
    await t.rollback();
    throw errorGenerate(409, 'Error ao criar o pedido');
  }
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