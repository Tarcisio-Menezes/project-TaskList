const express = require('express');
const usersRoute = require('../routes/usersRoutes');
const loginRoute = require('../routes/loginRoutes');
const middlewareUsersError = require('../middlewares/usersError');

const app = express();
app.use(express.json());

app.use(usersRoute);
app.use(middlewareUsersError);

app.use(loginRoute);

module.exports = app;
