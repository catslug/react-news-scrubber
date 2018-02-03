const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

app.use(routes);

mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://heroku_77c7mp8f:qjmt5fvmgof87h1a4fmhaag0v8@ds123698.mlab.com:23698/heroku_77c7mp8f",
    {
        useMongoClient: true
    }
);

app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}!`);
});