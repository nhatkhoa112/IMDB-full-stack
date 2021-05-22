const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movies.controller");


// GET http://localhost:5000/api/movies
router.get("/", movieController.list);
router.get("/search", movieController.searchByTitle);
router.post("/", movieController.create);
router.patch("/:id", movieController.update);
router.delete("/:id", movieController.delete);

module.exports = router;
