// Imported modules
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';
import mysql from 'mysql';
import path from 'path';

//!routers import
import indexRouter from './routes/index.js';
import iletisimRouter from './routes/iletisim.js';
import kurumsalRouter from './routes/kurumsal.js';
import urunlerRouter from './routes/urunler.js';
import loginRouter from './routes/login.js';
import userAddRoutes from './routes/useradd.js';
import productRoutes from './routes/admin.js';
import connection from './config/db.js';


// Get current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();

// Loading environment variables from .env file
dotenv.config({ path: join(__dirname, '.env') });

// Middleware'ler
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Statik dosyaları servis etmek için public klasörü kullan
app.use(express.static(join(__dirname, 'public')));
// Express settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//!introduce routes

app.use('/', indexRouter);
app.use('/iletisim', iletisimRouter);
app.use('/kurumsal', kurumsalRouter);
app.use('/urunler', urunlerRouter);
app.use('/login', loginRouter)
app.use('/users', userAddRoutes);
app.use('/', productRoutes);


//!!portu almıyor sunucu
const PORT = process.env.PORT;
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
