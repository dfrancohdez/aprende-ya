import React from 'react'
import portada from '../../assets/img/principal/Rectangle 30.png'
import './_asesoria.scss'
export const Asesoria=()=>{
    return(
        <div className='asesoria'>
            <img src={portada}/>
            <h6 className='bold'>Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL</h6>
            <h6 className='regular'>Juan Pablo De la torre Valdez</h6>
            <div className='rate'>
                <div className='calif'>
                    5.0
                </div>
                <div className='estrellas'>

                </div>
            </div>
            <h6>
                100 MX$
            </h6>
        </div>
    )
}