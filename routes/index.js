import express from 'express';
const router = express.Router();

// Ana sayfa rotası
router.get('/', (req, res) => {
  res.render('index', { title: 'Ana Sayfa' });
});

export default router;