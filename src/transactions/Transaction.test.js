import Transaction from './Transaction.js' 

describe.skip('Transaction class', () => {
  it('should set transactionType to Trade if undefined', () => {
    const coreData = {}
    const data = {
      transactionType: undefined
    }
    const testTrans = new Transaction(data, coreData)
    expect(testTrans.transactionType).toEqual('Trade')
  })
})
