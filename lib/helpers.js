/*
--------------------------------------------------------------------------------
Czerka Mainframe -- lib/helpers.js
Authored by: Czerka Corporation
Website: https://czerka.io/mainframe
--------------------------------------------------------------------------------
This file contains data and helper functions that can be used elsewhere.
--------------------------------------------------------------------------------
*/

const fs = require('fs');
const quotes = require('./quotes');

exports.randomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
