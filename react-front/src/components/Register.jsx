// src/components/Signup.js

import React, { useState } from 'react';
import axios from '../api.js'; // Asegúrate de que la ruta a axios es correcta
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState(''); // Agregar teléfono
    const [direccion, setDireccion] = useState(''); // Agregar dirección
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reiniciar el error antes de enviar
        setSuccessMessage(''); // Reiniciar el mensaje de éxito

        try {
            await axios.post('/auth/signup', { nombre: name, email, telefono, direccion, password });
            setSuccessMessage('Registro exitoso. Redirigiendo a inicio de sesión...');
            setTimeout(() => {
                navigate('/login'); // Redirige a la página de inicio de sesión después de 2 segundos
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Error en el registro');
        }
    };

    // Estilos en línea
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f3f4f6', // Fondo claro
            color: '#4b5563', // Texto gris
        },
        title: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'gold', // Color dorado
            marginBottom: '1rem',
        },
        error: {
            color: 'red',
            marginBottom: '1rem',
        },
        success: {
            color: 'green',
            marginBottom: '1rem',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        },
        input: {
            marginBottom: '1rem',
            padding: '0.5rem',
            borderRadius: '0.25rem',
            border: '1px solid #d1d5db', // Borde gris
            transition: 'border-color 0.3s',
        },
        button: {
            padding: '0.75rem',
            borderRadius: '0.25rem',
            backgroundColor: 'purple', // Color morado
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Registro</h2>
            {error && <p style={styles.error}>{error}</p>}
            {successMessage && <p style={styles.success}>{successMessage}</p>}
            <form style={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    style={styles.input} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    style={styles.input} 
                />
                <input 
                    type="tel" 
                    placeholder="Teléfono" 
                    value={telefono} 
                    onChange={(e) => setTelefono(e.target.value)} 
                    required 
                    style={styles.input} 
                />
                <input 
                    type="text" 
                    placeholder="Dirección" 
                    value={direccion} 
                    onChange={(e) => setDireccion(e.target.value)} 
                    required 
                    style={styles.input} 
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    style={styles.input} 
                />
                <button type="submit" style={styles.button}>Registrarse</button>
            </form>
        </div>
    );
};

export default Signup;
