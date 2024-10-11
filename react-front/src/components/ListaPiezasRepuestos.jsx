// src/components/ListaPiezasRepuestos.js
import React, { useEffect, useState } from 'react';
import PiezaRepuesto from './PiezaRepuesto.jsx';
import axios from 'axios';

const ListaPiezasRepuestos = () => {
    const [piezas, setPiezas] = useState([]);

    useEffect(() => {
        const fetchPiezas = async () => {
            try {
                const response = await axios.get('/api/piezas'); // Cambia la URL según tu configuración
                setPiezas(response.data);
            } catch (error) {
                console.error('Error al obtener las piezas:', error);
            }
        };

        fetchPiezas();
    }, []);

    return (
        <div className="lista-piezas-container">
            <h2>Productos Destacados - AutoParts Express</h2>
            <div className="lista-piezas">
                {piezas.map((pieza) => (
                    <PiezaRepuesto key={pieza.id_pieza} pieza={pieza} />
                ))}
            </div>

            {/* Estilos CSS dentro del mismo archivo */}
            <style jsx>{`
                .lista-piezas-container {
                    max-width: 1200px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #f9f9f9;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                h2 {
                    text-align: center;
                    color: #5e2b91; /* Morado */
                }

                .lista-piezas {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 20px;
                }
            `}</style>
        </div>
    );
};

export default ListaPiezasRepuestos;
