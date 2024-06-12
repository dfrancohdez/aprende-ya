import React from 'react'
import portada from '../../assets/img/principal/Rectangle 30.png'
import './_asesoria.scss'
export const Asesoria=({nombreCurso,nombre,precio})=>{
    return(
        <div className='asesoria'>
            <img src={portada}/>
            <h6 className='bold'>{nombreCurso}</h6>
            <h6 className='regular'>{nombre}</h6>
            <div className='rate'>
                <div className='calif'>
                    5.0
                </div>
                <div className='estrellas'>

                </div>
            </div>
            <h6>
                {precio} MX$
            </h6>
        </div>
    )
}