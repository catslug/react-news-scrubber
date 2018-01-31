const router = require("express").Router();
const axios = require("axios")
const request = require("request")

//matches to the /api/nyt route
router.get("/:query", function(req, res) {
    console.log('req inside api/nyt route', req.params.query)

    request.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
            'api-key': "0d1c37e0de624af096f88825537bd47f",
            'q': req.params.query
        },
    }, function(err, response, body) {
        body = JSON.parse(body);
        res.json(body)
    })

})

module.exports = router;
