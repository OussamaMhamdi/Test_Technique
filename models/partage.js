'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PartageSchema = new Schema({

    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true
        }
    ],
    tache: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tache',
        require: true
    }

},
    { timestamps: true })
module.exports = mongoose.model('Partage', PartageSchema);