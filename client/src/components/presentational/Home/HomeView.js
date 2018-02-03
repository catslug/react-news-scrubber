import React from 'react';
import {Container} from '../Layout/Container'
import Navbar from '../Layout/Navbar'
import SearchBox from '../Layout/SearchBox'
import ResultsBox from '../Layout/ResultsBox'
import SavedArticlesBox from '../Layout/SavedArticlesBox'
import API from "../../../utils/API";

class HomeView extends React.Component {
    state = {
        articles: [],
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

    setArticlesArray = (res) => {
        let newArticleResults = res.response.docs
        let newStateArr = []

        newArticleResults.forEach((article) => {
            let newArticleObj = {
                title: article.headline.main,
                byline: article.byline !== undefined ? article.byline.original : null,
                date: article.pub_date,
                snippet: article.snippet,
                url: article.web_url
            }

            newStateArr.push(newArticleObj)
        })

        this.setState({
            articles: newStateArr
        })
    }

    saveArticleToDB = (articleUrl) => {
        let articleObj

        for (let i = 0; i < this.state.articles.length; i++) {
            if (this.state.articles[i].url === articleUrl) {
                articleObj = {
                    title: this.state.articles[i].title,
                    byline: this.state.articles[i].byline,
                    date: this.state.articles[i].date,
                    snippet: this.state.articles[i].snippet,
                    url: articleUrl
                }
            }
        }

        if (articleObj !== undefined) {
            API.saveArticle(articleObj)
                .then(res => this.updateSavedArticles())
                .catch(err => console.log(err));
        }
    }

    deleteSavedArticle = (articleId) => {

        API.deleteSavedArticle(articleId)
            .then(res => this.updateSavedArticles())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Container>
                    <SearchBox
                        setArticlesArray={this.setArticlesArray}
                    />
                    <ResultsBox
                        articles={this.state.articles}
                        saveArticleToDB={this.saveArticleToDB}
                    />
                    <SavedArticlesBox
                        savedArticles={this.state.savedArticles}
                        deleteSavedArticle={this.deleteSavedArticle}
                    />
                </Container>
            </div>
        )
    }
}

export default HomeView;