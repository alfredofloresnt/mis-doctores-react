import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import IdyNombre from "./idyNombre"

const Detalle = (props) => {
    const { titulo, nombre } = props
    const [ doctores,  setDoctores] = useState([{name: "Prueba"}])
    const getDoctors = () => {
        console.log("test")
    }
    
    return(
        <div className="container-fluid">
            <div className = "row">
                <div className = "col-3">

                </div>
                <div className = "col-3">
                    <IdyNombre titulo= "Nombre del Doctor" nombre ="Juan Cabello Valles"/>
                    <IdyNombre titulo= "Especialidad" nombre ="Cirjuano plastico"/>
                    <IdyNombre titulo= "Hospital" nombre ="San Jose, Monterrey, N.L"/>
                </div>
                <div className = "col-3">
                    <IdyNombre titulo= "Calificacion" nombre ="X/X"/>
                    <IdyNombre titulo= "Telefono" nombre ="(000)000-00-00"/>
                </div>
                <div className = "col-3">

                </div>

            </div>
            <br></br>
            <br></br>
            <div className = "row">
                <div className = "col-3"></div>
                <div className = "col-6">
                    <h4>Agrega un comentario:</h4>
                    <div className = "cartacomentario">
                        <h5>Tu nombre:</h5>
                        <input></input>
                        <h5>Calificacion:</h5>
                        <input></input>
                        <h5>Comentarios:</h5>
                        <input></input>
                    </div>
                </div>
                <div className = "col-3"></div>
            </div>
        </div>
    )
}

export default Detalle