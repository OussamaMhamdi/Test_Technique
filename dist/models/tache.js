'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tache = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
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
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'commentaire'
        }
    ],
    isCompleted: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
});
exports.Tache = mongoose_1.default.model('Tache', TacheSchema);
