const { User } = require('../models');

const loginByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    console.log(user);
    return user;
};

module.exports = {
    loginByEmail,
};
