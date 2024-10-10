import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); // No autorizado
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Prohibido
    }
    req.user = user; // Guardamos el usuario decodificado en la request
    next();
  });
};

export const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.sendStatus(403); // Prohibido
    }
    next();
  };
};


// Middleware para verificar el token
export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Esperamos un encabezado Authorization con el token

  if (!token) {
    return res.status(403).json({ message: 'Acceso denegado, se requiere autenticación.' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token no válido.' });
    }
    req.user = user; // Guardar la información del usuario en req.user
    next(); // Continuar al siguiente middleware o ruta
  });
};

