import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const IdyNombre = (props) => {
    const { titulo, nombre } = props
    
    return(
        <div className=" container-fluid">
            <h5>{titulo}</h5>
            <h3>{nombre}</h3>
        </div>
    )
}

export default IdyNombre