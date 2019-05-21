'use strict';

/**
 * Created by Tawan Silva on 16/05/19
 * tawan.sf.99@gmail.com
 */

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const conn = require('../config.json');

const app = express();

mongoose.connect(conn.db, {
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use(require('./routes'));

app.listen(3000);