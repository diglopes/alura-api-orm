const express = require("express")

const app = express()
app.use(express.json())

const port = 3000

app.get("/teste", (req, res) => {
    res
    .status(200)
    .send({ msg: "Tudo certin!"})
})

app.listen(port, () => console.log(`App running on port ${port}`))