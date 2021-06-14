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
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlResolvers = void 0;
var auth_1 = require("./auth");
var commentaire_1 = require("./commentaire");
var taches_1 = require("./taches");
var partage_1 = require("./partage");
exports.graphqlResolvers = __assign(__assign(__assign(__assign({}, auth_1.auth), taches_1.tachesResolver), partage_1.partageResolver), commentaire_1.commentaire);
