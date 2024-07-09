import express from 'express';
import { listerfunction } from '../controllers/urunList.js';
const router = express.Router();

// Ürünler sayfası rotası
router.get('/', listerfunction);


export default router;