const { User } = require('../models');

const loginByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });

    return user;
};

const createNewUser = async (data) => {
    const { displayName, email, password, image } = data;

    const user = await User.findOne({
        attributes: ['id', 'displayName', 'email', 'image'],
        where: { email },
    });

    if (user) return 409; 

    const newUser = await User.create({ displayName, email, password, image: image || 'any' });

    return newUser;
};

const getAllUsers = async () => {
    const users = await User.findAll({
        attributes: { exclude: 'password' },
    });

    return users;
};

const getUsersById = async (id) => {
    const user = await User.findByPk(id, {
        attributes: { exclude: 'password' },
    });

    return user;
};

module.exports = {
    loginByEmail,
    createNewUser,
    getAllUsers,
    getUsersById,
};
