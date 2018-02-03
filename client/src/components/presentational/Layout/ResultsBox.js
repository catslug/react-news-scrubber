import React from 'react';
import {BoxTitle} from './BoxTitle'
import {ResultItem} from './ResultItem'

class ResultsBox extends React.Component {
    state = {
        articles: this.props.articles
    }

    render(props) {
        return (
            <div style={Style.container}>
                <BoxTitle title='Results' />
                {this.props.articles.map(item => (
                        <ResultItem
                            key={item.title}
                            title={item.title}
                            byline={item.byline}
                            date={item.date}
                            url={item.url}
                            iconName='add'
                            buttonTitle='Save'
                            saveArticleToDB={this.props.saveArticleToDB}
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
        marginTop: '8%',
        marginBottom: '8%',
        borderRadius: '8px',
        boxShadow: '0px 1px 20px 0px #2f2f2f',
        backgroundColor: '#fff',
        paddingTop: '30px',
        paddingBottom: '65px',
    }
}

export default ResultsBox;