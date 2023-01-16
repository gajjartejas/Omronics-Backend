"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fileManagerController = require("../controllers/fileManager");
var router = (0, express_1.Router)();
router.route('/').post(fileManagerController.uploadFile);
router.route('/:id')["delete"](fileManagerController.deleteFile);
exports["default"] = router;
