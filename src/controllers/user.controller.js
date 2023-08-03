const { userService } = require('../services');
const { createToken } = require('../utils/auth');

const isValidFields = (email, password) => email && password;

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!isValidFields(email, password)) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }
        
        const getUser = await userService.loginByEmail(email);
       console.log(getUser);

        if (!getUser) {
            return res.status(400).json({ message: 'Invalid fields' });
        }

        const payload = getUser.email;
        const token = createToken(payload);

        return res.status(200).json({ token });        
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const createUser = async (req, res) => {
    const data = req.body;

    const newUser = await userService.createNewUser(data);

    if (newUser === 409) {
        return res.status(409).json({ message: 'User already registred' });
    }
};

module.exports = {
    loginUser,
    createUser,
};