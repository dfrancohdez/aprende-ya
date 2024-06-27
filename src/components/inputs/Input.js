import { React, useState } from 'react'
import "./_input.scss"
import mas from "../../assets/img/mas.svg"
import menos from "../../assets/img/menos.svg"
import insert from "../../assets/img/inserteImg.png"
import check from "../../assets/img/check.png"
export const Input = (props) => {

    return (
        

            <div className={props.hover}>
                <div className='input'>
                {(props.label !== "" && props.hover=== "input-hover" || props.class === "seccion") ? <div className='line'></div> : <div></div>}
                {props.typelabel !== "mas" ? props.class !== "seccion" && <label id={props.id}><h6>{props.label}</h6></label> : props.class !== "seccion" && <label id={props.id}><h6>{props.label}</h6><img onClick={props.handleMas} src={mas}></img></label>}


                {props.typelabel !== "mas" ? props.class === "seccion" && <label id={props.id}><h6>{props.label === "" ? "Nombre de la sección" : "Nombre de la sección " + props.label}</h6></label> : props.class === "seccion" && <label id={props.id}><h6>{props.label === "" ? "Nombre de la sección" : "Nombre de la sección: " + props.label}</h6><img onClick={props.handleMas} src={mas}></img></label>}


                {props.class === "textarea" && <textarea rows="10" cols="50" placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onFormUpdate}></textarea>}




                {props.class === "input" && <input id={props.id} placeholder={props.placeholder} autoComplete="off" aria-autocomplete="none" name={props.name} type={props.type} value={props.value} onChange={props.onFormUpdate} />}




                {props.class === "elemento" && <div className='elemento'><input id={props.id} placeholder={props.placeholder} name={props.name} type={props.type} value={props.value} onChange={props.onFormUpdate} /><img onClick={props.handleMenos} src={menos}></img></div>}
                {props.class === "seccion" &&
                    <div>
                        <div className='elemento'><input onChange={props.onFormUpdate} name={props.nameSection} value={props.value} id={props.id} placeholder={props.placeholder} /><img onClick={props.handleMenos} src={menos}></img></div>
                        <div className='nombre-clase-input'>

                            {props.clases.map((dato, indexi) => {
                                return (
                                    <div>
                                        <label id={props.id}><h6>{dato.value === "" ? "Nombre de la clase" : "Nombre de la clase: " + dato.value}</h6><img onClick={props.handleMasClase} src={mas}></img></label>
                                        <div className='elemento'><input value={dato.value} onChange={props.onFormUpdate} name={indexi + "-clase-" + props.nameSection} id={props.id} placeholder={props.placeholder} /><img onClick={() => props.handleMenosClase(props.i, indexi)} src={menos}></img></div>

                                        {dato.material.map((dato, index) => {
                                            return (

                                                <div className='insertar-img-container'>

                                                    <img className="insertar-img-botton" onClick={() => props.handleMasMaterial(props.i, indexi, index)} src={mas}></img><img className="insertar-img-botton img-blanco" onClick={() => props.handleMenosMaterial(props.i, indexi, index)} src={menos}></img>
                                                    <div className='insertar-img'>
                                                        <div className='insertar-material'>
                                                            <label id={props.id}><h6>{dato.name===""?"Insertar material":dato.name}</h6></label>
                                                            <label for={`${props.i}+${indexi}+${index}`}>
                                                            <img className='img-insertar' src={dato.name===""?insert:check}></img>
                                                            </label>
                                                            <input onChange={props.onFormUpdate} type='file' id={`${props.i}+${indexi}+${index}`} style={{display:"none"}} name={index + "-archivo-" + indexi + "-clase-" + props.nameSection}/>
                                                        </div>
                                                        <div>
                                                            <label id={props.id}><h6>Descripción</h6></label>
                                                            <textarea onChange={props.onFormUpdate} name={index + "-descripcion-" + indexi + "-clase-" + props.nameSection} rows="8" cols="50" placeholder={props.placeholder} value={dato.description}></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })}

                                    </div>
                                )
                            })}

                        </div>
                    </div>
                }
                {props.error !== "" && <p className='input-error'>{props.error}</p>}
            </div>
        </div>
    )
}