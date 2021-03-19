const router = require("express").Router()

router.use("/pessoas", require("./people"))
router.use("/turmas", require("./classes"))

module.exports = router