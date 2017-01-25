import Transaction from './Transaction.js'

describe('Transaction class', () => {
  it('should set transactionType to Trade if undefined', () => {
    const testTrans = new Transaction(undefined, undefined)
    expect(testTrans.transactionType).toEqual('Trade')
  })
})
