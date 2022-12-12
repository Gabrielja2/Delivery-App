const OrderService = require('../services/OrderService');

const create = async (req, res, next) => {
  try {
    const order = await OrderService.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};
const getAll = async (req, res, next) => {
  try {
    const orders = await OrderService.getAll(req);
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

const getAllSellers = async (req, res, next) => {
  try {
    const sellers = await OrderService.getAllSellers();
    res.status(200).json(sellers);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create,
  getAllSellers,
};