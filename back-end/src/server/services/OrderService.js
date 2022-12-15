const { Sale, SaleProduct, User, Product } = require('../../database/models');
const errorGenerate = require('../utils/errorGenerate');

const create = async ({ orderData, productData }) => {
  const { id } = await Sale.create(orderData);
  if (!id) throw errorGenerate(409, 'Error ao criar o pedido');
  await Promise.all(
    productData.map(
      (product) =>
          SaleProduct.create({
          saleId: id,
          productId: product.productId,
          quantity: product.quantity,
        }),
    ),
  );
  return id;
};

const getAll = async (user) => {  
  const orders = await Sale.findAll({ where: user });
  return orders;
};

const getAllSellers = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' }, attributes: ['id', 'name'] });

  return sellers;
};

const getOrderById = async (id) => {
  const order = await Sale.findAll({ where: { id },
    include: [
    { model: Product, as: 'product', through: { attributes: ['quantity'] } },
    { model: User, as: 'seller', attributes: ['name'] },
  ] });
  return order;
};

module.exports = {
  getAll,
  create,
  getAllSellers,
  getOrderById,
};
