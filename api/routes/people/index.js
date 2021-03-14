const router = require("express").Router()
const { PeopleController } = require("../../controllers")

router.get("/", PeopleController.getAllPeople)

module.exports = router