import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Contacto = (props) => {
    const { titulo, nombre } = props
    const [ doctores,  setDoctores] = useState([{name: "Prueba"}])
    const getDoctors = () => {
        console.log("test")
    }
    
    return(
        <div className="contacto container-fluid">
            <h2>Contacto:</h2>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col">
                    <h4>Oscar Lopez</h4>
                    <p>Desarrollador</p>
                    <p>https://github.com/OLopezE</p>
                </div>
                <div className="col">
                    <h4>Andres Orozco</h4>
                    <p>Desarrollador</p>
                    <p>https://github.com/OLopezE</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col">
                    <h4>Alfredo Flores</h4>
                    <p>Desarrollador</p>
                    <p>https://github.com/OLopezE</p>
                </div>
                <div className="col">
                    <h4>Omar Hernandez</h4>
                    <p>Desarrollador</p>
                    <p>https://github.com/OLopezE</p>
                </div>
            </div>
        </div>
    )
}

export default Contacto