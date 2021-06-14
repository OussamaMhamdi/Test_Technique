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
Object.defineProperty(exports, "__esModule", { value: true });
exports.partageResolver = exports.cancelPartege = exports.partager = exports.partages = void 0;
var tache_1 = require("../../models/tache");
var partage_1 = require("../../models/partage");
var user_1 = require("../../models/user");
var merge_1 = require("./merge");
var partages = function () { return __awaiter(void 0, void 0, void 0, function () {
    var partages_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, partage_1.Partage.find()];
            case 1:
                partages_1 = _a.sent();
                return [2 /*return*/, partages_1.map(function (partage) {
                        return merge_1.transformPartge(partage);
                    })];
            case 2:
                err_1 = _a.sent();
                throw err_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.partages = partages;
var partager = function (args, req) { return __awaiter(void 0, void 0, void 0, function () {
    var createdPartage, fetchedTache, partage, result, userById, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, tache_1.Tache.findOne({ _id: args.tacheid })];
            case 1:
                fetchedTache = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 6, , 7]);
                partage = new partage_1.Partage({
                    user: req.userId,
                    tache: fetchedTache
                });
                return [4 /*yield*/, partage.save()];
            case 3:
                result = _a.sent();
                return [4 /*yield*/, user_1.User.findById(req.userId)];
            case 4:
                userById = _a.sent();
                createdPartage = merge_1.transformEvent(result);
                userById.partages.push(partage);
                return [4 /*yield*/, userById.save()];
            case 5:
                _a.sent();
                return [2 /*return*/, merge_1.transformPartge(partage)];
            case 6:
                err_2 = _a.sent();
                throw err_2;
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.partager = partager;
var cancelPartege = function (args, req) { return __awaiter(void 0, void 0, void 0, function () {
    var partage, tache, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.isAuth) {
                    throw new Error('Unauthenticated!');
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, partage_1.Partage.findById(args.partageId).populate('tache')];
            case 2:
                partage = _a.sent();
                tache = merge_1.transformEvent(partage.tache);
                return [4 /*yield*/, partage_1.Partage.deleteOne({ _id: args.partageId })];
            case 3:
                _a.sent();
                return [2 /*return*/, tache];
            case 4:
                err_3 = _a.sent();
                throw err_3;
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.cancelPartege = cancelPartege;
exports.partageResolver = __assign(__assign(__assign({}, exports.partager), exports.partages), exports.cancelPartege);
