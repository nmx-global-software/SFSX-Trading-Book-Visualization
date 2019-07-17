const rewire = require('rewire')
const bookService = rewire('./book')

const { book, order } = bookService

describe('services/book', () => {
    describe('book', () => {
        it('initially has an empty book for the tickers', () => {
            expect(book).not.toBeNull()
            expect(book.FB).toEqual({})
        })
    })

    describe('order', () => {

        let revert

        beforeEach(() => {
            revert = bookService.__set__({ book: { GOOG: {} } })
        })

        afterEach(() => {
            revert()
        })

        it('rejects if the ticker is invalid', async () => {
            const ticker = 'invalid-ticker'
            await expect(order({ ticker })).rejects.toMatch(`Ticker "${ticker}" not supported`)
        })

        it('adds an order to the book if it cannot be executed', async () => {
            const book = await order({ ticker: 'GOOG', price: 100, numberOfShares: 200, trader: 'EH', type: 'buy' })
            expect(book.GOOG[100]).not.toBeNull()
            expect(book.GOOG['100'].type).toBe('buy')
            expect(book.GOOG['100'].orders.length).toBe(1)
            expect(book.GOOG['100'].orders[0].numberOfShares).toBe(200)
        })

        it('updates the resting stock after an execution', async () => {
            await order({ ticker: 'GOOG', price: 100, numberOfShares: 200, trader: 'EH', type: 'buy' })
            const book = await order({ ticker: 'GOOG', price: 100, numberOfShares: 150, trader: 'NW', type: 'sell' })
            expect(book.GOOG[100]).not.toBeNull()
            expect(book.GOOG['100'].type).toBe('buy')
            expect(book.GOOG['100'].orders[0].numberOfShares).toBe(50)
        })

        it('flips the resting stock after an execution', async () => {
            await order({ ticker: 'GOOG', price: 100, numberOfShares: 200, trader: 'EH', type: 'buy' })
            const book = await order({ ticker: 'GOOG', price: 100, numberOfShares: 300, trader: 'NW', type: 'sell' })
            expect(book.GOOG[100]).not.toBeNull()
            expect(book.GOOG['100'].type).toBe('sell')
            expect(book.GOOG['100'].orders[0].numberOfShares).toBe(100)
        })

    });



})


