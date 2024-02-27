const express = require('express')
const app = express()
const port = 8000

require('dotenv').config


require('dotenv').config


app.use(express.json())

app.use('/', (req, res) => {
    res.send({ status: 200, message: "Hello World I am the best express app ever and totally working as intended."})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})