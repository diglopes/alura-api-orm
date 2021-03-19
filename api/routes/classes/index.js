const router = require("express").Router()
const { ClassesController } = require("../../controllers")

router.get("/", ClassesController.getAllClasses)
router.get("/:id", ClassesController.getClass)


module.exports = router