import React, { useState } from 'react'
import portada from '../../assets/img/portada.jpg'
//import portada from '../../assets/img/principal/Rectangle 30.png'

import './_asesoria.scss'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blocks } from 'react-loader-spinner'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const Asesoria = ({ nombreCurso, nombre, precio, img,fijar }) => {
    const [cargando,setImg]=useState(true);
    return (
        
        <div className='asesoria'>
           
            {/* <LazyLoadImage

                src={img}
                
                placeholderSrc={portada}
                placeholder={<Blocks
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    visible={true}
                />}
            /> */}
            <div className={fijar?'fijar':""}>
                <div className='centrar-loader'>
                    <img onLoad={()=>setImg(false)} src={!img ? portada:img}/>
                    {cargando&&<div className='loader-img'><Blocks
                        height="80"
                        width="80"
                        color="green"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        visible={true}
                    /></div>}
                </div>
            </div>
            <h6 className='bold'>{nombreCurso}</h6>
            <h6 className='regular'>{nombre}</h6>
            <div className='rate'>
                <div className='calif'>
                    5.0
                </div>
                <div className='estrellas'>
                    <Rating 
                    name="size-medium" 
                    defaultValue={2}
                    
                    emptyIcon={<StarIcon style={{ color: '#ddd' }} />}
                    />
                </div>
            </div>
            <h6>
                {precio} MX$
            </h6>
        </div>
    )
}
export default Asesoria