// Imported modules
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';
import path from 'path';

//!routers import
import indexRouter from './routes/index.js';
import iletisimRouter from './routes/iletisim.js';
import kurumsalRouter from './routes/kurumsal.js';
import urunlerRouter from './routes/urunler.js';
import loginRouter from './routes/login.js';
import userAddRoutes from './routes/useradd.js';
import productRoutes from './routes/admin.js';
import logMiddleware from './middlewares/logMiddleware.js';

// Get current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Loading environment variables from .env file
dotenv.config({ path: join(__dirname, '.env') });

// Middleware'ler
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));
app.use(logMiddleware); // Log middleware'ini burada kullanıyoruz
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//!introduce routes
app.use('/', indexRouter);
app.use('/iletisim', iletisimRouter);
app.use('/kurumsal', kurumsalRouter);
app.use('/urunler', urunlerRouter);
app.use('/login', loginRouter);
app.use('/users', userAddRoutes);
app.use('/', productRoutes);

app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile(path.join(__dirname, 'robots.txt'));
});

//!!portu almıyor sunucu
const PORT = process.env.PORT;
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
