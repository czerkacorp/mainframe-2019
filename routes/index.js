const config = require('config');
const express = require('express');
const router = express.Router();

// Controllers
const apiv1Controller = require('../controllers/apiv1Controller');

router.get('/', (req, res) => {
  res.send({
    title: 'Czerka Mainframe',
    body: {
      message:
        'Czerka Mainframe is the gateway to your SWGEmu Core3 MySQL server. It allows easy access to your database, so you can spend time building more client side applications and less time fiddling with back-end logic.',
      instructions: `In order to use Mainframe, you should be calling the API endpoint, which is at http://${
        config.app.host
      }:${config.app.port}/api/v1`,
    },
  });
});

router.use('/api/v1', apiv1Controller.home);

module.exports = router;
