const router = require("express").Router()
const { PeopleController } = require("../../controllers")

router.get("/", PeopleController.getAllPeople)
router.get("/:id", PeopleController.getPeople)
router.post("/", PeopleController.createPeople)

module.exports = router
