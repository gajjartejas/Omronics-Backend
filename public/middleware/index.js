"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = exports.authenticationMiddleware = void 0;
const authentication_1 = __importDefault(require("./authentication"));
exports.authenticationMiddleware = authentication_1.default;
const isAuthenticated_1 = __importDefault(require("./isAuthenticated"));
exports.isAuthenticated = isAuthenticated_1.default;
