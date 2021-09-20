import { Router } from 'express';
import controller from '../controllers/category'


const router = Router();

router.get('/categories', controller.getCategories)

export default router;
