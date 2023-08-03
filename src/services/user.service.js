const { User } = require('../models');

const loginByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    console.log(user);
    return user;
};

const createNewUser = async (data) => {
    const { displayName, email, password, image } = data;

    const verifyUser = await loginByEmail(email);
    if (verifyUser) return 409;

    return User.create({ displayName, email, password, image: image || 'any' });
};

module.exports = {
    loginByEmail,
    createNewUser,
};
