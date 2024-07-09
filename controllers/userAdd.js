import bcrypt from 'bcrypt';
import connection from '../config/db.js';

export const addUser = async (req, res) => {
    const { id_user, username, password } = req.body;

    if (!id_user || !username || !password) {
        return res.status(400).send('Tüm alanlar gereklidir');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (id_user, username, password) VALUES (?, ?, ?)';
        const values = [id_user, username, hashedPassword];

        connection.query(query, values, (error, results) => {
            if (error) {
                console.error('Kullanıcı kaydedilemedi:', error);
                return res.status(500).send('Kullanıcı kaydedilemedi');
            }
            res.status(201).send('Kullanıcı başarıyla kaydedildi');
        });
    } catch (error) {
        console.error('Kullanıcı kaydedilemedi:', error);
        res.status(500).send('Kullanıcı kaydedilemedi');
    }
};
