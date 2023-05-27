const {User} = require('../.././models');

const create_user = async (user) => {
    try {
        const newUser = await User.create(user);
        if(newUser) {
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
        if(user) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        return error;
    }
}

module.exports = {create_user, read_detail_user}