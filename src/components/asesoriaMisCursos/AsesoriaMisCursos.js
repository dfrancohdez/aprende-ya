import React, { useState } from 'react';
import portada from '../../assets/img/portada.jpg';
import { useNavigate } from 'react-router-dom';
import './_asesoriaMisCursos.scss';
import { Blocks } from 'react-loader-spinner';

const Asesoria = ({ nombreCurso, nombre, img, fijar, id,path}) => {
    const [cargando, setImg] = useState(true);
    const navigate = useNavigate(); // Obtener la función navigate de React Router DOM
    console.log(id)//user
    const handleClick = () => {
        // Navegar a VisualizarCurso y pasar datos a través del estado de la ubicación
        navigate('/visualizarCurso', {
            state: {
                id:id,//user
                nombreCurso:nombreCurso
            }
        });
    };

    return (
        <div className='asesoria' onClick={handleClick}>
            <div className={fijar ? 'fijar' : ""}>
                <div className='centrar-loader'>
                    <img onLoad={() => setImg(false)} src={!img ? portada : img} />
                    {cargando && (
                        <div className='loader-img'>
                            <Blocks
                                height="80"
                                width="80"
                                color="green"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                visible={true}
                            />
                        </div>
                    )}
                </div>
            </div>
            <h6 className='bold'>{nombreCurso}</h6>
            <h6 className='regular'>{nombre}</h6>
        </div>
    );
};

export default Asesoria;
