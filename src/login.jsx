import React, { useState } from 'react'
import { Button, Form, Alert } from 'react-bootstrap';
import { login } from './api';
import { useHistory } from "react-router-dom";

const Login = (props) => {
    let history = useHistory()
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);

    const onLogin = () => {
        login({
            username: username,
            password: password
        }).then(res => res.json()).then(res => {
            if (res.admin) {
                props.login(res.admin)
                history.push("/");
            } else {
                // Mostrar modal de error
                
            }
        }).catch(error => {
            console.log(error)
            setShow(true)
        })
    }

    return (
        <div className="container-fluid login">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 500 }}>
                    {show? 
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Usuario o contraseña incorrecto</Alert.Heading>
                    </Alert>
                    : null}
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control placeholder="admin" onChange={(a) => { setUsername(a.target.value) }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="holamundo" onChange={(a) => { setPassword(a.target.value) }} />
                        </Form.Group>
                        <Button variant="primary" onClick={onLogin}>
                            Ingresar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login