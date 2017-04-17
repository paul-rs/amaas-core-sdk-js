import { Decimal } from 'decimal.js'

import Fund from './fund'

describe('Fund class', () => {
  describe('constructor', () => {
    it('should set creationDate', () => {
      const date = new Date(2017, 2, 14)
      const fund = new Fund({ creationDate: '2017-3-14' })
      expect(fund.creationDate).toEqual(date)
    })

    it('should catch attempt to set invalid fundType', () => {
      let fund
      function construct() {
        fund = new Fund({ fundType: 'notAFund' })
      }
      expect(construct).toThrowError(new Error('Invalid Fund Type: notAFund'))
    })

    it('should set nav to a Decimal', () => {
      const fund = new Fund({})
      expect(fund.nav).toEqual(new Decimal(0))
      fund.nav = 21000
      expect(fund.nav).toEqual(new Decimal(21000))
    })

    it('should set expenseRatio to a Decimal', () => {
      const fund = new Fund({})
      expect(fund.expenseRatio).toEqual(new Decimal(0))
      fund.expenseRatio = 0.05
      expect(fund.expenseRatio).toEqual(new Decimal(0.05))
    })
  })
})
