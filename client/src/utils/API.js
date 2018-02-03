import axios from "axios";

export default {
    getArticleByQuery: function(query) {
        return fetch(`/api/nyt/${query}`)
            .then(res => res.json())
    },
    getArticleByQueryAndStartYear: function(query, startYear) {
        return fetch(`/api/nyt/${query}/${startYear}0101`)
            .then(res => res.json())
    },
    getArticleByQueryAndEndYear: function(query, endYear) {
        return fetch(`/api/nyt/endYear/${query}/${endYear}1231`)
            .then(res => res.json())
    },
    getArticleByQueryAndYearRange: function(query, startYear, endYear) {
        return fetch(`/api/nyt/${query}/${startYear}0101/${endYear}1231`)
            .then(res => res.json())
    },
    getSavedArticles: function() {
        return axios.get(`/api/articles/`);
    },
    deleteSavedArticle: function(id) {
        return axios.delete(`/api/articles/${id}`);
    },
    saveArticle: function(articleData) {
        return axios.post(`/api/articles`, articleData);
    }
};