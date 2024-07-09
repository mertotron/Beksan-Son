import express from 'express';
const router = express.Router();

// Kurumsal sayfası rotası
router.get('/', (req, res) => {
  res.render('kurumsal', { title: 'Kurumsal' });
});

export default router;
