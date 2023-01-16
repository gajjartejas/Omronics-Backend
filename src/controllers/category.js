"use strict";
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
exports.getCategoryById = exports.getCategories = exports.deleteCategory = exports.updateCategory = exports.createCategory = void 0;
var prismaClient_1 = require("../libs/prismaClient");
/**
 * POST /categories
 * Create a new categories
 */
var createCategory = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                data = req.body.data;
                return [4 /*yield*/, prismaClient_1["default"].category.create({
                        data: data
                    })];
            case 1:
                result = _a.sent();
                res.json(result);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                return [2 /*return*/, next(err_1)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createCategory = createCategory;
/**
 * PATCH /categories
 * Update single categories
 */
var updateCategory = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, result, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                data = req.body.data;
                return [4 /*yield*/, prismaClient_1["default"].category.update({
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
exports.updateCategory = updateCategory;
/**
 * DELETE /categories
 * Delete categories
 */
var deleteCategory = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, prismaClient_1["default"].category["delete"]({
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
exports.deleteCategory = deleteCategory;
/**
 * GET /categories
 * Get all categories
 */
var getCategories = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var users, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prismaClient_1["default"].category.findMany({})];
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
exports.getCategories = getCategories;
/**
 * GET /categories/:id
 * Get category by id
 */
var getCategoryById = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, post, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, prismaClient_1["default"].category.findUnique({
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
exports.getCategoryById = getCategoryById;
