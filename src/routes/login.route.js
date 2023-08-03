const loginRoute = require('express').Router();
const { userController } = require('../controllers');

loginRoute.post('/', userController.loginUser);

module.exports = loginRoute;