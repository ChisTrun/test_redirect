const express = require("express")
const path = require("path")
const port = 3000

const app = express()

app.use("/", async (req, res) => {
    res
    res.sendFile(path.join(__dirname,"index.html"))
})

app.listen(port, ()=> {
    console.log("server is listening on port: ", port)
})
