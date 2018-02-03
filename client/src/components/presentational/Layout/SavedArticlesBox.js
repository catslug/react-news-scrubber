import React from 'react';
import {ResultItem} from "./ResultItem";
import {BoxTitle} from './BoxTitle'

class SavedArticlesBox extends React.Component {
    render(props) {
        return (
            <div style={Style.container} >
                <BoxTitle title='Saved Articles' />
                {this.props.savedArticles.map(item => (
                        <ResultItem
                            key={item.url}
                            id={item.id}
                            title={item.title}
                            byline={item.byline}
                            date={item.date}
                            url={item.url}
                            iconName='clear'
                            buttonTitle='Delete'
                            deleteSavedArticle={this.props.deleteSavedArticle}
                        />
                    )
                )}
            </div>
        )
    }
}

const Style = {
    container: {
        width: '100%',
        minHeight: '60vh',
        padding: '20px',
        paddingBottom: '65px',
        marginTop: '8%',
        marginBottom: '15%',
        borderRadius: '8px',
        boxShadow: '0px 1px 20px 0px #2f2f2f',
        backgroundColor: '#fff',    }
}

export default SavedArticlesBox;