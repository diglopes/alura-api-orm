const router = require("express").Router()
const { PeopleController } = require("../../controllers")

router.get("/", PeopleController.getAllPeople)
router.get("/:id", PeopleController.getPeople)

module.exports = router
