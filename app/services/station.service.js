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
const read_all_station = () => { }
const read_detail_station = (id) => { }
const update_station = (id) => { }
const delete_station = (id) => { }

module.exports = { create_station, read_all_station, read_detail_station, update_station, delete_station }