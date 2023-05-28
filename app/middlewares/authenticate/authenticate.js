const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.header("token");
        const decode = jwt.verify(token, "knguyen");
        if(decode) {
            req.user = decode;
            return next();
        } else {
            res.send("Ban chua dang nhap")
        }
    } catch (error) {
        res.send(error);
    }
}

module.exports = {authenticate}