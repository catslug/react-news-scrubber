import React from 'react';

export const BoxTitle = (props) => (
    <div className='boxtitle' style={Style.container}>
        {props.title}
    </div>
)

const Style = {
    container: {
        width: '100%',
        textAlign: 'center',
        fontSize: '30px'
    }
}