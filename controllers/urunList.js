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

export const listerfunctionCivata = (req, res) => {
    const sqlselect = `SELECT * FROM urunler WHERE urun_sinif = 'Civata'`;

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};

export const listerfunctionHirdavat = (req, res) => {
    const sqlselect = `SELECT * FROM urunler WHERE urun_sinif = 'Hırdavat'`;

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};

export const listerfunctionElAletleri = (req, res) => {
    const sqlselect = `SELECT * FROM urunler WHERE urun_sinif = 'El Aletleri'`;

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};

export const listerfunctionElektrikliAletler = (req, res) => {
    const sqlselect = `SELECT * FROM urunler WHERE urun_sinif = 'Elektrikli Aletler'`;

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};

export const listerfunctionIsGuvenligi = (req, res) => {
    const sqlselect = `SELECT * FROM urunler WHERE urun_sinif = 'İş Güvenliği'`;

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};

export const listerfunctionCelikHalatVeEkipman = (req, res) => {
    const sqlselect = `SELECT * FROM urunler WHERE urun_sinif = 'Çelik Halat Ve Ekipmanları'`;

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};
export const listerfunctionKaynakMakinesi = (req, res) => {
    const sqlselect = `SELECT * FROM urunler WHERE urun_sinif = 'Kaynak Makinası'`;

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};
export const listerfunctionTeker = (req, res) => {
    const sqlselect = `SELECT * FROM urunler WHERE urun_sinif = 'Teker'`;

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};
export const listerfunctionYapiştiriciVeKimyasallarBoyalar = (req, res) => {
    const sqlselect = `SELECT * FROM urunler WHERE urun_sinif = 'Yapıştırıcı Ve Kimyasallar Boyalar'`;

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};
export const listerfunctionTakimÇantasiVEAvadanlikGrubu = (req, res) => {
    const sqlselect = `SELECT * FROM urunler WHERE urun_sinif = 'Takım Çantası VE Avadanlık Grubu'`;

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};
export const listerfunctionMerdivenVeIskele = (req, res) => {
    const sqlselect = `SELECT * FROM urunler WHERE urun_sinif = 'Merdven ve İskele'`;

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};

export const listerfunctionTaşVeZımpara = (req, res) => {
    const sqlselect = `SELECT * FROM urunler WHERE urun_sinif = 'Taş Ve Zımpara'`;

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};
export const listerfunctionMatkapUcuVeBitsGrubu = (req, res) => {
    const sqlselect = `SELECT * FROM urunler WHERE urun_sinif = 'Matkap Ucu Ve Bits Grubu'`;

    connection.query(sqlselect, (err, results) => {
        if (err) {
            console.error('Veri çekilirken hata oluştu:', err);
           
        }
        res.render('Urunler',{products: results})
    })

};
