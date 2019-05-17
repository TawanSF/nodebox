'use strict';

/**
 * Created by Tawan Silva on 16/05/19
 * tawan.sf.99@gmail.com
 */

const express = require('express');
const routes = express.Router();

const BoxController = require('./controllers/BoxController');

routes.post('/boxes', BoxController.store);

module.exports = routes;