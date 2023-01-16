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
exports.deleteFile = exports.uploadFile = void 0;
var nanoid_1 = require("nanoid");
var fs = require('fs');
var ROOT_FOLDER = '/Users/tejas/Desktop/uploads';
/**
 * POST /uploadFile
 * Upload file
 */
var uploadFile = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var sampleFile, folder, uploadPath_1, fileExt, id, dest;
    return __generator(this, function (_a) {
        console.log('req.files', JSON.stringify(!req.files.image));
        try {
            if (!req.files.file && !req.files.image) {
                return [2 /*return*/, res.send('No files provided!')];
            }
            if (Array.isArray(req.files.file) || Array.isArray(req.files.image)) {
                return [2 /*return*/, res.send('Multiple files no supported!')];
            }
            sampleFile = void 0;
            folder = void 0;
            if (req.files && req.files.image) {
                //image
                sampleFile = req.files.image;
                folder = '/images/';
            }
            else if (req.files && req.files.file) {
                //PDF ZIP file...
                sampleFile = req.files.file;
                folder = '/resources/';
            }
            uploadPath_1 = __dirname + '/' + sampleFile.name;
            fileExt = sampleFile.name
                .split('.')
                .filter(Boolean) // removes empty extensions (e.g. `filename...txt`)
                .slice(1)
                .join('.');
            id = (0, nanoid_1.nanoid)();
            dest = ROOT_FOLDER + folder + id + '.' + fileExt;
            sampleFile.mv(dest, function (err) {
                if (err)
                    return res.status(500).send(err);
                res.send(uploadPath_1);
            });
        }
        catch (err) {
            return [2 /*return*/, next(err)];
        }
        return [2 /*return*/];
    });
}); };
exports.uploadFile = uploadFile;
/**
 * DELETE /deleteFile
 * Delete file
 */
var deleteFile = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, folders, deleted, i, folder, dest;
    return __generator(this, function (_a) {
        try {
            id = req.params.id;
            if (!id) {
                return [2 /*return*/, res.send('Id required!')];
            }
            folders = ['/images/', '/resources/'];
            deleted = false;
            for (i = 0; i < folders.length; i++) {
                folder = folders[i];
                dest = ROOT_FOLDER + folder + id;
                if (fs.existsSync(dest)) {
                    fs.unlinkSync(dest);
                    deleted = true;
                }
            }
            return [2 /*return*/, res.send({ deleted: deleted, id: id })];
        }
        catch (err) {
            return [2 /*return*/, next(err)];
        }
        return [2 /*return*/];
    });
}); };
exports.deleteFile = deleteFile;
