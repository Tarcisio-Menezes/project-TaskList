const express = require('express');
const usersRoute = require('../routes/usersRoutes');
const loginRoute = require('../routes/loginRoutes');
const tasksRoute = require('../routes/taskRoutes');
const middlewareUsersError = require('../middlewares/usersError');
const middlewareLoginError = require('../middlewares/loginError');

const app = express();
app.use(express.json());

app.use(usersRoute);
app.use(middlewareUsersError);

app.use(loginRoute);
app.use(middlewareLoginError);

app.use(tasksRoute);

module.exports = app;
