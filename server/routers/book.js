const express = require('express')
const router = express.Router()

var expressJoi = require('express-joi-validator');
var Joi = require('joi');

const { book, order, executionHistory } = require('../services/book')

router.get('/', (req, res) => res.json({ book, executionHistory }))


const postSchema = {
    body: {
        ticker: Joi.string(),
        type: Joi.string().valid(['buy', 'sell']),
        price: Joi.number(),
        numberOfShares: Joi.number().integer(),
        trader: Joi.string()
    }
}

router.post('/', expressJoi(postSchema), async (req, res) => {
    const { ticker, type, price, numberOfShares, trader } = req.body

    try {
        const response = await order({ ticker, type, price, numberOfShares, trader })
        res.json(response)
    } catch (e) {
        res.status(500).send({ error: e })
    }
})

module.exports = router