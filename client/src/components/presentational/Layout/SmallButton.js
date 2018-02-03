import React from 'react'

export const SmallButton = (props) => (
    <a
        style={Style.container}
        data-id={props.id !== undefined ? props._id : null}
        className="waves-effect waves-light btn"
        onClick={props.saveArticleToDB !== undefined ? () => props.saveArticleToDB(props.url) : () => props.deleteSavedArticle(props.id)}
    >
        <i className="material-icons right">
            {props.iconName}
        </i>

        {props.title}
    </a>
)

const Style = {
    container: {
        backgroundColor: '#d2f641',
        color: 'black'
    }
}