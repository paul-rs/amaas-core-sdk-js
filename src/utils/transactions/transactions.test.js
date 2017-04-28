import { retrieve, insert, amend, partialAmend, search, cancel } from './transactions'
import * as api from '../../exports/api'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 40000

api.config({
  stage: 'staging',
  apiKey: process.env.API_TOKEN
})

const token = process.env.API_TOKEN

describe('utils/transactions', () => {
  describe('retrieve', () => {
    test('with callback', done => {
      const params = { AMId: 1 }
      retrieve(params, (err, res) => {
        expect(res).toBeDefined()
        if (Array.isArray(res)) {
          expect(res[0].transactionId).toBeDefined()
          done()
        } else {
          expect(res.transactionId).toBeDefined()
          done()
        }
      })
    })

    test('with promise', done => {
      let promise = retrieve({ AMId: 1 })
      expect(promise).toBeInstanceOf(Promise)
      promise.then(res => {
        if (Array.isArray(res)) {
          expect(res[0].transactionId).toBeDefined()
          done()
        } else {
          expect(res.transactionId).toBeDefined()
          done()
        }
      })
    })
    it('retrieves', done => {
      retrieve({ AMId: 1, resourceId: '4f82cc16adf14af9bfc01da8e7c6e580' })
        .then(res => {
          expect(res).toBeDefined()
          expect(res.transactionId).toEqual('4f82cc16adf14af9bfc01da8e7c6e580')
          done()
        })
        .catch(err => {
        })
    })
  })

  describe('insert', () => {
    it.skip('inserts', done => {
      const transaction = {
        settlementDate: "2017-03-17",
        transactionDate: "2017-03-15",
        assetManagerId: 1,
        counterpartyBookId: "G95EIYQA6I",
        assetId: 846,
        settlementCurrency: "SGD",
        transactionType: "Block",
        transactionAction: "Remove",
        price: 352,
        netSettlement: 35269,
        transactionCurrency: "SGD",
        executionTime: "2017-03-15T05:02:18.928148+00:00",
        clientId: 1,
        grossSettlement: 35269,
        transactionId: "testTransactionID",
        assetBookId: "JWXWNSBABR",
        quantity: 100
      }
      insert({ transaction, token })
        .then(res => {
          expect(res).toBeDefined()
          expect(res.transactionId).toEqual('testTransactionID')
          done()
        })
        .catch(err => {
          console.error(err)
        })
    })
  })

  describe('amend', () => {
    it('amends', done => {
      let q
      retrieve({ AMId: 1, resourceId: 'testTransactionID', token })
        .then(res => {
          q = res.quantity
          res.quantity = res.quantity.plus(1)
          return amend({ transaction: res, AMId: 1, resourceId: res.transactionId, token })
        })
        .then(res => {
          expect(res.quantity).toEqual(q.plus(1))
          done()
        })
        .catch(err => {
          console.error(err)
        })
    })
  })

  describe('partialAmend', () => {
    it('partial amends', done => {
      let tC
      let changes = {}
      retrieve({ AMId: 1, resourceId: 'testTransactionID', token })
        .then(res => {
          if (res.transactionCurrency === 'USD') {
            tC = 'USD'
            changes.transactionCurrency = 'SGD'
          } else {
            tC = 'SGD'
            changes.transactionCurrency = 'USD'
          }
          return partialAmend({ changes, AMId: 1, resourceId: res.transactionId, token})
        })
        .then(res => {
          expect(res.transactionCurrency).toEqual(tC === 'SGD' ? 'USD' : 'SGD')
          done()
        })
        .catch(err => {})
    })
  })

  describe('search', () => {
    it('searches', done => {
      const query = [
        { key: 'asset_book_ids', values: ['Z5FHJFCO6M', 'Y0JTY73A9T'] }
      ]
      search({ AMId: 1, query })
        .then(res => {
          if (Array.isArray(res)) {
            res = res[0]
            expect(res.assetBookId).toEqual(res.assetBookId !== 'Z5FHJFCO6M' ? 'Y0JTY73A9T' : 'Z5FHJFCO6M')
          } else {
            expect(res.assetBookId).toEqual(res.assetBookId !== 'Z5FHJFCO6M' ? 'Y0JTY73A9T' : 'Z5FHJFCO6M')
          }
          done()
        })
        .catch(err => console.error(err))
    })
  })

  describe('cancel', () => {
    it.skip('cancels', done => {
      retrieve({ AMId: 1 })
        .then(res => {
          const tId = res[0].transactionId
          return cancel({ AMId: res[0].assetManagerId, resourceId: tId })
        })
        .then(res => {
          expect(res.transactionStatus).toEqual('Cancelled')
          done()
        })
        .catch(err => console.error(err))
    })
  })
})
