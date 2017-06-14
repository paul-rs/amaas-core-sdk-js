import { retrieve, insert, amend, partialAmend, search, cancel } from './transactions'
import * as api from '../../exports/api'

api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

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
      .catch(err => console.error(err))
    })
    it('retrieves', done => {
      retrieve({ AMId: 1 })
        .then(res => {
          if (res.length === 0) {
            console.error('amend: Result is empty, force fail on timeout')
            return
          }
          res = res[0]
          expect(res).toBeDefined()
          expect(res.assetManagerId).toEqual(1)
          done()
        })
        .catch(err => {
          console.error(err)
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
      insert({ transaction })
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
    it('amends', async done => {
      let q
      let res = await retrieve({ AMId: 1 })
      if (res.length === 0) {
        console.error('amend: Result is empty, force fail on timeout')
        return
      }
      res = res.filter(tr => tr.transactionStatus === 'New')
      if (res.length === 0) {
        console.error('amend: Result is empty, force fail on timeout')
        return
      }
      res = res[0]
      q = res.quantity
      res.quantity = res.quantity.plus(1)
      res = await amend({ transaction: res, AMId: 1, resourceId: res.transactionId })
      expect(res.quantity).toEqual(q.plus(1))
      done()
    })
  })

  describe('partialAmend', () => {
    it('partial amends', async done => {
      let tC
      let changes = {}
      let res = await retrieve({ AMId: 1 })
      if (res.length === 0) {
        console.error('amend: Result is empty, force fail on timeout')
        return
      }
      res = res.filter(tr => tr.transactionStatus === 'New')
      if (res.length === 0) {
        console.error('amend: Result is empty, force fail on timeout')
        return
      }
      res = res[0]
      if (res.transactionCurrency === 'USD') {
        tC = 'USD'
        changes.transactionCurrency = 'SGD'
      } else {
        tC = '!USD'
        changes.transactionCurrency = 'USD'
      }
      res = await partialAmend({ changes, AMId: res.assetManagerId, resourceId: res.transactionId })
      expect(res.transactionCurrency).toEqual(tC === 'USD' ? 'SGD' : 'USD')
      done()
    })
  })

  describe('search', () => {
    it('searches', async done => {
      const query = {
        assetManagerIds: [1]
      }
      let res = await search({ query })
      if (res.length === 0) {
        console.error('amend: Result is empty, force fail on timeout')
        return
      }
      res = res[0]
      expect(res.assetManagerId).toEqual(1)
      done()
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
