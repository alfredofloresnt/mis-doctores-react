import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Footer = (props) => {
    const { titulo, nombre } = props
    const [ doctores,  setDoctores] = useState([{name: "Prueba"}])
    const getDoctors = () => {
        console.log("test")
    }
    
    return(
        <div className="footer container-fluid">
            <h3>Este es el footer</h3>
        </div>
    )
}

export default Footer