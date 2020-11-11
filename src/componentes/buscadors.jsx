import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Buscador = (props) => {
    const { titulo, nombre } = props
    const [ doctores,  setDoctores] = useState([{name: "Prueba"}])
    const getDoctors = () => {
        console.log("test")
    }
    
    return(
        <div className="row">
                <div className="col-2"></div>
                <div className="col-6" ><input className="form-control form-control-lg"></input></div>
                <div className="col-2"><Button variant = "outline-primary">Buscar</Button></div>
                <div className="col-2"></div>
            </div>
    )
}

export default Buscador