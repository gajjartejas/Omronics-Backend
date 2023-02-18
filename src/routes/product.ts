import { Router } from 'express'

import * as productController from '../controllers/product'

const router = Router()

router.route('/').get(productController.getProducts)
router.route('/:id').get(productController.getProductById)
router.route('/').post(productController.createProduct)
router.route('/:id').patch(productController.updateProduct)
router.route('/:id').delete(productController.deleteProduct)
router.route('/deleteProducts').post(productController.deleteProducts)

export default router
