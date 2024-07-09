import connection from "../config/db.js";


export const listerfunction = (req, res) => {
    const sqlselect  = 'SELECT * FROM urunler';

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};