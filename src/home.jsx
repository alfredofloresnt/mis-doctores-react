import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { getDoctorsList, getSearchDoctor } from './api.js'
import { useHistory } from "react-router-dom";
import Buscador from './componentes/buscadors'
const Home = (props) => {
    let history = useHistory()
    const [doctores, setDoctores] = useState([])
    const [selectedDoctor, setSelectedDoctor] = useState("")
    const [ activeTab, setActiveTab] = useState(1)

    const onChangeSearch = (data) => {
        setSelectedDoctor(data)
        getDoctorsList("?name=" + data).then(res => res.json()).then(res => setDoctores(res.doctors))
    }

    const onChangeSearchHospital = (data) => {
        console.log(data)
        getDoctorsList("?name=" + data).then(res => res.json()).then(res => setDoctores(res.doctors))
    }

    const onSearch = () => {
        if (activeTab == 1) {
            console.log(selectedDoctor)
            getSearchDoctor("/doctor?name="+selectedDoctor).then(res => res.json()).then(res =>  history.push('/busqueda', res))
        }
    }

    useEffect(() => {
        getDoctorsList("?name=").then(res => res.json()).then(res => setDoctores(res.doctors))
    }, [])

    let buscador;
    if (activeTab == 1) {
        buscador = <Buscador onChagangeSearch={onChangeSearch} doctores={doctores} onSearch={onSearch} placeholder="Buscar doctor"/>
    } else if (activeTab == 2){
        buscador = <Buscador onChagangeSearch={onChangeSearchHospital} doctores={doctores} onSearch={onSearch} placeholder="Buscar hospital"/>
    } else {
        buscador = <Buscador onChagangeSearch={onChangeSearchHospital} doctores={doctores} onSearch={onSearch} placeholder="Buscar especialidad"/>
    }

    return (
        <div className="home container">

            <div className="row">
                <div className="col-xs-12">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices mi eu velit aliquam molestie. In at purus quis lacus interdum malesuada. Maecenas porta laoreet pulvinar. Phasellus viverra ultricies commodo. Cras molestie dui a gravida auctor. Integer molestie, enim quis lacinia vehicula, felis libero malesuada leo, ut bibendum sem dui vitae leo. Sed ultricies neque sed rutrum consectetur. Proin sit amet mi eleifend, eleifend dui scelerisque, pharetra felis. Duis sagittis turpis vitae eros efficitur, sed pharetra velit ultrices. In et felis volutpat, viverra felis a, faucibus lectus.
                        Vestibulum at malesuada diam. Integer pretium interdum justo, id luctus justo aliquet eu. Nullam blandit bibendum ornare. Nunc dignissim, dolor quis lacinia hendrerit, leo purus volutpat massa, id condimentum libero velit sed nunc. Proin faucibus lobortis erat quis ultrices. Aliquam gravida, dolor sed faucibus mattis, nisi magna gravida lectus, a consectetur erat ipsum at metus. Curabitur et urna eu ligula feugiat pellentesque. Vestibulum posuere nec augue a pharetra.
                    </p>
                </div>
            </div>
            <div className="row">
                <ul class="nav nav-tabs">
                    <li class="nav-item" onClick={()=>{setActiveTab(1)}}>
                        <a class={"nav-link " + (activeTab == 1 ? 'active' : '')}>Buscar por doctor</a>
                    </li>
                    <li class="nav-item" onClick={()=>{setActiveTab(2)}}>
                        <a class={"nav-link " + (activeTab == 2 ? 'active' : '')} >Buscar por hospital</a>
                    </li>
                    <li class="nav-item" onClick={()=>{setActiveTab(3)}}>
                        <a class={"nav-link " + (activeTab == 3 ? 'active' : '')}>Buscar por especialidad</a>
                    </li>
                </ul>
            </div>
            { buscador }
            

        </div>
    )
}

export default Home