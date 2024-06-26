import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import './_reseña.scss'

const Reseña = ({ nombre, calificacion, tiempoCali, opinion, imagenRe}) => {

    return (
        <div className='reseña'>
            <div className='contenedor-cabeza'>
                <div className='izquierda'>
                    <img src={imagenRe} className='imagen'/>
                </div>
                <div className='derecha'>
                    <h3>{nombre}</h3>
                    <div>
                        <Rating 
                        name="size-medium" 
                        value={calificacion}
                        emptyIcon={<StarIcon style={{ color: '#ddd' }} />}
                        />
                        <span className='tiempo-re'> {tiempoCali} </span>
                    </div>
                    
                </div>
            </div>
            <p>{opinion}</p>
            
            
            
        </div>
    )
}
export default Reseña