"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController = __importStar(require("../controllers/product"));
const categoryController = __importStar(require("../controllers/category"));
const productImageController = __importStar(require("../controllers/productImage"));
const productResourceController = __importStar(require("../controllers/productResource"));
const manufacturerController = __importStar(require("../controllers/manufacturer"));
const userController = __importStar(require("../controllers/user"));
const fileManagerController = __importStar(require("../controllers/fileManager"));
const router = (0, express_1.Router)();
//Product
router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.patch('/:id', productController.updateProduct);
router.get('/:id', productController.getProductById);
router.delete('/:id', productController.deleteProduct);
//Category
router.get('/', categoryController.getCategories);
router.post('/', categoryController.createCategory);
router.patch('/:id', categoryController.updateCategory);
router.get('/:id', categoryController.getCategoryById);
router.delete('/:id', categoryController.deleteCategory);
//ProductImages
router.get('/', productImageController.getProductImages);
router.post('/', productImageController.createProductImage);
router.patch('/:id', productImageController.updateProductImage);
router.get('/:id', productImageController.getProductImageById);
router.delete('/:id', productImageController.deleteProductImage);
//ProductResources
router.get('/', productResourceController.getProductResources);
router.post('/', productResourceController.createProductResource);
router.patch('/:id', productResourceController.updateProductResource);
router.get('/:id', productResourceController.getProductResourceById);
router.delete('/:id', productResourceController.deleteProductResource);
//Manufacturer
router.get('/', manufacturerController.getManufacturers);
router.post('/', manufacturerController.createManufacturer);
router.patch('/:id', manufacturerController.updateManufacturer);
router.get('/:id', manufacturerController.getManufacturerById);
router.delete('/:id', manufacturerController.deleteManufacturer);
//User
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUser);
router.post('/login', userController.login);
//FileManager
router.post('/', fileManagerController.uploadFile);
router.delete('/:id', fileManagerController.deleteFile);
exports.default = router;
