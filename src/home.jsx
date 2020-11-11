import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
//import Buscador from '/componentes/buscador';

const Home = (props) => {
    const { titulo, nombre } = props
    const [ doctores,  setDoctores] = useState([{name: "Prueba"}])
    const getDoctors = () => {
        console.log("test")
    }
    
    return(
        <div className="home">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-2"><h1> {titulo}</h1></div>
                <div className="col-8"></div>
            </div>
             


            <div className="row">
            <div className="col-2"></div>
            <div className="col-8"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices mi eu velit aliquam molestie. In at purus quis lacus interdum malesuada. Maecenas porta laoreet pulvinar. Phasellus viverra ultricies commodo. Cras molestie dui a gravida auctor. Integer molestie, enim quis lacinia vehicula, felis libero malesuada leo, ut bibendum sem dui vitae leo. Sed ultricies neque sed rutrum consectetur. Proin sit amet mi eleifend, eleifend dui scelerisque, pharetra felis. Duis sagittis turpis vitae eros efficitur, sed pharetra velit ultrices. In et felis volutpat, viverra felis a, faucibus lectus.

Vestibulum at malesuada diam. Integer pretium interdum justo, id luctus justo aliquet eu. Nullam blandit bibendum ornare. Nunc dignissim, dolor quis lacinia hendrerit, leo purus volutpat massa, id condimentum libero velit sed nunc. Proin faucibus lobortis erat quis ultrices. Aliquam gravida, dolor sed faucibus mattis, nisi magna gravida lectus, a consectetur erat ipsum at metus. Curabitur et urna eu ligula feugiat pellentesque. Vestibulum posuere nec augue a pharetra.</p>
        
            </div>
            <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-1"><Button >Filtro1</Button></div>
                <div className="col-1"><Button >Filtro2</Button></div>
                <div className="col-1"><Button >Filtro3</Button></div>
                <div className="col-7"></div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-6" ><input className="form-control form-control-lg"></input></div>
                <div className="col-2"><Button variant = "outline-primary">Buscar</Button></div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
            </div>
    )
}

export default Home