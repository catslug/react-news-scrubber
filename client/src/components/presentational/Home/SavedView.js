import React from 'react';
import {Container} from '../Layout/Container'
import Navbar from '../Layout/Navbar'
import SavedArticlesBox from '../Layout/SavedArticlesBox'
import API from "../../../utils/API";

class SavedView extends React.Component {
    state = {
        savedArticles: []
    }

    componentDidMount() {
        this.updateSavedArticles()
    }

    updateSavedArticles = () => {
        API.getSavedArticles()
            .then(res => {
                let savedArticlesArr = res.data
                let newSavedArticlesArr = []

                console.log(res.data)

                savedArticlesArr.forEach((article) => {
                    let newArticleObj = {
                        id: article._id,
                        title: article.title,
                        byline: article.byline !== undefined ? article.byline : null,
                        date: article.date !== undefined ? article.date : null,
                        snippet: article.snippet,
                        url: article.url !== undefined ? article.url : null
                    }

                    newSavedArticlesArr.push(newArticleObj)
                })

                this.setState({
                    savedArticles: newSavedArticlesArr
                })
            })
            .catch(err => console.log(err))
    }

    deleteSavedArticle = (articleId) => {
        API.deleteSavedArticle(articleId)
            .then(res => this.updateSavedArticles())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <SavedArticlesBox
                        savedArticles={this.state.savedArticles}
                        deleteSavedArticle={this.deleteSavedArticle}
                    />
                </Container>
            </div>
        )
    }
}

export default SavedView;