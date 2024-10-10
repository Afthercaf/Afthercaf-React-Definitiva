import { db } from '../DBS/database.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createAccessToken } from "../lib/helpers.js";


const pool = db;

// Registrar Usuario
export const signUp = async (req, res) => {
  const { nombre, email, telefono, direccion, password } = req.body;
  
  try {
    // Verificar si el correo ya está registrado
    const [userFound] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email]);
    
    if (userFound.length > 0) {
      return res.status(400).json({ message: "El correo electrónico ya está en uso" });
    }

    // Hashear la contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // Insertar nuevo usuario en la tabla
    const [result] = await pool.query("INSERT INTO usuarios SET ?", {
      nombre,
      email,
      telefono,
      direccion,
      contraseña: passwordHash,
      rol: 'user', // Se define el rol por defecto como 'user'
      fecha_registro: new Date() // Se inserta la fecha actual como fecha de registro
    });

    const user = {
      id_usuario: result.insertId,
      nombre,
      email,
      rol: 'user'
    };

    // Crear token de acceso
    const token = await createAccessToken({ id: user.id_usuario, role: user.rol });
    
    // Configurar la cookie con el token
    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV,
      secure: process.env.NODE_ENV,
      sameSite: "none",
    });

    // Devolver el usuario creado
    res.json(user);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

if (!ACCESS_TOKEN_SECRET) {
  throw new Error("ACCESS_TOKEN_SECRET no está definido en el archivo .env");
}

// Iniciar Sesión
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar el usuario por correo electrónico
    const [users] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email]);

    if (users.length === 0) {
      return res.status(400).json({ message: "El correo electrónico no existe" });
    }

    const userFound = users[0];

    // Comparar la contraseña ingresada con el hash en la base de datos
    const isMatch = await bcrypt.compare(password, userFound.contraseña);

    if (!isMatch) {
      return res.status(400).json({ message: "La contraseña es incorrecta" });
    }

    // Generar un token JWT
    const token = jwt.sign(
      { id: userFound.id_usuario, role: userFound.rol },
      ACCESS_TOKEN_SECRET,
      { expiresIn: '15d' }
    );

    // Configurar la cookie con el token
    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV,
      secure: process.env.NODE_ENV,
      sameSite: "none",
    });

    // Devolver la información del usuario y el token
    res.json({
      id_usuario: userFound.id_usuario,
      nombre: userFound.nombre,
      email: userFound.email,
      telefono: userFound.telefono,
      direccion: userFound.direccion,
      rol: userFound.rol,
      token
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
