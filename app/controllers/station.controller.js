const {create_station} = require('../services/station.service.js');

const createStation = async (res, req) => {
    try {
        const {name, address, province} = res.body;
        
        const newStation = await create_station({name, address, province});
        if(newStation) {
            req.send(newStation);
        } else {
            req.send("Failed to create station");
        }
    } catch (error) {
        req.send(error);
    }
}

module.exports = {createStation}