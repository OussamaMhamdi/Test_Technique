'use strict';
import mongoose from "mongoose";
var Schema = mongoose.Schema;
var CommentaireSchema= new Schema({
  
    description: {
        type : String,
        require: true   
    }

})
export const Commentaire = mongoose.model('Commentaire', CommentaireSchema);