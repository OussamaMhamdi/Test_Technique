"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleTache = exports.user = exports.taches = exports.transformComment = exports.transformPartge = exports.transformEvent = void 0;
var tache_1 = require("../../models/tache");
var user_1 = require("../../models/user");
var transformEvent = function (tache) {
    return __assign(__assign({}, tache._doc), { user: exports.user.bind(_this, tache.user) });
};
exports.transformEvent = transformEvent;
var transformPartge = function (partage) {
    return __assign(__assign({}, partage._doc), { user: exports.user.bind(_this, partage._doc.user), tache: exports.singleTache.bind(_this, partage._doc.tache), createdAt: new Date(partage._doc.createdAt).toISOString(), updateAt: new Date(partage._doc.createdAt).toISOString() });
};
exports.transformPartge = transformPartge;
var transformComment = function (comment) {
    return __assign(__assign({}, comment._doc), { user: exports.user.bind(_this, comment._doc.user), tache: exports.singleTache.bind(_this, comment._doc.tache), createdAt: new Date(comment._doc.createdAt).toISOString(), updateAt: new Date(comment._doc.createdAt).toISOString() });
};
exports.transformComment = transformComment;
var taches = function (tacheIds) { return __awaiter(void 0, void 0, void 0, function () {
    var taches_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, tache_1.Tache.find({ _id: { $in: tacheIds } })];
            case 1:
                taches_1 = _a.sent();
                taches_1.map(function (tache) {
                    return exports.transformEvent(tache);
                });
                return [2 /*return*/, taches_1];
            case 2:
                err_1 = _a.sent();
                throw err_1;
            case 3:
                ;
                return [2 /*return*/];
        }
    });
}); };
exports.taches = taches;
var user = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var createdUser, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user_1.User.findById(userId)];
            case 1:
                createdUser = _a.sent();
                return [2 /*return*/, __assign(__assign({}, createdUser._doc), { createdTaches: exports.taches.bind(this, createdUser._doc.createdTaches) })];
            case 2:
                err_2 = _a.sent();
                throw err_2;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.user = user;
var singleTache = function (tacheId) { return __awaiter(void 0, void 0, void 0, function () {
    var tache, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, tache_1.Tache.findById(tacheId)];
            case 1:
                tache = _a.sent();
                return [2 /*return*/, exports.transformEvent(tache)];
            case 2:
                err_3 = _a.sent();
                throw err_3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.singleTache = singleTache;
