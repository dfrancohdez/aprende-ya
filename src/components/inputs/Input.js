import { React, useState } from 'react'
import "./_input.scss"
import mas from "../../assets/img/mas.svg"
import menos from "../../assets/img/menos.svg"
import insert from "../../assets/img/inserteImg.png"
export const Input = (props) => {

    return (
        <div className='input'>
            {props.typeLabel !== "mas" ? <label id={props.id}><h6>{props.label}</h6></label> : <label id={props.id}><h6>{props.label}</h6><img onClick={props.handleMas} src={mas}></img></label>}
            {props.class === "textarea" && <textarea rows="10" cols="50" placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onFormUpdate}></textarea>}




            {props.class === "input" && <input id={props.id} placeholder={props.placeholder} autocomplete="off" aria-autocomplete="none" name={props.name} type={props.type} value={props.value} onChange={props.onFormUpdate}/>}




            {props.class === "elemento" && <div className='elemento'><input id={props.id} placeholder={props.placeholder} name={props.name} type={props.type} value={props.value} onChange={props.onFormUpdate}/><img onClick={props.handleMenos}src={menos}></img></div>}
            {props.class === "seccion" &&
                <div>
                    <div className='elemento'><input id={props.id} placeholder={props.placeholder} /><img src={menos}></img></div>
                    <div className='nombre-clase-input'>
                        <label id={props.id}><h6>Nombre de la clase</h6><img src={mas}></img></label>
                        <div className='elemento'><input id={props.id} placeholder={props.placeholder} /><img src={menos}></img></div>
                        <div className='insertar-img'>
                            <div className='insertar-material'>
                                <label id={props.id}><h6>Insertar material</h6><img src={mas}></img></label>
                                <img className='img-insertar' src={insert}></img>
                            </div>
                            <div>
                                <label id={props.id}><h6>Descripción</h6><img src={mas}></img></label>
                                <textarea name="textarea" rows="8" cols="50" placeholder={props.placeholder}></textarea>
                            </div>
                        </div>

                    </div>
                </div>
            }
        {props.error!==""&&<p className='input-error'>{props.error}</p>}
        </div>
    )
}