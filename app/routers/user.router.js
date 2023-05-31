const express = require('express');
const { register, login, setAvatar, getTicketInfo } = require('../controllers/user.controller');
const { authenticate } = require('../middlewares/authenticate/authenticate');
const { uploadAvatar } = require('../middlewares/fileUpload/upload.js');
const userRouter = express.Router();

userRouter.post('/users/register', register);
userRouter.post('/users/login', login);

userRouter.post('/users/uploadImage', authenticate, uploadAvatar("avatars"), setAvatar);

userRouter.get('/users/myTicket', getTicketInfo);
module.exports = {userRouter}