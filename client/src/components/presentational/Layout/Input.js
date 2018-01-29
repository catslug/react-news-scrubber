import React from 'react';

export const Input = (props) => (
    <div className={props.className} style={Style.container}>
        <input placeholder={props.placeholder} id={props.inputName} type={props.type} className="validate" />
        <label htmlFor={props.label}>{props.title}</label>
    </div>
)

const Style = {
    container: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '5%'
    }
}