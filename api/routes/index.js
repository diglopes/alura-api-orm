const router = require("express").Router()

router.use("/pessoas", require("./people"))

module.exports = router