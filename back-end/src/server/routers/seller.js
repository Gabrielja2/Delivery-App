const express = require('express');
const { getAll, create } = require('../controllers/OrderController');
const validateToken = require('../middlewares/TokenMiddlewares');

const sellerRouter = express.Router();
sellerRouter.post('/orders', validateToken, create);
sellerRouter.get('/orders', validateToken, getAll);

module.exports = sellerRouter;