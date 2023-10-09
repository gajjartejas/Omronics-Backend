import { Router } from 'express';

import * as productImageController from '../controllers/productImage.js';

const router = Router();

router.route('/').get(productImageController.getProductImages);
router.route('/:id').get(productImageController.getProductImageById);
router.route('/').post(productImageController.createProductImage);
router.route('/:id').patch(productImageController.updateProductImage);
router.route('/:id').delete(productImageController.deleteProductImage);

export default router;
