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

const getAllUsers = async () => {
    const users = await User.findAll({ attibutes: { exclude: ['password'] } });

    return users;
};

const getUsersById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

    return user;
};

module.exports = {
    loginByEmail,
    createNewUser,
    getAllUsers,
    getUsersById,
};
