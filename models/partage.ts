'use strict';
import mongoose from "mongoose";
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
export const Partage = mongoose.model('Partage', PartageSchema);