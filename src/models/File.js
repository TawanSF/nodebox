'use strict';

/**
 * Created by Tawan Silva on 16/05/19
 * tawan.sf.99@gmail.com
 */

const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

File.virtual('url').get(function() {
    return `http://localhost:3000/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);