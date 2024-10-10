import mysql from 'mysql2';


// Configuración de la conexión a la base de datos
export const db = mysql.createConnection({
    host: 'localhost',      // Cambia si tu host es diferente
    user: 'root',           // Usuario de MySQL
    password: '450927',           // Contraseña de MySQL
    database: 'mecanico'  // Cambia con tu nombre de base de datos
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL exitosa');
});

export const TOKEN_SECRET = process.env.TOKEN_SECRET;
