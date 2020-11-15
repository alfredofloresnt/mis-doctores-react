import React, { useState, Fragment } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import { Button, Form } from 'react-bootstrap';

const Buscador = (props) => {

    const getDoctors = () => {
        console.log("test")
    }
    console.log(props.data)

    const valueByTab = (a) => {
        if (props.activeTab == 1) {
            if (a[0] && a[0].firstName) {
                props.onChangeSearch(a[0].firstName + " " + a[0].lastName)
            }
        } else {
            props.onChangeSearch(a[0].name)
        }
    }

    const labelByTab = (option) => {
        if (props.activeTab == 1) {
            return (`${option.firstName} ${option.lastName}`)
        } else {
            return(option.name)
        }
    }

    return (
            <div className="col-12" style={{padding: 0}}>
                    <Typeahead
                        onInputChange={props.onChangeSearch}
                        onChange={ valueByTab }
                        id="basic-typeahead-single"
                        labelKey={ labelByTab }
                        options={props.data}
                        placeholder={props.placeholder}
                        size={props.size}
                    />
            </div>
            

    )
}

export default Buscador