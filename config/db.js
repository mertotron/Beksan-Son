import mysql from 'mysql';
import dotenv from 'dotenv';

// .env dosyasından çevre değişkenlerini yükleme
dotenv.config({ path: './.env' });

// MySQL bağlantısı oluşturma
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

console.log('bağlantı hatası');



// MySQL bağlantısını başlatma
connection.connect(error => {
    if (error) throw error;
    console.log('MySQL bağlantısı başarılı');
});

export default connection;
