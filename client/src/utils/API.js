import axios from "axios";

export default {
    getArticleByQuery: function(query) {
        return axios.get(`/https://api.nytimes.com/svc/search/v2/articlesearch.json?=${query}`);
    },
    getSavedArticles: function() {
        return axios.get(`/api/articles/`);
    },
    deleteSavedArticle: function(id) {
        return axios.delete(`/api/articles/${id}`);
    },
    saveArticle: function(articleData) {
        return axios.post(`/api/books`, articleData);
    }
};