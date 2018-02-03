import React from 'react';

export const SubmitButton = (props) => (
    <a
        style={Style.container}
        className="btn waves-effect waves-light"
        onClick={(e) => props.handleFormSubmit(e)}
    >
        {props.title}
    </a>
)

const Style = {
    container: {
        width: '30%',
        marginLeft: '35%',
        marginRight: '35%',
        marginTop: '20px',
        backgroundColor: '#d2f641',
        color: 'black',
    }
}