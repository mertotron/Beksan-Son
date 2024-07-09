import express from 'express';
import { addProduct } from '../controllers/urunAdd.js';
import upload from '../middlewares/multer.js';
import { deleteProduct } from '../controllers/urunDelete.js';

const router = express.Router();

router.post('/productadd', upload.single('urunresmi'), addProduct);
router.post('/deletepost', deleteProduct);

export default router;
