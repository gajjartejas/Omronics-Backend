import { Router } from 'express'

import * as categoryController from '../controllers/category'

const router = Router()

router.route('/').get(categoryController.getCategories)
router.route('/:id').get(categoryController.getCategoryById)
router.route('/').post(categoryController.createCategory)
router.route('/:id').patch(categoryController.updateCategory)
router.route('/:id').delete(categoryController.deleteCategory)

export default router
