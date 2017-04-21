import { retrieve, insert, amend, partialAmend } from './transactions'

const token = process.env.API_TOKEN

describe('utils/transactions', () => {
  describe('retrieve', () => {
    it('retrieves', done => {
      retrieve({ AMId: 1, resourceId: '4f82cc16adf14af9bfc01da8e7c6e580', token })
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
})
