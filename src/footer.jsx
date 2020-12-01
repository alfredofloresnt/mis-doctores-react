import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Footer = (props) => {
    const { titulo, nombre } = props
    const [ doctores,  setDoctores] = useState([{name: "Prueba"}])
    const getDoctors = () => {
        console.log("test")
    }
    
    return(
    <div className="footer container-fluid">
        <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col-md-6 col-xs-12 col-lg-3">
            <ui className="list-unstyled">
            <li>Oscar Lopez</li>
              <li>https://github.com/OLopezE</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col-md-6 col-xs-12 col-lg-3">
            <ui className="list-unstyled">
              <li>Andres Orozco</li>
              <li>https://github.com/castorenandres</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col-md-6 col-xs-12 col-lg-3">
            <ui className="list-unstyled">
                <li>Alfredo Flores</li>

              <li >https://github.com/alfredofloresnt</li>
            </ui>
          </div>
          {/* Column4 */}
          <div className="col-md-6 col-xs-12 col-lg-3">
            <ui className="list-unstyled">
                 <li>Omar Hernandez</li>
              <li>https://github.com/Oswaldoitc</li>
            </ui>
          </div>
        </div>
      </div>
          
    </div>
    )
}

export default Footer