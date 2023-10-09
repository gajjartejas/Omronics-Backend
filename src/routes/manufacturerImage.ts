import { Router } from 'express';

import * as manufacturerImageController from '../controllers/manufacturerImage.js';

const router = Router();

router.route('/').get(manufacturerImageController.getManufacturerImages);
router.route('/:id').get(manufacturerImageController.getManufacturerImageById);
router.route('/').post(manufacturerImageController.createManufacturerImage);
router.route('/:id').patch(manufacturerImageController.updateManufacturerImage);
router.route('/:id').delete(manufacturerImageController.deleteManufacturerImage);

export default router;
