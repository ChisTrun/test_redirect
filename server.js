const express = require("express")
const path = require("path")
const port = 3000

const app = express()

app.use("/", async (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"))
})

app.use("/test", async (req,res) => {
    res.redirect("https://www.w3schools.com/")
})

app.listen(port, ()=> {
    console.log("server is listening on port: ", port)
})
