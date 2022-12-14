

const { Sequelize } = require('sequelize');
const { Sale, SaleProduct, User } = require('../../database/models');
const errorGenerate = require('../utils/errorGenerate');
const { production } = require('../../database/config/config');

const sequelize = new Sequelize(production);

const create = async ({ orderData, productData }) => {
  const t = await sequelize.transaction();
  try {
    const { id } = await Sale.create(orderData, 
       { transaction: t });
      await Promise.all(
        productData.map(
          (product) =>
              SaleProduct.create({
              saleId: id,
              productId: product.id,
              quantity: product.quantity,
            }, { transaction: t }),
        ),
      );
       t.commit();
       return id;
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

const getAllSellers = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' }, attributes: ['id', 'name'] });

  return sellers;
};

module.exports = {
  getAll,
  create,
  getAllSellers,
};

