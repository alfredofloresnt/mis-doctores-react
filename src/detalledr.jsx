import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { getDoctorProfile } from './api';
import { useParams } from 'react-router-dom';
import profileImage from './img/profile.png';
import addCommentImage from './img/addButton.png';
import iconOff from './img/iconOff.png';
import iconActive from './img/iconActive.png'
import Rating from 'react-rating';
import { postDoctorComment } from './api'

const Detalle = (props) => {
    const { titulo, nombre } = props;
    const [doctor, setDoctor] = useState({ info: [], comments: [] });
    const params = useParams();
    const [show, setShow] = useState(false);
    const [rate, setRate] = useState(0);
    const [name, setName] = useState('Anonimo');
    const [typedComment, setTypedComment] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const idDoctor = params.idDoctor;

    const handleSave = () => {
        postDoctorComment({
            comment: {
                name: name,
                score: rate,
                comment: typedComment,
                idDoctor: idDoctor
            }
        }).then(() => {
            getDoctorProfile("?idDoctor=" + idDoctor).then(res => res.json()).then(res => setDoctor(res.doctor))
        });
        handleClose();

    }

    useEffect(() => {
        console.log(idDoctor)
        getDoctorProfile("?idDoctor=" + idDoctor).then(res => res.json()).then(res => setDoctor(res.doctor))
    }, [])

    const doctorInfo = doctor.info;
    const comments = doctor.comments.map(comment => {
        return (
            <div className="col-lg-2 card" style={{ padding: 30, margin: 20 }}>
                <p><strong>{comment.name}</strong></p>
                <p>{comment.comment}</p>
                <span>Calificación: {comment.score} / 5</span>
            </div>
        )
    });

    return (
        <div className="profile">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-lg-12" style={{ textAlign: "center", width: 550, borderRadius: 35 }} className="profile-info">
                    <img src={profileImage} alt="" width={150} />
                    <h2>{doctorInfo.firstname} {doctorInfo.lastname}</h2>
                    <h2>Calificacion: {doctorInfo.average}</h2>
                    <h4>{doctorInfo.specialty}</h4>
                    <h4>{doctorInfo.hospital}</h4>
                </div>
            </div>
            <div>
                <div style={{ textAlign: 'center', margin: 30, cursor: 'pointer' }}>
                    <img src={addCommentImage} width={100} onClick={handleShow} />
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Agregar calificacion</Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <input class="form-control" type="text" placeholder="Nombre (Si lo dejas vacio tu nombre sera Anonimo)" onChange={(a) => { setName(a.target.value) }} />
                        <Rating
                            emptySymbol={<img src={iconOff} width={50} />}
                            fullSymbol={<img src={iconActive} width={50} />}
                            initialRating={rate}
                            onChange={val => { setRate(val) }}
                        />
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comentarios" onChange={(a) => { setTypedComment(a.target.value) }}></textarea>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
            <div>
                <div className="row">
                    {comments}
                </div>

            </div>
        </div>
    )
}

export default Detalle