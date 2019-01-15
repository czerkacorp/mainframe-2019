// Load external node ackages
const config = require('config');
const express = require('express');

//Load routes from router
const routes = require('./routes');

// Load middleware
const app = express();

// Make loaded routes available
app.use('/', routes);

// Export app so that we can use it in start.js
module.exports = app;
