import { Router } from 'express'

import * as staticPageDataController from '../controllers/staticPageData'

const router = Router()

router.route('/').get(staticPageDataController.getStaticPageDatum)
router.route('/:id').get(staticPageDataController.getStaticPageDataById)
router.route('/').post(staticPageDataController.createStaticPageData)
router.route('/:id').patch(staticPageDataController.updateStaticPageData)
router.route('/:id').delete(staticPageDataController.deleteStaticPageData)

export default router
