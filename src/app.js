const express = require('express');
const bodyParser = require('body-parser');
const environmentRouter = require('./controller/environment.controller');

const app = express();

app.use(bodyParser.json());
app.use('/environment', environmentRouter);
app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;
