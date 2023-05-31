const express = require('express');
const rootRouter = express.Router();
const {stationRouter} = require('./station.router.js');
const {userRouter} = require('./user.router.js');
const { tripRouter } = require('./trip.router.js');
const { ticketRouter } = require('./ticket.router.js');

rootRouter.use(stationRouter);
rootRouter.use(userRouter);
rootRouter.use(tripRouter);
rootRouter.use(ticketRouter)

module.exports = {rootRouter}