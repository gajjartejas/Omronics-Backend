"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
async function default_1(req, res, next) {
    if (!req.user) {
        const error = (0, http_errors_1.default)(401, 'Not authenticated!');
        return next(error);
    }
    return next();
}
exports.default = default_1;
