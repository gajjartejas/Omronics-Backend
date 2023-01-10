import { Router } from 'express';

import * as productController from '../controllers/product';
import * as categoryController from '../controllers/category';
import * as productImageController from '../controllers/productImage';
import * as productResourceController from '../controllers/productResource';
import * as manufacturerController from '../controllers/manufacturer';
import * as userController from '../controllers/user';
import * as fileManagerController from '../controllers/fileManager';

const router = Router();

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

export default router;
