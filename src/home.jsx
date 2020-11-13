import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { getDoctorsList } from './api.js'
import Buscador from './componentes/buscadors'
const Home = (props) => {
    const { titulo, nombre } = props
    const [doctores, setDoctores] = useState([])

    const onChagangeSearch = (data) => {
        console.log(data)
        getDoctorsList("?name=" + data).then(res => res.json()).then(res => setDoctores(res.doctors))
    }

    useEffect(() => {
        getDoctorsList("?name=").then(res => res.json()).then(res => setDoctores(res.doctors))
    }, [])

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
                    <li class="nav-item">
                        <a class="nav-link active">Buscar por doctor</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Buscar por hospital</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Buscar por especialidad</a>
                    </li>
                </ul>
            </div>
            <Buscador onChagangeSearch={onChagangeSearch} doctores={doctores} placeholder="Buscar doctor"/>


        </div>
    )
}

export default Home