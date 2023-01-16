import { Router } from 'express'

import * as manufacturerController from '../controllers/manufacturer'

const router = Router()

router.route('/').get(manufacturerController.getManufacturers)
router.route('/:id').get(manufacturerController.getManufacturerById)
router.route('/').post(manufacturerController.createManufacturer)
router.route('/:id').patch(manufacturerController.updateManufacturer)
router.route('/:id').delete(manufacturerController.deleteManufacturer)

export default router
