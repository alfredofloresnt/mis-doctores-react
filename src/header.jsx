import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Boton from './button'

const Header = (props) => {
    const { titulo, nombre } = props
    const [ doctores,  setDoctores] = useState([{name: "Header"}])
    const getDoctors = () => {
        console.log("test")
    }
    
    return(
        <div className="header row">
            <div className="col-8">
                <h3>Mis Doctores </h3>
            </div>
            <div className="col" >
               <Boton nombre ="Agregar doctor" ruta="/agrega"/>     
            </div>
            <div className="col" ruta = "/contacto">
                <Boton nombre = "Contacto"/>
            </div>
            <div className="col" ruta = "login">
                <Boton nombre = "Log In"/>
            </div>
        </div>
    )
}

export default Header