const express = require('express');
const { createStation, readAllStation } = require('../controllers/station.controller');
const { authenticate } = require('../middlewares/authenticate/authenticate');
const { authorize } = require('../middlewares/authorize/authorize');
const stationRouter = express.Router();



stationRouter.get('/stations', readAllStation);
stationRouter.post('/stations', createStation);

module.exports = { stationRouter }