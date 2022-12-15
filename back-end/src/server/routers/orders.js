const express = require('express');
const { getById } = require('../controllers/OrderController');
const validateToken = require('../middlewares/TokenMiddlewares');

const OrdersRouter = express.Router();

OrdersRouter.get('/:id', validateToken, getById);

module.exports = OrdersRouter;