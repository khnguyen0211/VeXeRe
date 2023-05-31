const e = require('express');
const { Trip, Station } = require('../../models');

const create_trip = async (trip) => {
    try {
        const newTrip = await Trip.create(trip);
        if (newTrip) {
            return newTrip;
        } else {
            return null;
        }
    } catch (error) {
        return error;
    }
}

const read_all_trip = async () => {
    try {
        const tripList = await Trip.findAll({
            include: [
                {
                    model: Station,
                    as: 'from',
                },
                {
                    model: Station,
                    as: 'to',
                }
            ]
        }
        );
        if(tripList) {
            return tripList;
        } else {
            return null;
        }
    } catch (error) {
        return error;
    }
}
module.exports = {create_trip, read_all_trip}