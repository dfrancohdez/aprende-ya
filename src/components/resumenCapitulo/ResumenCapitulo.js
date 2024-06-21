import React from 'react';
import './_resumenCapitulo.scss';


const ResumenCapitulo = ({img, nomCap, duracion, progreso}) => {
    const handleClick = () => {
        alert('Button clicked!');
        // Aquí puedes agregar la lógica que necesites, como redireccionar a otra página
    };

    return (
        <div
            className="buttonR"
            role="button"
            tabIndex="0"
            onClick={handleClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                }
            }}
        >
            <div className='im'>
                <img src={img}/>
            </div>
            <span>{nomCap}</span>
            <span>{duracion} minutos</span>
            <span className='progre'>progreso: {progreso}%</span>


        </div>
    );
};

export default ResumenCapitulo;
