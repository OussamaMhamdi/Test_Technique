"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
var jwt = require('jsonwebtoken');
var isAuth = function (req, res, next) {
    var authHeader = req.get('Authorization');
    if (!authHeader) {
        req.isAuth = false;
        return next();
    }
    var token = authHeader.split(' ')[1];
    if (!token || token === '') {
        req.isAuth = false;
        return next();
    }
    var decodedToken;
    try {
        decodedToken = jwt.verify(token, 'somesupersecretkey');
    }
    catch (err) {
        req.isAuth = false;
        return next();
    }
    if (!decodedToken) {
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();
};
exports.isAuth = isAuth;
