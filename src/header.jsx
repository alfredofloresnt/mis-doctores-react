import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Boton from './button'

const Header = (props) => {
    const { titulo, nombre } = props
    const [doctores, setDoctores] = useState([{ name: "Header" }])
    const getDoctors = () => {
        console.log("test")
    }

    return (
        <div>
            <Navbar className="bg-light" expand="lg">
                <Navbar.Brand href="#home">Mis Doctores</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
                        <Nav.Link><Link to={'/busqueda'}>Lista de doctores</Link></Nav.Link>
                        <Nav.Link><Link to={'/agregar-doctor'}>Agregar Doctor</Link></Nav.Link>
                        <Nav.Link><Link to={'/contacto'}>Contacto</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header