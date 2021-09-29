import { Router } from 'express';
import controller from '../controllers/carousel'


const router = Router();

router.get('/carousels', controller.getCarousel)

export default router;
