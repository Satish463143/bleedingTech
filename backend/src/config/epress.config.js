const express = require('express');
require('dotenv').config();
require('./db.config');
const router = require('./router.config');

const app = express();
app.use(router);


module.exports = app;