import React, { useState } from 'react'
import portada from '../../assets/img/portada.jpg'
//import portada from '../../assets/img/principal/Rectangle 30.png'

import './_asesoria.scss'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blocks } from 'react-loader-spinner'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const Asesoria = ({ nombreCurso, nombre, precio, img, fijar, type,eliminar,value }) => {
    const [cargando, setImg] = useState(true);
    return (

        <div className={'asesoriaV2 ' + type}>

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
            <div className={fijar ? 'fijar' : ""}>
                <div className='centrar-loader'>
                    <img onLoad={() => setImg(false)} src={!img ? portada : img} />
                    {cargando && <div className='loader-img'><Blocks
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
            <div className='container-info-asesoaria'>
                <h6 className='bold'>{nombreCurso}</h6>
                <h6 className='regular'>{nombre}</h6>
                <div className='rate'>
                    <div className='calif'>
                        <h5 style={{fontWeight:"300"}}>{value?value?.toFixed(1):"0.0"}</h5>
                    </div>
                    <div className='estrellas'>
                        <Rating
                            readOnly
                            name="size-medium"
                            value={value?.toFixed(1)}
                            precision={.5}
                            emptyIcon={<StarIcon style={{ color: '#ddd' }} />}
                        />
                    </div>
                </div>
                <h6>
                    {precio===""?"":precio+ "MX"}
                </h6>
            </div>
            {type&&eliminar&&<h5 onClick={()=>eliminar()}className='elminar-asesoria'>Eliminar</h5>}
        </div>
    )
}
export default Asesoria