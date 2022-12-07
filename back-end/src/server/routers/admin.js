const express = require('express');
const { create } = require('../controllers/AdminController');
const validateToken = require('../middlewares/TokenMiddlewares');
const { validateRegisterBody } = require('../middlewares/userMiddlewares');

const adminRouter = express.Router();

adminRouter.post('/register', validateToken, validateRegisterBody, create);


module.exports = adminRouter;