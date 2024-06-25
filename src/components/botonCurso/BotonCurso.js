import React from 'react'
import "./_botonCurso.scss"
import { useNavigate } from "react-router-dom";

export const BotonCurso=(props)=>{
    const navigate = useNavigate();
    const handleButton=()=>{
        navigate(props.page,{ replace: true })
    }
    return(
        <button type={props.type}className={props.style==="boldCu"?"BotonCu boldCu "+props.block:"BotonCu boldCu "+props.block} onClick={props.handleButton}>
            {props.text}
            
        </button>
    )
}
