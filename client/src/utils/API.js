import axios from "axios";

export default {
    getArticleByQuery: function(query) {

        return fetch(`/api/nyt/${query}`, {headers: {"Accept": "application/json", 'Content-Type': 'application/json'}})
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