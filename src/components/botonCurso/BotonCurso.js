import React from 'react'
import "./_botonCurso.scss"
import { useNavigate } from "react-router-dom";

export const BotonCurso=(props)=>{
    const navigate = useNavigate();
    const handleButton=()=>{
        navigate(props.page,{ replace: true })
    }
    return(
        <button type={props.type}className={props.style==="bold"?"Boton bold "+props.block:"Boton bold "+props.block} onClick={handleButton}>
            {props.text}
            
        </button>
    )
}
