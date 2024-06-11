import React from 'react'
import "./_simpleButton.scss"
import { ArrowUpCircleFill } from 'react-bootstrap-icons'
export const SimpleButton=(props)=>{
    return(
        <div className={props.style==="bold"?"Boton bold":"Boton"}>
            {props.text}
        </div>
    )
}
