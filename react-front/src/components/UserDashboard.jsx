import React, { useEffect, useState } from 'react';
import axios from '../api.js';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
                if (!token) {
                    throw new Error('Token no encontrado');
                }

                // Decodifica el token para obtener el ID del usuario
                const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode token
                const userId = decodedToken.id; // Asegúrate de que el ID se llama 'id' en el payload

                const response = await axios.get(`/api/usuarios/${userId}`); // Usa el ID para hacer la solicitud
                setUser(response.data);
            } catch (err) {
                setError(err.response?.data?.message || 'Error al obtener los datos');
            }
        };

        fetchUserProfile();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>Perfil de Usuario</h1>
            <p>Nombre: {user.nombre}</p>
            <p>Email: {user.email}</p>
            <p>Teléfono: {user.telefono}</p>
            <p>Dirección: {user.direccion}</p>
            <p>Rol: {user.rol}</p>
            {/* Otros detalles del usuario */}
        </div>
    );
};

export default UserProfile;

