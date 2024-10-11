// src/components/PiezaRepuesto.js
import React from 'react';

const PiezaRepuesto = ({ pieza }) => {
    return (
        <div className="pieza-repuesto">
            <img src={pieza.imagen_url} alt={pieza.nombre_pieza} />
            <h3>{pieza.nombre_pieza}</h3>
            <p>{pieza.descripcion}</p>
            <p className="precio">${pieza.precio.toFixed(2)}</p>
            <button>Añadir al Carrito</button>

            {/* Estilos CSS dentro del mismo archivo */}
            <style jsx>{`
                .pieza-repuesto {
                    border: 1px solid #dcdcdc;
                    border-radius: 8px;
                    padding: 15px;
                    text-align: center;
                    background-color: white;
                    transition: box-shadow 0.3s;
                }

                .pieza-repuesto:hover {
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                }

                img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 4px;
                }

                h3 {
                    color: #5e2b91; /* Morado */
                    margin: 10px 0;
                }

                .precio {
                    color: #d7a74f; /* Dorado */
                    font-weight: bold;
                }

                button {
                    background-color: #5e2b91; /* Morado */
                    color: white;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #4c1f7a; /* Morado oscuro */
                }
            `}</style>
        </div>
    );
};

export default PiezaRepuesto;
