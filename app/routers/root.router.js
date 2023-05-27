const express = require('express');
const rootRouter = express.Router();
const {stationRouter} = require('./station.router.js');
const {userRouter} = require('./user.router.js');

rootRouter.use(stationRouter);
rootRouter.use(userRouter);

module.exports = {rootRouter}