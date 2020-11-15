import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { getSearchDoctor } from './api.js'

const Doctores = (props) => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        if (  props.location.state &&  props.location.state.result){
            setDoctors(props.location.state.result)
        } else {
            getSearchDoctor("/doctor?name=").then(res => res.json()).then(res =>  setDoctors(res.result))
        }
    }, [])

    console.log(doctors)
    let doctorsList = doctors.map((doctor)=>{
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