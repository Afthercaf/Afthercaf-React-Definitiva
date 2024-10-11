// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Register';
import UserProfile from './components/UserDashboard';
import Home from './components/home'; // Asegúrate de tener este componente creado
import ListaPiezasRepuestos from './components/ListaPiezasRepuestos';

const App = () => {
    return (
        <Router>
            <div className="app">
                <h1 style={{ textAlign: 'center', color: '#5e2b91' }}>AutoParts Express</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/piezas" element={<ListaPiezasRepuestos />} /> {/* Nueva ruta para las piezas */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
