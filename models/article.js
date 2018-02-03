const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String
    },
    byline: {
        type: String
    },
    snippet: {
        type: String
    },
    url: {
        type: String
    },
    date: {
        type: Date
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;