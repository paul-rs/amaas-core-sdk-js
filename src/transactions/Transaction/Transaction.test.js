import Transaction from './Transaction.js'
import Charge from '../../children/Charge'

const Decimal = require('decimal.js')

describe('Transaction class', () => {
  const coreData = {
    createdBy: 'testUser',
    createdTime: new Date(2017, 1, 30)
  }
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new Transaction({ transactionType: 'Trade' })
      expect(JSON.parse(JSON.stringify(test)).transactionType).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).transactionType).toEqual('Trade')
    })
  })
  describe('constructor', () => {
    const data = {
      quantity: 2.54,
      price: 45.77
    }
    const testTrans = new Transaction(data)

    it('should set transactionType to Trade if undefined', () => {
      expect(testTrans.transactionType).toEqual('Trade')
    })
    it('should set transactionStatus to New if undefined', () => {
      expect(testTrans.transactionStatus).toEqual('New')
    })
    it('grossSettlement should return price * quantity if undefined', () => {
      const quantity = new Decimal(data.quantity)
      const price = new Decimal(data.price)
      expect(testTrans.grossSettlement).toEqual(quantity.times(price))
    })
  })

  describe('chargesNetEffect', () => {
    it('should return all active and netAffecting charges', () => {
      const data = {
        price: 45.66,
        charges: {
          TAX : new Charge({ chargeValue: 10, currency: 'SGD', active: true, netAffecting: true }, null, coreData),
          COMMISSION : new Charge({ chargeValue: 20, currency: 'SGD', active: true, netAffecting: true }, null, coreData)
        }
      }
      const testTrans = new Transaction(data)
      testTrans.chargesNetEffect()
      expect(testTrans.chargesNetEffect()).toEqual(new Decimal(30))
    })
  })
})
