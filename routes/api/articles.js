const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/articles"
router.route("/")
    .get(articleController.findAllSaved)
    .post(articleController.create);

// Matches with "/api/articles/:id"
router
    .route("/:id")
    .get(articleController.findById)
    .delete(articleController.remove);

module.exports = router;