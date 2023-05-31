const express = require('express');
const { createTrip, readAllTrip } = require('../controllers/trip.controller');

const tripRouter = express.Router();

tripRouter.post('/trips', createTrip);
tripRouter.get('/trips', readAllTrip);

module.exports = {tripRouter}