import React from 'react'
import "./_boton.scss"
import { ArrowUpCircleFill } from 'react-bootstrap-icons'
export const Boton=(props)=>{
    return(
        <div className={props.style==="bold"?"Boton bold":"Boton"}>
            {props.text}
            <ArrowUpCircleFill size={24}/>
        </div>
    )
}
