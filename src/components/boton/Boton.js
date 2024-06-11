import React from 'react'
import "./_boton.scss"
import { ArrowUpCircleFill } from 'react-bootstrap-icons'
import { useNavigate } from "react-router-dom";

export const Boton=(props)=>{
    const navigate = useNavigate();
    const handleButton=()=>{
        navigate(props.page,{ replace: true })
    }
    return(
        <button type={props.type}className={props.style==="bold"?"Boton bold":"Boton bold"} onClick={handleButton}>
            {props.text}
            <ArrowUpCircleFill size={24}/>
            
        </button>
    )
}
