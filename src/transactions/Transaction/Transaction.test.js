import Transaction from './Transaction.js'
import Charge from '../Charge/Charge.js'

const Decimal = require('decimal.js')

describe.skip('Transaction class', () => {
  describe('constructor', () => {
    const data = {
      quantity: 2.54,
      price: 45.77
    }
    const testTrans = new Transaction(data, undefined)

    it('should set transactionType to Trade if undefined', () => {
      expect(testTrans.transactionType).toEqual('Trade')
    })
    it('should set transactionStatus to New if undefined', () => {
      expect(testTrans.transactionStatus).toEqual('New')
    })
    it('should set version to 1 if undefined', () => {
      expect(testTrans.version).toEqual(1)
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
          TAX : new Charge({ chargeValue: 10, currency: 'SGD', active: true, netAffecting: true }),
          COMMISSION : new Charge({ chargeValue: 20, currency: 'SGD', active: true, netAffecting: true })
        }
      }
      const testTrans2 = new Transaction(data)
      testTrans2.chargesNetEffect()
      // expect(testTrans.chargesNetEffect()).toEqual(new Decimal(30))
    })
  })
})
