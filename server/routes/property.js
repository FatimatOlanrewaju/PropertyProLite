import { Router } from 'express';
import propertyController from '../controllers/property';

const router = Router();

router.post('/property', propertyController.postProperty);
router.patch('/property/:id', propertyController.updateProperty);

export default router;