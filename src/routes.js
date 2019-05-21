'use strict';

/**
 * Created by Tawan Silva on 16/05/19
 * tawan.sf.99@gmail.com
 */

const express = require('express');
const multer = require('multer');
const multerConf = require('../src/config/multer');
const routes = express.Router();
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

// Routes //

routes.post('/boxes', BoxController.store);
routes.post('/boxes/:id/files', multer(multerConf).single('file'), FileController.store);

module.exports = routes;