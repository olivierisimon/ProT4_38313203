import { Router } from 'express';
import { libro } from './controller.js';

export const router = Router()

router.get('/libros', libro.getAll);
router.post('/libro', libro.getOne);
router.post('/add-libro', libro.add);
router.delete('/delete-libro', libro.delete);
router.put('/update-libro', libro.update);

