import { Router } from 'express';
import UserController from '../controllers/users';

const router = Router();

router.post('/api/v1/auth/signup', UserController.userSignup);

export default router;