const express = require('express');
const cors = require('cors');
const usersRoute = require('../routes/usersRoutes');
const loginRoute = require('../routes/loginRoutes');
const tasksRoute = require('../routes/taskRoutes');
const middlewareUsersError = require('../middlewares/usersError');
const middlewareLoginError = require('../middlewares/loginError');
const middlewareTaskError = require('../middlewares/tasksError');

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['authorization'],
  }),
);

app.use(usersRoute);
app.use(middlewareUsersError);

app.use(loginRoute);
app.use(middlewareLoginError);

app.use(tasksRoute);
app.use(middlewareTaskError);

module.exports = app;
