const express = require('express');
const { create } = require('../controllers/AdminController');
const { validateAdmRegisterBody } = require('../middlewares/userMiddlewares');

const adminRouter = express.Router();

adminRouter.post('/register', validateAdmRegisterBody, create);

module.exports = adminRouter;
