const express = require('express');
const { createStation } = require('../controllers/station.controller');
const stationRouter = express.Router();



stationRouter.post('/stations', createStation);
module.exports = { stationRouter }