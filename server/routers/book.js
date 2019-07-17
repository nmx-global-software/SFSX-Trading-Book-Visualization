const express = require('express')
const router = express.Router()

const { book, order } = require('../services/book')

router.get('/', (req, res) => res.json(book))

router.post('/', async (req, res) => {
    const { ticker, type, price, numberOfShares, trader } = req.body

    try {
        const response = await order({ ticker, type, price, numberOfShares, trader })
        res.json(response)
    } catch (e) {
        res.status(500).send({error: e})
    }
})

module.exports = router