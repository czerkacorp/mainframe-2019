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

// Set the node enviroment, defaults to development if not set
exports.env = process.env.NODE_ENV || 'development';

exports.randomQuote = () => quotes[Math.ceil(Math.random() * quotes.length)];
