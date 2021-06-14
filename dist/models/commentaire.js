'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commentaire = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var CommentaireSchema = new Schema({
    description: {
        type: String,
        require: true
    }
});
exports.Commentaire = mongoose_1.default.model('Commentaire', CommentaireSchema);
