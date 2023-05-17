import { Router } from 'express';

import * as categoryController from '../controllers/category';

const router = Router();

router.route('/').get(categoryController.getCategories);
router.route('/:id').get(categoryController.getCategoryById);
router.route('/children/:id').get(categoryController.getChildCategoriesById);
router.route('/:id/products').get(categoryController.getProductsByCategoryId);
router.route('/').post(categoryController.createCategory);
router.route('/:id').patch(categoryController.updateCategory);
router.route('/').delete(categoryController.deleteCategory);
router.route('/deleteCategories').post(categoryController.deleteCategories);
router.route('/addFeaturedCategories').post(categoryController.addFeaturedCategories);
router.route('/removeFeaturedCategories').post(categoryController.removeFeaturedCategories);

export default router;
