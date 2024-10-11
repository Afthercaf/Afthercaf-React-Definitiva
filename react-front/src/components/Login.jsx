// src/components/Login.js

import React, { useState } from 'react';
import axios from '../api.js'; // Asegúrate de que esta ruta es correcta
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/signin', { email, password });
            localStorage.setItem('token', response.data.token); // Guarda el token
            navigate('/piezas'); // Redirige a la página de inicio
        } catch (err) {
            setError(err.response?.data?.message || 'Error en el inicio de sesión');
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
            '&:focus': {
                borderColor: 'purple', // Color morado al hacer foco
                outline: 'none',
            },
        },
        button: {
            padding: '0.75rem',
            borderRadius: '0.25rem',
            backgroundColor: 'purple', // Color morado
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            '&:hover': {
                backgroundColor: 'darkpurple', // Color morado oscuro al pasar el mouse
            },
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>AutoParts Express</h2>
            {error && <p style={styles.error}>{error}</p>}
            <form style={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
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
                <button type="submit" style={styles.button}>Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
