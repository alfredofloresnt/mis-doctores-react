import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
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
                <Link to="/"><h3 >Mis Doctores </h3></Link>
            </div>
            <div className="col" >
                
               <Link to="/agregar_doctor">Agregar doctor</Link>     
            </div>
            <div className="col" >
                <Link to="/contacto">Contacto</Link>
                
            </div>
            <div className="col" >
                <Link to="/login">Log In</Link>
            </div>
        </div>
    )
}

export default Header