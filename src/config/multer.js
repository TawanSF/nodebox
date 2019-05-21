'use strict';

/**
 * Created by Tawan Silva on 20/05/19
 * tawan.sf.99@gmail.com
 */

const multer = require('multer');
const path = require('path');
const cry = require('crypto')

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'));
        },
        filename: (req, file, cb) => {
            cry.randomBytes(16, (err, hash) => {
                if (err) cb(err)
                
                file.key = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, file.key);
            })
        }
    })
};