import express from 'express';
import { addUser } from '../controllers/userAdd.js';

const router = express.Router();

// Kullanıcı ekleme rotası
router.post('/addUser', addUser);

export default router;
