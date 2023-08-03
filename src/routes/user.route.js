const userRoute = require('express').Router();
const { userController } = require('../controllers');

userRoute.post('/', userController.createUser);

module.exports = userRoute;