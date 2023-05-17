import { Router } from 'express';

import * as manufacturerController from '../controllers/manufacturer';

const router = Router();

router.route('/').get(manufacturerController.getManufacturers);
router.route('/:id').get(manufacturerController.getManufacturerById);
router.route('/').post(manufacturerController.createManufacturer);
router.route('/:id').patch(manufacturerController.updateManufacturer);
router.route('/:id').delete(manufacturerController.deleteManufacturer);
router.route('/deleteManufacturers').post(manufacturerController.deleteManufacturers);
router.route('/addFeaturedManufacturers').post(manufacturerController.addFeaturedManufacturers);
router.route('/removeFeaturedManufacturers').post(manufacturerController.removeFeaturedManufacturers);

export default router;
