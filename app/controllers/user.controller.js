const { create_user, read_detail_user } = require('../services/user.service.js');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    try {
        const { name, username, password, type } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, salt);
        const register_user = await create_user({ name, username, password: encryptedPassword, type });
        if (register_user) {
            res.send(register_user);
        } else {
            res.send("register failed");
        }
    } catch (error) {
        res.send(error);
    }

}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await read_detail_user(username);

        if (user) {
            const isAuth = bcrypt.compareSync(password, user.password)
            if (isAuth) {
                res.send("dang nhap thanh cong");
            } else {
                res.send("sai mat khau");
            }
        }
    } catch (error) {
        res.send(error);
    }

}

module.exports = { register, login }