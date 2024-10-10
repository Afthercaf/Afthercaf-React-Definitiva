import { Router } from 'express';
import { signUp, signIn } from '../controllers/Auth.js'; // Ajusta la ruta a tu controlador

const router = Router();

// Definir la ruta para el registro
router.post('/signup', signUp);

// Definir la ruta para el inicio de sesión
router.post('/signin', signIn);

export default router;