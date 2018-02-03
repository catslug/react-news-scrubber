import React from 'react';
import {SmallButton} from './SmallButton'

export const ResultItem = (props) => (
    <div style={Style.container}>
        <div>
            <a href={props.url} target='blank'><p style={Style.title}>{props.title}</p></a>
            <p style={Style.subtitle}>{props.byline}</p>
            <p style={Style.subtitle}>{props.date}</p>
        </div>
        <SmallButton
            iconName={props.iconName}
            title={props.buttonTitle}
            style={Style.button}
            url={props.url}
            saveArticleToDB={props.saveArticleToDB}
            deleteSavedArticle={props.deleteSavedArticle}
            id={props.id}
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
        backgroundColor: '#f7f5f5',
        borderRadius: '8px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '10px',
        paddingBottom: '10px'
    },
    titleContainer: {
        display: 'flex',
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: '16px',
        marginBottom: '2px',
        marginTop: '2px',
        color: '#333',
    },
    subtitle: {
        fontSize: '14px',
        marginBottom: '0px',
        marginTop: '0px',
    },
    button: {
        flex: 1
    }
}