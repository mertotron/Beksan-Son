import mysql from 'mysql';
import { promisify } from 'util';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const connection = mysql.createConnection(dbConfig);

// MySQL bağlantısını başlatma
connection.connect(error => {
    if (error) throw error;
    console.log('MySQL bağlantısı başarılı FOR LOG');
});

// util.promisify kullanarak callback'i Promise'e dönüştür
const query = promisify(connection.query).bind(connection);

const logMiddleware = async (req, res, next) => {
    // Ana sayfa için loglama yapmama
    if (req.originalUrl === '/') {
        return next(); // Ana sayfa için loglama yapmadan devam et
    }

    try {
        const ip = req.ip; // Kullanıcının IP adresini al

        // Diğer istek bilgilerini de alabilirsiniz
        const method = req.method;
        const url = req.originalUrl;

        // Log bilgilerini MySQL'e ekle
        await query('INSERT INTO request_logs (ip_address, method, url) VALUES (?, ?, ?)', [ip, method, url]);

        // Konsola log yazdır
        console.log(`[${new Date().toISOString()}] ${ip} ${method} ${url}`);
    } catch (error) {
        console.error('MySQL loglama hatası:', error);
    }

    // Middleware'den sonra diğer işlemlere devam et
    next();
};

export default logMiddleware;
