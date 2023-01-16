"use strict";
exports.__esModule = true;
var product_1 = require("../routes/product");
var category_1 = require("../routes/category");
var productImage_1 = require("../routes/productImage");
var productResource_1 = require("../routes/productResource");
var manufacturer_1 = require("../routes/manufacturer");
var user_1 = require("../routes/user");
var fileManager_1 = require("../routes/fileManager");
function default_1(app) {
    app.use('/products', product_1["default"]);
    app.use('/categories', category_1["default"]);
    app.use('/productImages', productImage_1["default"]);
    app.use('/productResources', productResource_1["default"]);
    app.use('/manufacturers', manufacturer_1["default"]);
    app.use('/users', user_1["default"]);
    app.use('/fileManager', fileManager_1["default"]);
}
exports["default"] = default_1;
