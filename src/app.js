const express = require('express');
const { userController } = require('./controllers');
const { validateUser, validateJWT } = require('./middlewares');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', userController.loginUser);
app.post('/user', validateUser, userController.createUser);
app.get('/user', validateJWT, userController.getUsers);
app.get('/user/:id', validateJWT, userController.getById);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
