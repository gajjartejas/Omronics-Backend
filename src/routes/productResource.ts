import { Router } from 'express';

import * as productResourceController from '../controllers/productResource.js';

const router = Router();

router.route('/').get(productResourceController.getProductResources);
router.route('/:id').get(productResourceController.getProductResourceById);
router.route('/').post(productResourceController.createProductResource);
router.route('/:id').patch(productResourceController.updateProductResource);
router.route('/:id').delete(productResourceController.deleteProductResource);

export default router;
