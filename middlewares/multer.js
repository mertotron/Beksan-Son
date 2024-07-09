import path from 'path';
import multer from 'multer';

// Multer konfigürasyonu
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/products');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Dosya adı zaman damgası ile değiştirilir
    }
});

const upload = multer({ storage: storage });

export default upload;
