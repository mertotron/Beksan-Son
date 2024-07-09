import connection from '../config/db.js';
import fs from 'fs';

export const deleteProduct = (req, res) => {
    const productId = req.body.ID;
    console.log(productId);

    // İlk olarak veritabanından dosya yolunu alalım
    const sqlSelect = 'SELECT urun_resmi FROM urunler WHERE urun_id = ?';
    connection.query(sqlSelect, [productId], (err, results) => {
        if (err) {
            console.error('Veritabanından dosya yolunu alırken hata oluştu:', err);
            return res.status(500).send('Veritabanından dosya yolunu alırken hata oluştu');
        }

        if (results.length > 0) {
            const filePath = results[0].urun_resmi;

            // Dosyayı silme
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Dosya silinirken hata oluştu:', err);
                    return res.status(500).send('Dosya silinirken hata oluştu');
                }

                // Veritabanından kaydı silme
                const sqlDelete = 'DELETE FROM urunler WHERE urun_id = ?';
                connection.query(sqlDelete, [productId], (err, result) => {
                    if (err) {
                        console.error('Veritabanından kayıt silinirken hata oluştu:', err);
                        return res.status(500).send('Veritabanından kayıt silinirken hata oluştu');
                    }

                    console.log('Ürün başarıyla silindi:', result);
                    res.send('Ürün başarıyla silindi');
                });
            });
        } else {
            res.status(404).send('Ürün bulunamadı');
        }
    });
};
