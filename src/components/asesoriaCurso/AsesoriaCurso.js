import React, { useState } from 'react'
import portada from '../../assets/img/portada.jpg'

import './_asesoriaCurso.scss'

import { Blocks } from 'react-loader-spinner'

const AsesoriaCurso = ({ precio, img,fijar }) => {
    const [cargando,setImg]=useState(true);
    return (
        
        <div className='asesoria'>
           
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
            <h6 className='bold'>{precio} MXN$</h6>
        
        </div>
    )
}
export default AsesoriaCurso