/*
--------------------------------------------------------------------------------
Czerka Mainframe -- start.js
Authored by: Czerka Corporation
Website: https://czerka.io/mainframe
--------------------------------------------------------------------------------
start.js is the file used to start the application -- it imports the app.s file that contains the middleware and makes it available via http.
--------------------------------------------------------------------------------
*/

// Load dependencies
const config = require('config');
const h = require('./lib/helpers');

// Import our application
const app = require('./app');

// Start application
app.listen(config.app.port, () => {
  console.log(`---[[Czerka Mainframe API Loaded]]---`);
  console.log(`--- App Mode: ${h.env}`);
  console.log(`--- Address: http://${config.app.host}:${config.app.port}/`);
});
