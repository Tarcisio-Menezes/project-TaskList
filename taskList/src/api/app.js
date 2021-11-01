const express = require('express');
const usersRoute = require('../routes/usersRoutes');

const app = express();
app.use(express.json());

app.use(usersRoute);

module.exports = app;
