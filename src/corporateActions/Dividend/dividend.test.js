import Decimal from 'decimal.js'
import Dividend from './'

describe('Dividend', () => {
  describe('constructor', () => {
    it('sets dividendRate', () => {
      const testDiv = new Dividend({})
      expect(testDiv.dividendRate).toEqual(new Decimal(0))
      testDiv.dividendRate = 5.67
      expect(testDiv.dividendRate).toEqual(new Decimal(5.67))
    })

    it('sets corporateActionType', () => {
      const testDiv = new Dividend({})
      expect(testDiv.corporateActionType).toEqual('Dividend')
    })
  })
})
