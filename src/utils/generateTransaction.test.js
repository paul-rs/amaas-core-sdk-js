import { generateTransaction, generateCommon } from './generateTransaction.js'
import Decimal from 'decimal.js'

describe.skip('generateCommon sub-utility', () => {
  describe('defaults', () => {
    const common = generateCommon({ price: 0 })
    it('should set assetManagerId', () => {
      expect(common.assetManagerId).toBeDefined()
    })
    it('should set assetBookId', () => {
      expect(common.assetBookId).toBeDefined()
    })
    it('should set counterpartyBookId', () => {
      expect(common.counterpartyBookId).toBeDefined()
    })
    it('should set assetId', () => {
      expect(common.assetId).toBeDefined()
    })
    it('should set quantity', () => {
      expect(common.quantity).toBeDefined()
    })
    it('should set transactionDate', () => {
      expect(common.transactionDate).toBeDefined()
    })
    it('should set transactionCurrency', () => {
      expect(common.transactionCurrency).toBeDefined()
    })
    it('should set settlementCurrency', () => {
      expect(common.settlementCurrency).toBeDefined()
    })
    it('should set settlementDate', () => {
      expect(common.settlementDate).toBeDefined()
    })
    it('should set transactionAction to "Buy" if quantity >= 0', () => {
      const commonQuantPos = generateCommon({ price: 5, quantity: 5 })
      expect(commonQuantPos.transactionAction).toEqual('Buy')
    })
    it('should set transactionAction to "Short Sell" if quantity < 0', () => {
      const commonQuantNeg = generateCommon({ price: 0, quantity: -1 })
      expect(commonQuantNeg.transactionAction).toEqual('Short Sell')
    })
  })

  describe('returns', () => {
    const params = {
      assetManagerId: 300,
      assetBookId: 500,
      counterpartyBookId: 568,
      assetId: '1234',
      quantity: 937,
      price: 56.76,
      transactionDate: new Date(2017, 1, 27),
      transactionId: 1258594
    }
    const common = generateCommon(params)
    it('bypassed defaults correctly', () => {
      expect(common.assetManagerId).toEqual(300)
      expect(common.assetBookId).toEqual(500)
      expect(common.counterpartyBookId).toEqual(568)
      expect(common.assetId).toEqual('1234')
      expect(common.quantity).toEqual(new Decimal(937))
      expect(common.price).toEqual(new Decimal(56.76))
      expect(common.transactionDate).toEqual(new Date(2017, 1, 27))
      expect(common.transactionId).toEqual(1258594)
    })
    it('set private properties correctly', () => {
      expect(common.settlementDate).toEqual(new Date(2017, 1, 29))
      expect(common.transactionAction).toEqual('Buy')
    })
  })
})

describe.skip('generateTransaction utility', () => {
  describe('transaction children', () => {
    const params = {
      assetManagerId: 300,
      assetBookId: 500,
      counterpartyBookId: 568,
      assetId: '1234',
      quantity: 937,
      price: 56.76,
      transactionDate: new Date(2017, 1, 27),
      transactionId: 1258594,
      charges: {},
      codes: {},
      references: {}
    }
    const transaction = generateTransaction(params)
    it('should return charges correctly', () => {
      const expectedCharges = {
        TAX: {
          netAffecting: true
        },
        COMMISSION: {
          netAffecting: true
        }
      }
      expect(transaction.charges.TAX.netAffecting).toEqual(true)
    })
  })
})
