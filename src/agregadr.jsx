import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Buscador from './componentes/buscadors';
import { createDoctor } from './api';
import { getHospitalsList, getSpecialtiesList} from './api.js'
import { useHistory } from "react-router-dom";

const AgregaDr = (props) => {
    const { titulo, nombre } = props
    const [ doctores,  setDoctores] = useState([{name: "Prueba"}])
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [specialty, setSpecialty] = useState(null);
    const [hospital, setHospital] = useState(null);
    const [specialtyList, setSpecialtyList] = useState([]);
    const [hospitalList, setHospitalList] = useState([]);
    let history = useHistory()
    const onCreateDoctor = () => {
        createDoctor({
            doctor: {
                firstname: firstName,
                lastname: lastName,
                specialty: specialty,
                hospital: hospital,
            }
        }).then(()=> history.push('/busqueda'))
    }
    
    const onChangeSearchHospital = (data) => {
        console.log(data)
        setHospital(data)
        getHospitalsList("?name=" + data).then(res => res.json()).then(res => setHospitalList(res.hospitals))
    }

    const onChangeSearchSpecialty = (data) => {
        console.log(data)
        setSpecialty(data)
        getSpecialtiesList("?name=" + data).then(res => res.json()).then(res => setSpecialtyList(res.specialties))
    }
    
    return(
        <div className="agregar-doctor container-fluid">
            <div style={{textAlign: 'center', padding: 40}}>
                <h2>Agregar Doctor</h2>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{width: 500}}>
                    <input class="form-control" type="text" placeholder="Nombre del doctor" onChange={(a)=>{setFirstName(a.target.value)}}/>
                    <input class="form-control" type="text" placeholder="Apellido del doctor" onChange={(a)=>{setLastName(a.target.value)}}/>
                    <Buscador data={specialtyList} activeTab={3} placeholder="Especialidad" onChangeSearch={onChangeSearchSpecialty}/>
                    <Buscador data={hospitalList} activeTab={2} placeholder="Hospital" onChangeSearch={onChangeSearchHospital}/>
                    <Button className="btn-lg" style={{ width: "100%" }} onClick={onCreateDoctor}>Crear Doctor</Button>
                </div>
            </div>
        </div>
    )
}

export default AgregaDr