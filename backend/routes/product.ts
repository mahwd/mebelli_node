import { Router } from 'express';
import controller from '../controllers/product'


const router = Router();

router.get('/products', controller.getProducts)
router.post('/products/add', controller.createProduct)

export default router;
