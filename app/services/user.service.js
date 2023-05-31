const { User, sequelize } = require('../.././models');

const create_user = async (user) => {
    try {
        const newUser = await User.create(user);
        if (newUser) {
            return newUser;
        } else {
            return false;
        }
    } catch (error) {
        return error;
    }
}

const read_detail_user = async (username) => {
    try {
        const user = await User.findOne({
            where: {
                username
            }
        });
        if (user) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        return error;
    }
}

const get_ticket_info = async () => {
    try {
        const [result] = await sequelize.query(`select users.name as 'Passenger', fromSta.name as 'From Station', 
    toSta.name as 'To Station', trips.startTime as 'Time', trips.price as 'Price' from users 
    inner join tickets on users.id = tickets.user_id
    inner join trips on tickets.trip_id = trips.id
    inner join stations as fromSta on fromSta.id = trips.fromStation
    inner join stations as toSta on toSta.id = trips.toStation`);
        if (result) {
            return result;
        } else {
            return null;
        }
    } catch (error) {
        return error;
    }

}

module.exports = { create_user, read_detail_user, get_ticket_info }