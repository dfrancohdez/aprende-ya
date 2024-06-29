// BotonConIcono.jsx
import React from 'react';
import "./_botonCorazon.scss"; // Asegúrate de que este archivo contenga los estilos necesarios
import { useNavigate } from "react-router-dom";
import { HeartFill } from 'react-bootstrap-icons'; // Importa el ícono que deseas usar

export const BotonCorazon = (props) => {
    const navigate = useNavigate();

    const handleIconClick = () => {
        navigate(props.page, { replace: true });
    };

    // Concatenar las clases para el botón
    const buttonClasses = `IconoBotonCo ${props.style}`;

    return (
        <button 
            type="button" 
            className={buttonClasses} 
            //onClick={handleIconClick}
        >
            <HeartFill size={24} className="button-iconCo" /> 
        </button>
    );
};
