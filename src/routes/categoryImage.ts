import { Router } from 'express'

import * as CategoryImageController from '../controllers/categoryImage'

const router = Router()

router.route('/').get(CategoryImageController.getCategoryImages)
router.route('/:id').get(CategoryImageController.getCategoryImageById)
router.route('/').post(CategoryImageController.createCategoryImage)
router.route('/:id').patch(CategoryImageController.updateCategoryImage)
router.route('/:id').delete(CategoryImageController.deleteCategoryImage)

export default router
