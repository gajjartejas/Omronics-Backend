import { Router } from 'express';

import * as fileManagerController from '../controllers/fileManager.js';

const router = Router();

router.route('/').post(fileManagerController.uploadFile);
router.route('/:id').delete(fileManagerController.deleteFile);

export default router;
