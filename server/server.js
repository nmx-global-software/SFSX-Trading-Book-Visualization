const express = require('express')
const bodyParser = require('body-parser')

const { PORT = 3000 } = process.env

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => res.send("SFSX server is up!"))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))