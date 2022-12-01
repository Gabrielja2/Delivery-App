const express = require('express');
const { create } = require('../controllers/UserController');
const { validateRegisterBody } = require('../middlewares/userMiddlewares');

const userRouter = express.Router();

userRouter.post('/', validateRegisterBody, create);

module.exports = userRouter;