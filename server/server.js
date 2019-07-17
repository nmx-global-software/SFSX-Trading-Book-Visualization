const express = require('express')
const bodyParser = require('body-parser')

const { PORT = 3000 } = process.env

const app = express()

const errorHandler = (error, req, res, next) => {
    res.status(500).send({ error })
}

app.use(bodyParser.json())
app.use('/book', require('./routers/book'))

app.use(errorHandler)

app.get('/', (req, res) => res.send("SFSX server is up!"))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))