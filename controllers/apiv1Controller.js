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
