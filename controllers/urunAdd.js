import connection from '../config/db.js';

export const addProduct = (req, res) => {
    const { urunadi, urunaciklama, urunsinif} = req.body;
    const urunresmi = req.file.path; // Dosya yolu

    const sql = 'INSERT INTO urunler (urun_adi, urun_aciklama, urun_resmi, urun_sinif) VALUES (?, ?, ?, ?)';
    connection.query(sql, [urunadi, urunaciklama, urunresmi, urunsinif], (err, result) => {
        if (err) {
            console.error('Veritabanına eklenirken hata oluştu:', err);
            return res.status(500).send('Veritabanına eklenirken hata oluştu');
        }

        console.log('Ürün başarıyla eklendi:', result);
        res.send('Ürün başarıyla eklendi');
    });
};
