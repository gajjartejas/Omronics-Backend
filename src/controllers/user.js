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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.__esModule = true;
exports.login = exports.getUserById = exports.getUsers = exports.deleteUser = exports.updateUser = exports.createUser = void 0;
var prismaClient_1 = require("../libs/prismaClient");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
/**
 * POST /users
 * Create a new users
 */
// {
//   "data": {
//   "username": "chandrakant",
//     "email": "chandrakant@omronics.com",
//     "password": "Admin@123098",
//     "lastname": "Prajapati",
//     "firstname": "Chandrakant",
//     "isAdmin": true
//
// }
// }
var createUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, email, password, userCount, encryptedPassword, result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                data = req.body.data;
                email = data.email, password = data.password;
                return [4 /*yield*/, prismaClient_1["default"].user.count({
                        where: {
                            email: email
                        }
                    })];
            case 1:
                userCount = _a.sent();
                if (userCount > 0) {
                    return [2 /*return*/, res.status(409).send('User Already Exist. Please Login')];
                }
                return [4 /*yield*/, bcrypt.hash(password, 10)];
            case 2:
                encryptedPassword = _a.sent();
                return [4 /*yield*/, prismaClient_1["default"].user.create({
                        data: __assign(__assign({}, data), { password: encryptedPassword })
                    })];
            case 3:
                result = _a.sent();
                res.json(result);
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                return [2 /*return*/, next(err_1)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
/**
 * PATCH /users
 * Update single users
 */
var updateUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, result, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                data = req.body.data;
                return [4 /*yield*/, prismaClient_1["default"].user.update({
                        where: {
                            id: Number(id)
                        },
                        data: data
                    })];
            case 1:
                result = _a.sent();
                res.json(result);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                return [2 /*return*/, next(err_2)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = updateUser;
/**
 * DELETE /users
 * Delete users
 */
var deleteUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, prismaClient_1["default"].user["delete"]({
                        where: {
                            id: Number(id)
                        }
                    })];
            case 1:
                result = _a.sent();
                res.json(result);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                return [2 /*return*/, next(err_3)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;
/**
 * GET /users
 * Get all users
 */
var getUsers = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var users, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prismaClient_1["default"].user.findMany({})];
            case 1:
                users = _a.sent();
                res.json(users);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                return [2 /*return*/, next(err_4)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
/**
 * GET /users/:id
 * Get user by id
 */
var getUserById = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, post, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, prismaClient_1["default"].user.findUnique({
                        where: { id: Number(id) }
                    })];
            case 1:
                post = _a.sent();
                res.json(post);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                return [2 /*return*/, next(err_5)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserById = getUserById;
/**
 * POST /login
 * Get user by id
 */
var login = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, email, password, user, _a, token, err_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                data = req.body.data;
                email = data.email, password = data.password;
                // Validate user input
                if (!(email && password)) {
                    return [2 /*return*/, res.status(400).send('All input is required')];
                }
                return [4 /*yield*/, prismaClient_1["default"].user.findFirst({
                        where: {
                            email: email
                        }
                    })];
            case 1:
                user = _b.sent();
                _a = user;
                if (!_a) return [3 /*break*/, 3];
                return [4 /*yield*/, bcrypt.compare(password, user.password)];
            case 2:
                _a = (_b.sent());
                _b.label = 3;
            case 3:
                if (_a) {
                    token = jwt.sign({ id: user.id, email: email }, process.env.JWT_KEY, {
                        expiresIn: '2h'
                    });
                    // user
                    res.status(200).json(__assign(__assign({}, user), { token: token }));
                }
                res.status(400).send('Invalid Credentials');
                return [3 /*break*/, 5];
            case 4:
                err_6 = _b.sent();
                return [2 /*return*/, next(err_6)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
