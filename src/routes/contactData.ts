import { Router } from 'express'

import * as contactDataController from '../controllers/contactData'

const router = Router()

router.route('/').get(contactDataController.getContactDatum)
router.route('/:id').get(contactDataController.getContactDataById)
router.route('/').post(contactDataController.createContactData)
router.route('/:id').patch(contactDataController.updateContactData)
router.route('/').delete(contactDataController.deleteContactData)
router.route('/deleteContactDatum').post(contactDataController.deleteContactDatum)
export default router
