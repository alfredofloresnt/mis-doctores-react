import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Boton = (props) => {
    const { titulo, nombre } = props
    const [ doctores,  setDoctores] = useState([{name: "Prueba"}])
    const getDoctors = () => {
        console.log("test")
    }
    
    return(
        <div className="home">
            <span onClick={getDoctors}>{nombre}</span>
        </div>
    )
}

export default Boton