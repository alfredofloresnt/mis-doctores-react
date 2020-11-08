import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const footer = (props) => {
    const { titulo, nombre } = props
    const [ doctores,  setDoctores] = useState([{name: "Prueba"}])
    const getDoctors = () => {
        console.log("test")
    }
    
    return(
        <div className="home">
            <h1>{doctores[0].name} {nombre}</h1>
            <Button onClick={getDoctors}>Test</Button>
        </div>
    )
}

export default footer