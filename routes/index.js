/*
--------------------------------------------------------------------------------
Czerka Mainframe -- routes/index.js
Authored by: Czerka Corporation
Website: https://czerka.io/mainframe
--------------------------------------------------------------------------------
This file routes all the incoming API requests to the appropriate controller(s).
--------------------------------------------------------------------------------
*/

// Import dependencies
const config = require('config');
const express = require('express');

const router = express.Router();
const h = require('../lib/helpers');

// Controllers
const apiv1Controller = require('../controllers/apiv1Controller');

// Default Route -- helpful message directing users to the API route
router.get('/', (req, res) => {
  res.status(200).send({
    title: 'Czerka Mainframe',
    body: {
      message:
        'Czerka Mainframe is the gateway to your SWGEmu Core3 MySQL server. It allows easy access to your database, so you can spend time building more client side applications and less time fiddling with back-end logic.',
      instructions: `In order to use Mainframe, you should be calling the API endpoint, which is at http://${
        config.app.host
      }:${config.app.port}/api/v1`,
      random_quote: h.randomQuote(),
    },
  });
});

router.get('/api/v1', apiv1Controller.home);

module.exports = router;
