'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var UserSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    createdTaches: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Tache'
        }
    ],
    partages: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Partage'
        }
    ],
    comments: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Partage'
        }
    ]
});
exports.User = mongoose_1.default.model('User', UserSchema);
