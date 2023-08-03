const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusegredojwt';

const JWT_CONFIG = {
    ALGORITHM: 'HS256',
};

const verifyToken = (token) => jwt.verify(token, secret);

const createToken = (payload) => jwt.sign(payload, secret, JWT_CONFIG);

module.exports = { 
    verifyToken, 
    createToken,
 };