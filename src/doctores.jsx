import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { getSearchDoctor, deleteDoctor } from './api.js'

const Doctores = (props) => {
    const [doctors, setDoctors] = useState([])
    const onDeleteDoctor = (idDoctor) => {
        deleteDoctor({
            idDoctor: idDoctor
        }).then(()=>{
            let items = doctors.filter(function(item) { 
                return item.idDoctor !== idDoctor; 
              });
            setDoctors(items)
        })
    }
    useEffect(() => {
        if (props.location.state && props.location.state.result) {
            setDoctors(props.location.state.result)
        } else {
            getSearchDoctor("/doctor?name=").then(res => res.json()).then(res => setDoctors(res.result))
        }
    }, [])

    let doctorsList = doctors.map((doctor) => {
        return (
            <tr>
                {props.isLogged ? <td><button type="button" class="btn btn-outline-primary" onClick={()=>{onDeleteDoctor(doctor.idDoctor)}}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg></button></td> : null}
                <td>{doctor.firstName}</td>
                <td>{doctor.lastName}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.hospital}</td>
                <td>{doctor.average}</td>
            </tr>
        )
    })
    return (
        <div className="container-fluid">
            <h1>Lista de Doctores</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {props.isLogged ? <th>Eliminar</th> : null}
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Especialidad</th>
                        <th>Hospital</th>
                        <th>Calificacion</th>
                    </tr>
                </thead>
                <tbody>
                    {doctorsList}
                </tbody>
            </Table>
        </div>
    )
}

export default withRouter(Doctores)