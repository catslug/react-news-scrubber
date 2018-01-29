import React from 'react';
import {ResultItem} from "./ResultItem";
import {BoxTitle} from './BoxTitle'

class SavedArticlesBox extends React.Component {
    constructor(props) {
        super(props)
    }

    renderResultItems = (results) => {
        results.map((item, index) => (
            <ResultItem
                key={item.href}
                title={item.title}
                iconName={item.iconName}
                buttonTitle={item.buttonTitle}
            />
        ))
    }

    render(props) {
        return (
            <div style={Style.container} >
                <BoxTitle title='Saved Articles' />
                <ResultItem
                    title='Some Awesome Article'
                    iconName='clear'
                    buttonTitle='Delete'
                />
            </div>
        )
    }
}

const Style = {
    container: {
        width: '100%',
        minHeight: '60vh',
        padding: '20px',
        marginTop: '3%',
        marginBottom: '3%',
        border: '2px solid #ccc',
        borderRadius: '8px',
        boxShadow: '1px 1px 2px 2px #eee'
    }
}

export default SavedArticlesBox;