import { Router } from 'express';

import * as productController from '../controllers/product';
import * as categoryController from '../controllers/category';
import * as productImageController from '../controllers/productImage';
import * as productResourceController from '../controllers/productResource';
import * as manufacturerController from '../controllers/manufacturer';
import * as userController from '../controllers/user';
import * as fileManagerController from '../controllers/fileManager';
import * as contactDataController from '../controllers/contactData';

const router = Router();

//Product
router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.patch('/:id', productController.updateProduct);
router.get('/:id', productController.getProductById);
router.delete('/:id', productController.deleteProduct);
router.post('/deleteProducts', productController.deleteProducts);

//Category
router.get('/', categoryController.getCategories);
router.post('/', categoryController.createCategory);
router.patch('/:id', categoryController.updateCategory);
router.get('/:id', categoryController.getCategoryById);
router.get('/children/:id', categoryController.getChildCategoriesById);
router.get('/:id/products', categoryController.getProductsByCategoryId);
router.delete('/', categoryController.deleteCategory);
router.post('/deleteCategories', categoryController.deleteCategories);

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
router.post('/deleteManufacturers', manufacturerController.deleteManufacturers);

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

//Contact Data
router.get('/', contactDataController.getContactDatum);
router.post('/', contactDataController.createContactData);
router.patch('/:id', contactDataController.updateContactData);
router.get('/:id', contactDataController.getContactDataById);
router.delete('/', contactDataController.deleteContactData);
router.post('/deleteContactDatum', contactDataController.deleteContactDatum);

export default router;
