import {Router} from 'express'

import * as frontendDataController from '../controllers/frontendData'

const router = Router()

router.route('/').get(frontendDataController.getFrontendDatum)

export default router
