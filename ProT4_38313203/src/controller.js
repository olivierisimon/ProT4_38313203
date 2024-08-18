import {pool} from './database.js';

class LibrosController{

    async getAll(req, res) {
        try {
            const [result] = await pool.query('SELECT * FROM libros');
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getOne(req, res) {
        try {
            const libro = req.body;
            const [result] = await pool.query('SELECT * FROM libros WHERE id = ?', [libro.id]);
            res.json(result[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    

}

export const libro = new LibrosController();

