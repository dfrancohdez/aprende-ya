import React, { useState } from 'react'
import portada from '../../assets/img/portada.jpg'

import './_cuadroPortadaCurso.scss'

import { Blocks } from 'react-loader-spinner'

const AsesoriaCurso = ({ precio, img,fijar }) => {
    const [cargando,setImg]=useState(true);
    return (
        
        <div className='cuadro-portada-curso'>
           
            <div className={fijar?'fijar2':""}>
                <div className='centrar-loader'>
                    <img onLoad={()=>setImg(false)} src={!img ? portada:img}/>
                    {cargando&&<div className='loader-img2'><Blocks
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
            
        </div>
    )
}
export default AsesoriaCurso