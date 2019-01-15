/*
--------------------------------------------------------------------------------
Czerka Mainframe -- start.js
Authored by: Czerka Corporation
Website: https://czerka.io/mainframe
--------------------------------------------------------------------------------
start.js is the file used to start the application -- it imports the app.s file that contains the middleware and makes it available via http.
--------------------------------------------------------------------------------
*/

// Set the node enviroment, reverts to development if not set
const env = process.env.NODE_ENV || 'development';

// Load dependencies
const config = require('config');

// Import our application
const app = require('./app');

// Start application
app.listen(config.app.port, () => {
  console.log(
    ` [Czerka Mainframe API Loaded]\n`,
    `-- App Mode: ${env}\n`,
    `-- Address: http://${config.app.host}:${config.app.port}/`
  );
});
