const authorize = (req, res, next) => {
    try {
        const user = req.user;
        if(user.type === "ADMIN") {
            return next();
        } else {
            res.send("Ban k co quyen");
        }
    } catch (error) {
        res.send(error);
    }
}

module.exports = {authorize}