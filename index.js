"use strict";
exports.__esModule = true;
var middleware_1 = require("./src/middleware");
var dotenv = require('dotenv');
dotenv.config();
var express_1 = require("express");
var cors_1 = require("cors");
var config = require("./src/config/index");
var fileUpload = require('express-fileupload');
var port = process.env.API_PORT || 5000;
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(fileUpload({
    limits: { fileSize: 100 * 1024 * 1024 },
    useTempFiles: true,
    tempFileDir: '/tmp/',
    abortOnLimit: true,
    parseNested: true
}));
app.use((0, cors_1["default"])({
    origin: '*'
}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
// Custom middleware list
app.use(middleware_1.authenticationMiddleware);
// Load router paths
config.routerConfig(app);
app.listen(port, function () {
    return console.log("\n\uD83D\uDE80 Server ready at: http://localhost:3000\n\u2B50\uFE0F See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api");
});
exports["default"] = app;
