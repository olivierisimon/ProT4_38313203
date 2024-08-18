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

    async add(req, res) {
        try {
            const libro = req.body;
            const [result] = await pool.query(
                `INSERT INTO libros(nombre, autor, categoria, \`año-publicacion\`, ISBN) VALUES (?, ?, ?, ?, ?)`,
                [libro.nombre, libro.autor, libro.categoria, libro['año-publicacion'], libro.ISBN]
            );
            res.json({ "Id insertado": result.insertId });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    async delete(req, res) {
        try {
            const { ISBN } = req.body;
            const [result] = await pool.query('DELETE FROM libros WHERE ISBN = ?', [ISBN]);
            res.json({ "Registros eliminados": result.affectedRows });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    async update(req, res) {
        try {
            const libro = req.body;
            const [result] = await pool.query(
                `UPDATE libros SET nombre = ?, autor = ?, categoria = ?, \`año-publicacion\` = ?, ISBN = ? WHERE id = ?`,
                [libro.nombre, libro.autor, libro.categoria, libro['año-publicacion'], libro.ISBN, libro.id]
            );
            res.json({ "Registros actualizados": result.changedRows });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    

}

export const libro = new LibrosController();

