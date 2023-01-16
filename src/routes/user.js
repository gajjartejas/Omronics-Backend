"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userController = require("../controllers/user");
var router = (0, express_1.Router)();
router.route('/').get(userController.getUsers);
router.route('/:id').get(userController.getUserById);
router.route('/').post(userController.createUser);
router.route('/:id').patch(userController.updateUser);
router.route('/:id')["delete"](userController.deleteUser);
router.route('/login').post(userController.login);
exports["default"] = router;
