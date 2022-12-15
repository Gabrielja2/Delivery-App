const loginRouter = require('./login');
const userRouter = require('./user');
const productRouter = require('./product');
const adminRouter = require('./admin');
const sellerRouter = require('./seller');
const ordersRouter = require('./orders');

module.exports = {
  loginRouter,
  userRouter,
  productRouter,
  adminRouter,
  sellerRouter,
  ordersRouter,
};