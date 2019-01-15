/*
--------------------------------------------------------------------------------
Mainframe Default Configuration File
Authored by: Czerka Corporation
Website: https://czerka.io
--------------------------------------------------------------------------------
This is the default configuration for Mainframe. If there no other config files have been created or if a value is not specified in the other config file, the below will be used.

This file is updated regularly and is set to be tracked by git, so we recommend creating a config file based on the environment you are running in, i.e. "production.js"

Mainframe uses node-config for configuration management. If would like more information on how these files are loaded or how they work, please read the following: https://github.com/lorenwest/node-config/wiki/Configuration-Files
--------------------------------------------------------------------------------
*/

module.exports = {
  // Mainframe configuration items
  app: {
    host: 'localhost',
    port: 3000,
  },

  // MySQL database configuration items
  db: {
    host: 'localhost',
    port: 3306,
    dbname: 'swgemu',
    user: 'root',
    password: '',
  },

  // SWGEmu Server configuration items
  swgemu: {
    dbSecret: '',
  },
};
