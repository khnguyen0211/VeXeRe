const { create_trip, read_all_trip } = require("../services/trip.service");


const createTrip = async (req, res) => {
    try {
        const trip = req.body;
        const newTrip = await create_trip(trip);
        if(newTrip) {
            res.status(200).send(newTrip);
        } else {
            res.status(404).send("Falled");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const readAllTrip = async (req, res) => {
    try {
        const tripList = await read_all_trip() ;
        if(tripList) {
            res.send(tripList);
        } else {
            res.send(null);
        }
    } catch (error) {
        res.send(error);
    }
}
module.exports = {createTrip, readAllTrip}