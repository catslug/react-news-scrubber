import React from 'react';
import {SmallButton} from './SmallButton'

export const ResultItem = (props) => (
    <div style={Style.container}>
        <p style={Style.title}>{props.title}</p>
        <SmallButton
            iconName={props.iconName}
            title={props.buttonTitle}
            style={Style.button}
        />
    </div>
)

const Style = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%',
        backgroundColor: '#dadada',
        borderRadius: '8px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '10px',
        paddingBottom: '10px'
    },
    title: {
        flex: 5,
        fontSize: '16px'
    },
    button: {
        flex: 1
    }
}