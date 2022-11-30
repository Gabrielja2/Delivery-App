const express = require('express');
const router = require('../server/routers');
const errorMiddleware = require('../server/middlewares/error');

const app = express();

app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', router.loginRouter);

app.use(errorMiddleware);
module.exports = app;
