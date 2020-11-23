import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { login } from './api';
import { useHistory } from "react-router-dom";

const Login = (props) => {
    let history = useHistory()
    const [ username, setUsername] = useState(); 
    const [ password, setPassword] = useState();

    const onLogin = () => {
        login({
            username: username,
            password: password
        }).then(res=> res.json()).then(res => {
            if (res.admin){
                props.login(res.admin)
                history.push("/");
            } else {
                // Mostrar modal de error
            }
        })
    }

    return (
        <div className="container-fluid">
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control placeholder="Enter email" onChange={(a)=>{setUsername(a.target.value)}}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(a)=>{setPassword(a.target.value)}}/>
                    </Form.Group>
                    <Button variant="primary" onClick={onLogin}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login