const express = require('express');
const loginController = require('../controllers/LoginController');
const { loginInputValidation, findUserLogin } = require('../middlewares/loginMiddlewares');

const loginRouter = express.Router();

loginRouter.post('/', loginInputValidation, findUserLogin, loginController.login);

module.exports = loginRouter;