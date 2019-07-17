let book = {
    GOOG: {},
    FB: {},
    ORCL: {},
    ZGRO: {}
}

let executionHistory = []

const order = ({ ticker, type, price, numberOfShares, trader }) => {

    const tickerData = book[ticker]

    if (tickerData) {
        return new Promise(resolve => {
            const orderTimestamp = new Date()
            const prices = Object.entries(tickerData).map(([p, value]) => ({ price: parseFloat(p), value }))

            const criteriaFn = type === 'buy' ? p => p.price <= price : p => p.price >= price

            const oppositeType = type === 'sell' ? 'buy' : 'sell'

            const availablePrices = prices.filter(criteriaFn).filter(p => p.value.type === oppositeType).map(p => p.price)

            let difference = numberOfShares
            availablePrices.forEach(p => {

                const priceInfo = tickerData[p]

                let remove = 0
                priceInfo.orders.forEach(o => {

                    const logEntry = { timestamp: new Date(), ticker, price: p }

                    if (o.numberOfShares > difference) {
                        logEntry.numberOfShares = difference
                        o.numberOfShares -= difference
                        difference = 0
                        executionHistory.push(logEntry)
                    } else {
                        logEntry.numberOfShares = o.numberOfShares
                        remove++
                        difference -= o.numberOfShares
                        executionHistory.push(logEntry)
                    }
                })
                priceInfo.orders.splice(0, remove)

            })

            if (difference > 0) {
                if (tickerData[price]) {
                    tickerData[price].orders.push({ orderTimestamp, trader, numberOfShares: difference })
                    tickerData[price].type = type
                }
                else {
                    tickerData[price] = { type, orders: [{ orderTimestamp, trader, numberOfShares: difference }] }
                }
            }

            resolve(book)
        })


    } else {
        return Promise.reject(`Ticker "${ticker}" not supported`)
    }
}

module.exports = {
    order,
    book
}


