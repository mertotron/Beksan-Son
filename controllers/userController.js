import bcrypt from 'bcrypt';
import connection from '../config/db.js'; // Veritabanı bağlantısı

export const login = async (req, res) => {
    const { uname, password } = req.body;

    if (!uname || !password) {
        return false; // Kullanıcı adı veya şifre eksikse false döndür
    }

    try {
        // Veritabanında kullanıcıyı bulma
        const query = 'SELECT * FROM users WHERE username = ?';
        const results = await queryDB(query, [uname]);

        if (results.length === 0) {
            return false; // Kullanıcı bulunamadıysa false döndür
        }

        // Kullanıcı bulundu, şifre kontrolü yapılıyor
        const user = results[0];
        const match = await bcrypt.compare(password, user.password);

        return match; // Şifre doğru ise true, yanlış ise false döndür
    } catch (error) {
        console.error('Login error:', error);
        throw error; // Hata durumunda hatayı fırlat
    }
};

// Veritabanı sorgusunu yapacak fonksiyon
const queryDB = (query, params) => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};
