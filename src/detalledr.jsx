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
                    <IdyNombre titulo= "Nombre del Doctor" nombre ="Oscar Hernandez"/>
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
            
            <div className = "row">
                <div className = "col-3"></div>
                <div className = "col-6"></div>
                <div className = "col-3"></div>
            </div>
        </div>
    )
}

export default Detalle