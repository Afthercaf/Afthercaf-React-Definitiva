import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ShoppingCart, LogIn, UserPlus } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <h1 className="title">AutoParts Express</h1>
                <p className="subtitle">Tu destino para piezas de mecánica de calidad</p>
            </header>

            <div className="features-container">
                <div className="feature-card">
                    <Wrench className="feature-icon" />
                    <h2 className="feature-title">Amplio Catálogo</h2>
                    <p className="feature-description">Encuentra la pieza exacta que necesitas para tu vehículo.</p>
                </div>
                <div className="feature-card">
                    <ShoppingCart className="feature-icon" />
                    <h2 className="feature-title">Compra Fácil</h2>
                    <p className="feature-description">Proceso de compra sencillo y seguro para tu comodidad.</p>
                </div>
            </div>

            <div className="button-container">
                <Link to="/login" className="button login-button">
                    <LogIn className="button-icon" />
                    Iniciar Sesión
                </Link>
                <Link to="/signup" className="button signup-button">
                    <UserPlus className="button-icon" />
                    Registrarse
                </Link>
            </div>

            <style jsx>{`
                .home-container {
                    background-color: #f3f4f6;
                    min-height: 100vh;
                    padding: 2rem;
                    font-family: Arial, sans-serif;
                }

                .header {
                    text-align: center;
                    margin-bottom: 3rem;
                    animation: fadeIn 1s ease-in;
                }

                .title {
                    color: #7c3aed;
                    font-size: 3rem;
                    margin-bottom: 0.5rem;
                }

                .subtitle {
                    color: #4b5563;
                    font-size: 1.25rem;
                }

                .features-container {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .feature-card {
                    background-color: white;
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .feature-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                }

                .feature-icon {
                    width: 3rem;
                    height: 3rem;
                    margin-bottom: 1rem;
                    color: #7c3aed;
                }

                .feature-title {
                    color: #1f2937;
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }

                .feature-description {
                    color: #4b5563;
                }

                .button-container {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                }

                .button {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.5rem 1rem;
                    border-radius: 0.25rem;
                    font-weight: bold;
                    text-decoration: none;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .button:hover {
                    transform: scale(1.1);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .login-button {
                    background-color: #fbbf24;
                    color: #1f2937;
                }

                .signup-button {
                    background-color: #7c3aed;
                    color: white;
                }

                .button-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                    margin-right: 0.5rem;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @media (max-width: 768px) {
                    .features-container {
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;