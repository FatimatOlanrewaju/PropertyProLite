import { Router } from 'express';
import UserController from '../controllers/users';

const router = Router();

router.post('/auth/signup', UserController.userSignup);
router.post('/auth/signin', UserController.userSignin);

export default router;