import { Router } from 'express';
import propertyController from '../controllers/property';

const router = Router();

router.post('/property', propertyController.postProperty);

export default router;