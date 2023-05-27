const express = require('express');
const { register, login } = require('../controllers/user.controller');
const userRouter = express.Router();
userRouter.post('/users/register', register);
userRouter.post('/users/login', login);
module.exports = {userRouter}