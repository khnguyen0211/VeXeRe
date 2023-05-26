const express = require('express');
const stationRouter = express.Router();
const { Station } = require('../.././models');

stationRouter.post('/stations', async (res, req) => {
    try {
        const { name, address, province } = res.body;
        const newStation = await Station.create({ name, address, province });
        req.status(200).send(newStation);
    } catch (error) {
        req.status(500).send(error);
    }

});
module.exports = { stationRouter }