const { create_user, read_detail_user, get_ticket_info } = require('../services/user.service.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
                const token = jwt.sign({username: user.username, type: user.type}, "knguyen", {expiresIn: 10 * 60});
                res.send(token);
            } else {
                res.send("sai mat khau");
            }
        }
    } catch (error) {
        res.send(error);
    }

}

const setAvatar = async (req, res) => {
    const user = await  read_detail_user(req.user.username);
    const {file} = req;

    user.avatar = "http://localhost:3456/" + file.path;
    await user.save()
    res.send(user.avatar);
}

const getTicketInfo = async (req, res) => {
    const ticketInfo = await get_ticket_info();
    res.send(ticketInfo);
}
module.exports = { register, login, setAvatar, getTicketInfo }