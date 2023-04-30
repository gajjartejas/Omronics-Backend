import { Router } from 'express'

import * as coverImageController from '../controllers/coverImage'

const router = Router()

router.route('/').get(coverImageController.getCoverImages)
router.route('/:id').get(coverImageController.getCoverImageById)
router.route('/').post(coverImageController.createCoverImage)
router.route('/:id').patch(coverImageController.updateCoverImage)
router.route('/').delete(coverImageController.deleteCoverImage)
router.route('/deleteCoverImages').post(coverImageController.deleteCoverImages)

export default router
