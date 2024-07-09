import express from 'express';
const router = express.Router();

// İletişim sayfası rotası
router.get('/', (req, res) => {
  res.render('iletisim', { title: 'İletişim' });
});

export default router;
