import React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ImgLanguaje from "./img/language_24dp_FILL0_wght400_GRAD0_opsz24.png"
import './_encabezadoCurso.scss';

const TituloBarraNavegacion = ({ titulo, descripcionCorta, nombreAsesor, calificacion, noCalificaciones, noEstudiantes, idioma }) => {
    return (
        <div className="titulo-barra-navegacion">
            <div className='contenido'>
                <h1>{titulo}</h1> <br/>
                <p>{descripcionCorta}</p> <br/>
                <p>{nombreAsesor}</p> <br/>
                
                <div className='cont'>
                    <div>
                        <p>{calificacion.toFixed(1)}</p>
                    </div>
                    <div>
                        <Rating 
                        readOnly
                        name="size-medium" 
                        value={calificacion.toFixed(1)}
                        precision={.5}
                        emptyIcon={<StarIcon style={{ color: '#ddd' }} />}
                        />
                    </div>
                    <div>
                        <p>&#40;{noCalificaciones} calificaciones&#41;</p>
                    </div>
                    <div>
                        <p>{noEstudiantes} estudiantes</p>
                    </div>
                </div>

                <br/>
                <div className='cont2'>
                    <img
                        src={ImgLanguaje}
                    />
                    <p>Español</p>
                </div>

            </div>

        </div>
    );
}

export default TituloBarraNavegacion;
