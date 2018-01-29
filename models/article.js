const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    snippet: {
        type: String
    },
    href: {
        type: String
    },
    datePublished: {
        type: Date
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;