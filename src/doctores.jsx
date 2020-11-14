import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

const Doctores = (props) => {
    console.log("aaa", props.location.state.result)

    let doctorsList = props.location.state.result.map((doctor)=>{
        return(
            <tr>
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