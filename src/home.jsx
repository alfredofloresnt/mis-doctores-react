import React, { useEffect, useState } from 'react'
import { Button, Carousel } from 'react-bootstrap';
import { getDoctorsList, getSearchDoctor } from './api.js'
import { getHospitalsList, getSearchHospital } from './api.js'
import { getSpecialtiesList, getSearchSpecialty } from './api.js'
import { useHistory } from "react-router-dom";
import Buscador from './componentes/buscadors';
import Dashboard from './componentes/Dashboard';

const Home = (props) => {
    let history = useHistory()
    const [doctores, setDoctores] = useState([])
    const [hospitals, setHospitals] = useState([])
    const [specialties, setSpecialties] = useState([])
    const [selectedDoctor, setSelectedDoctor] = useState("")
    const [selectedHospital, setSelectedHospital] = useState("")
    const [selectedSpecialty, setSelectedSpecialty] = useState("")
    const [activeTab, setActiveTab] = useState(1)
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const onChangeSearch = (data) => {
        setSelectedDoctor(data)
        getDoctorsList("?name=" + data).then(res => res.json()).then(res => setDoctores(res.doctors))
    }

    const onChangeSearchHospital = (data) => {
        console.log(data)
        setSelectedHospital(data)
        getHospitalsList("?name=" + data).then(res => res.json()).then(res => setHospitals(res.hospitals))
    }

    const onChangeSearchSpecialty = (data) => {
        console.log(data)
        setSelectedSpecialty(data)
        getSpecialtiesList("?name=" + data).then(res => res.json()).then(res => setSpecialties(res.specialties))
    }

    const onSearch = () => {
        if (activeTab == 1) {
            console.log(selectedDoctor)
            getSearchDoctor("/doctor?name=" + selectedDoctor).then(res => res.json()).then(res => history.push('/busqueda', res))
        } else if (activeTab == 2) {
            console.log(selectedHospital)
            getSearchHospital("/hospital?name=" + selectedHospital).then(res => res.json()).then(res => history.push('/busqueda', res))
        } else {
            console.log(selectedSpecialty)
            getSearchSpecialty("/specialty?name=" + selectedSpecialty).then(res => res.json()).then(res => history.push('/busqueda', res))
        }
    }

    let buscador;
    if (activeTab == 1) {
        buscador = <Buscador onChangeSearch={onChangeSearch} data={doctores} activeTab={activeTab} placeholder="Buscar doctor" size={"large"} />
    } else if (activeTab == 2) {
        buscador = <Buscador onChangeSearch={onChangeSearchHospital} data={hospitals} activeTab={activeTab} placeholder="Buscar hospital" size={"large"} />
    } else {
        buscador = <Buscador onChangeSearch={onChangeSearchSpecialty} data={specialties} activeTab={activeTab} placeholder="Buscar especialidad" size={"large"} />
    }

    return (
        <div className="home container">
            {props.isLogged ?
                <div style={{ paddingBottom: 20 }}>
                    <Dashboard token={props.token} />
                </div>
                : null}
            <div className="row">
                <ul class="nav nav-tabs">
                    <li class="nav-item" onClick={() => { setActiveTab(1) }}>
                        <a class={"nav-link " + (activeTab == 1 ? 'active' : '')}>Buscar por doctor</a>
                    </li>
                    <li class="nav-item" onClick={() => { setActiveTab(2) }}>
                        <a class={"nav-link " + (activeTab == 2 ? 'active' : '')} >Buscar por hospital</a>
                    </li>
                    <li class="nav-item" onClick={() => { setActiveTab(3) }}>
                        <a class={"nav-link " + (activeTab == 3 ? 'active' : '')}>Buscar por especialidad</a>
                    </li>
                </ul>
            </div>
            <div className="row" style={{ paddingTop: 60, paddingBottom: 60 }}>
                <div className="col-md-10 col-xs-12">
                    {buscador}
                </div>
                <div className="col-md-2 col-xs-12">
                    <Button className="btn-lg" style={{ width: "100%" }} onClick={onSearch}>Buscar {' '}
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                        </svg>
                    </Button>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <h2>¿Que es Mis Doctores?</h2>
                    <h4>
                    Mis doctores es una aplicación web cuya finalidad es que tu encuentres a tu futuro médico de confianza. Con mis doctores podrás buscar y calificar doctores, de tal manera que encuentres el doctor ideal para ti. También puedes agregar doctores que no estén registrados para que otros los conozcan.
                    </h4>
                </div>
            </div>



        </div>
    )
}

export default Home