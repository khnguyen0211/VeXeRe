const { Station } = require('../.././models');

const create_station = async (station) => {
    try {
        const newStation = await Station.create(station);
        if(newStation) {
            return newStation;
        } else {
            return null;
        }
    } catch (error) {
        return error;
    }

}
const read_all_station = async () => { 
    try {
        const stationList = await Station.findAll();
        if(stationList) {
            return stationList;
        } else{
            return null;
        }
    } catch (error) {
        
    }
}
const read_detail_station = async (id) => {
    try {
        const station = await Station.findOne({
            where: {id}
        });
        if(station) {return station;}
        else {return null;}
    } catch (error) {
        
    }
 }
const update_station = (id) => {
    try {
        
    } catch (error) {
        
    }
}
const delete_station = (id) => { }

module.exports = { create_station, read_all_station, read_detail_station, update_station, delete_station }