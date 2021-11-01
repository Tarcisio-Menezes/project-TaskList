const express = require('express');
const usersRoute = require('../routes/usersRoutes');
const middlewareUsersError = require('../middlewares/usersError');

const app = express();
app.use(express.json());

app.use(usersRoute);
app.use(middlewareUsersError);

module.exports = app;
