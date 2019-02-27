/*
--------------------------------------------------------------------------------
Czerka Mainframe -- controllers/apiv1Controller.js
Authored by: Czerka Corporation
Website: https://czerka.io/mainframe
--------------------------------------------------------------------------------
apiv1Controller is the core of Mainframe. This file houses all the logic behind the routes of the application. Things that happen here: user registration, returning data from the database, ect.
--------------------------------------------------------------------------------
*/

// Import dependencies
const h = require('../lib/helpers');

exports.home = (req, res) => {
  res.status(200).send({
    title: 'API Endpoint, woohoo',
    body: {
      message: 'I have a bad feeling about this......',
      random_quote: h.randomQuote(),
    },
  });
};
