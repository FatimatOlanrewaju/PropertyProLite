import { Router } from 'express';
import propertyController from '../controllers/property';

const router = Router();

router.post('/property', propertyController.postProperty);
router.patch('/property/:id', propertyController.updateProperty);
router.patch('/property/:id/sold', propertyController.markPropertyAsSold);

export default router;