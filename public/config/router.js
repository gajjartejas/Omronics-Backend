"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../routes/product"));
const category_1 = __importDefault(require("../routes/category"));
const productImage_1 = __importDefault(require("../routes/productImage"));
const productResource_1 = __importDefault(require("../routes/productResource"));
const manufacturer_1 = __importDefault(require("../routes/manufacturer"));
const user_1 = __importDefault(require("../routes/user"));
const fileManager_1 = __importDefault(require("../routes/fileManager"));
function default_1(app) {
    app.use('/products', product_1.default);
    app.use('/categories', category_1.default);
    app.use('/productImages', productImage_1.default);
    app.use('/productResources', productResource_1.default);
    app.use('/manufacturers', manufacturer_1.default);
    app.use('/users', user_1.default);
    app.use('/fileManager', fileManager_1.default);
}
exports.default = default_1;
