const {create_station, read_all_station} = require('../services/station.service.js');

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

const readAllStation = async (req, res) => { 
    try {
        const stationList = await read_all_station();
        if(stationList.length > 0) { 
            res.send(stationList);
        } else {
            res.send("Not found");
        }
    } catch (error) {
        res.send(error);
    }
}
module.exports = {createStation, readAllStation}