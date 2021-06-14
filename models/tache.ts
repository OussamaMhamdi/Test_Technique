'use strict';
import mongoose from "mongoose";
var Schema = mongoose.Schema;
var TacheSchema = new Schema({
    name: {
        type: String,
        require: true
    },

    description: {
        type: String
    },

    commentaire: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'commentaire'
        }
    ],
    isCompleted: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
})
export const Tache = mongoose.model('Tache', TacheSchema);