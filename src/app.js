const express = require('express');
const { userController, categoryControler } = require('./controllers');
const { validateToken, validateAnotherToken } = require('./middlewares/validateJWT');
const {
  validateDisplayName,
  validatePassword,
  validateEmail } = require('./middlewares/validateUser');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', userController.loginUser);
app.post('/user', validateDisplayName, validateEmail, validatePassword, userController.createUser);
app.get('/user', validateToken, userController.getUsers);
app.get('/user/:id', validateToken, userController.getById);
app.post('/categories', validateAnotherToken, categoryControler.createCategory);
app.get('/categories', validateAnotherToken, categoryControler.getAll);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
