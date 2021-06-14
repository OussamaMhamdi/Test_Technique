'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partage = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var PartageSchema = new Schema({
    user: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'User',
            require: true
        }
    ],
    tache: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Tache',
        require: true
    }
}, { timestamps: true });
exports.Partage = mongoose_1.default.model('Partage', PartageSchema);
