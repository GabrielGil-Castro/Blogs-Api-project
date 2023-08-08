const { userService } = require('../services');
const { createToken } = require('../utils/auth');

const isValidFields = (email, password) => email && password;

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const getUser = await userService.loginByEmail(email);

        if (!isValidFields(email, password)) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }

        if (!getUser) {
            return res.status(400).json({ message: 'Invalid fields' });
        }

        const payload = getUser.dataValues.email;
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
        return res.status(409).json({ message: 'User already registered' });
    }

    const payload = { 
        id: newUser.id, 
        email: newUser.email, 
        password: newUser.password,
    };

    const token = createToken(payload);

    return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
    const users = await userService.getAllUsers();

    return res.status(200).json(users);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUsersById(id);

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
};

module.exports = {
    loginUser,
    createUser,
    getUsers,
    getById,
};