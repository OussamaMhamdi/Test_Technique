'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentaireSchema= new Schema({
  
    description: {
        type : String,
        require: true   
    }

})
module.exports = mongoose.model('Commentaire', CommentaireSchema);