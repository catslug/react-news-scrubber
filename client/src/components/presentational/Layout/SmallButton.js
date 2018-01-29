import React from 'react'

export const SmallButton = (props) => (
    <a data-id={props.href} className="waves-effect waves-light btn"><i className="material-icons right">{props.iconName}</i>{props.title}</a>
)
