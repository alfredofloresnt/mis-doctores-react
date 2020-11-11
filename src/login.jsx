import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Login = (props) => {
    const { titulo, nombre } = props
    const [ doctores,  setDoctores] = useState([{name: "Prueba"}])
    const getDoctors = () => {
        console.log("test")
    }
    
    return(
        <div className="container-fluid">
            <h3>Log In</h3>
        </div>
    )
}

export default Login