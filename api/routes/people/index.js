const router = require("express").Router()
const { PeopleController } = require("../../controllers")

router.get("/", PeopleController.getAllPeople)
router.get("/:id", PeopleController.getPeople)
router.post("/", PeopleController.createPeople)
router.put("/:id", PeopleController.updatePeople)
router.delete("/:id", PeopleController.removePeople)

module.exports = router
