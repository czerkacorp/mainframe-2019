const env = process.env.NODE_ENV || 'development';

//Import all dependencies
const config = require('config');

// Import app.js
const app = require('./app');

// Start server
app.listen(config.app.port, () => {
  console.log(
    ` [Czerka Mainframe API Loaded]\n`,
    `-- App Mode: ${env}\n`,
    `-- Address: http://${config.app.host}:${config.app.port}/`
  );
});
