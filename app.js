// Load node packages
const config = require('config');
const express = require('express');

// Load routes from router
const routes = require('./routes');

// Load middleware
const app = express();

// Change default headers
app.use(function(req, res, next) {
  res.setHeader(
    'X-Powered-By',
    'Czerka Mainframe - https://czerka.io/mainframe'
  );
  next();
});

// Make loaded routes available
app.use('/', routes);

// Export app so that we can use it in start.js
module.exports = app;
