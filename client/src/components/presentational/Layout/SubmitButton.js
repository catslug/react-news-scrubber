import React from 'react';

export const SubmitButton = (props) => (
    <button style={Style.container} className="btn waves-effect waves-light" type="submit" name="action">{props.title}</button>
)

const Style = {
    container: {
        width: '30%',
        marginLeft: '35%',
        marginRight: '35%',
        marginTop: '20px',
    }
}