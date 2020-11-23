import React, {useEffect, useState} from 'react';
import {getOverview} from '../api';

const Dashboard = (props) => {
    const [dashboard, setDashboard] = useState({})
    useEffect(() => {
        getOverview(props.token).then(res => res.json()).then(res => setDashboard(res.overview))
    },[])
    console.log(dashboard)

    return (
        <div className="row">
            <div className="col-lg card" style={{margin: 10, borderRadius: 30}}>
                <div className="card-body">
                    <h3 className="card-title">{dashboard.doctors}</h3>
                    <p>Doctores</p>
                </div>
            </div>

            <div className="col-lg card" style={{margin: 10, borderRadius: 30}}>
            <div className="card-body">
                    <h3 className="card-title">{dashboard.hospitals}</h3>
                    <p>Hospitales</p>
                </div>
            </div>

            <div className="col-lg card" style={{margin: 10, borderRadius: 30}}>
            <div className="card-body">
                    <h3 className="card-title">{dashboard.comments}</h3>
                    <p>Comentarios</p>
                </div>
            </div>

            <div className="col-lg card" style={{margin: 10, borderRadius: 30}}>
            <div className="card-body">
                    <h3 className="card-title">{dashboard.avgScore}</h3>
                    <p>Promedio total de calificaciones</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;