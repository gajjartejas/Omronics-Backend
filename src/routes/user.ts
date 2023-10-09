import { Router } from 'express';

import * as userController from '../controllers/user.js';

const router = Router();

router.route('/').get(userController.getUsers);
router.route('/:id').get(userController.getUserById);
router.route('/').post(userController.createUser);
router.route('/:id').patch(userController.updateUser);
router.route('/:id').delete(userController.deleteUser);
router.route('/login').post(userController.login);

export default router;
