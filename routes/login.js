import express from 'express';
import { login } from '../controllers/userController.js';

const router = express.Router();

// Login sayfası route'u
router.get('/', (req, res) => {
    res.render('login', { title: 'Login' });
});

// Login kontrolü route'u
router.post('/logincontrol', async (req, res) => {
    try {
        const loggedIn = await login(req, res);

        if (loggedIn) {
            res.render('adminpanel.ejs', { title: 'Admin Panel' });
        } else {
            res.send('hatalı giriş');
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;


