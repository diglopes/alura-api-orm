const express = require("express")
const database = require("./database/models")
const routes = require("./routes")

const app = express()
app.use(express.json())
app.use((req, _, next) => {
    req.db = database
    next()
})
app.use("/api", routes)

const port = 3000

app.listen(port, () => console.log(`App running on port ${port}`))