/*
--------------------------------------------------------------------------------
Czerka Mainframe -- app.js
Authored by: Czerka Corporation
Website: https://czerka.io/mainframe
--------------------------------------------------------------------------------
App.js is the structure of our application, showing the flow of all middleware from top to bottom.
--------------------------------------------------------------------------------
*/

// Load dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Load routes from router
const routes = require('./routes');

// Instantiate express application
const app = express();

// Load middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Change default headers
app.use(function(req, res, next) {
  res.setHeader(
    'X-Powered-By',
    'Czerka Mainframe - https://czerka.io/mainframe'
  );
  next();
});

// Make routes available
app.use('/', routes);

// Export app so that we can use it in start.js
module.exports = app;
