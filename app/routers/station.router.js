const express = require('express');
const { createStation } = require('../controllers/station.controller');
const { authenticate } = require('../middlewares/authenticate/authenticate');
const { authorize } = require('../middlewares/authorize/authorize');
const stationRouter = express.Router();



stationRouter.post('/stations', authenticate, authorize, createStation);
module.exports = { stationRouter }