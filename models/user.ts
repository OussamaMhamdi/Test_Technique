'use strict';
import mongoose from "mongoose";
var Schema = mongoose.Schema;
var UserSchema= new Schema({
  
    email :{
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    createdTaches : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tache'
        }
    ],
    partages : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Partage'
        }
    ],
    comments : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Partage'
        }
    ]

})
export const User = mongoose.model('User', UserSchema);