import React, { useState } from "react"
import insert from "../../assets/img/inserteImg.png"
import check from "../../assets/img/check.png"
import { ArrowCircleRight } from "@mui/icons-material"
export const Material = ({props,dato,indexi,index}) => {
    const [button,setButton]=useState(false)
    return (
        <div>
            <label id={props.id}><h6>{dato.name === "" ? button? "Insertar material":"Insertar video" : dato.name}</h6></label>
            {!button&&<input id={`${props.i}+${indexi}+${index}+video`} placeholder={"Link"} autoComplete="off" aria-autocomplete="none" name={index + "-video-" + indexi + "-clase-" + props.nameSection} onChange={props.onFormUpdate} />}
            {button&&<div><label for={`${props.i}+${indexi}+${index}`}>
                <img className='img-insertar' src={dato.name === "" ? insert : check}></img>
            </label>
            <input onChange={props.onFormUpdate} type='file' id={`${props.i}+${indexi}+${index}`} style={{ display: "none" }} name={index + "-archivo-" + indexi + "-clase-" + props.nameSection} />
            </div>}
            <h6 onClick={()=>setButton(prev=>prev?false:true)} style={{cursor:"pointer",display:"flex",alignItems:"center",padding:"20px"}}>{button?"Video":"Material"}<ArrowCircleRight/></h6>
        </div>
    )
}