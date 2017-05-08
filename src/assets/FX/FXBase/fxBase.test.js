import ForeignExchangeBase from './fxBase.js'

describe('FXBase', () => {
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new ForeignExchangeBase({ assetStatus: 'Active' })
      expect(JSON.parse(JSON.stringify(test)).assetStatus).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).assetStatus).toEqual('Active')
    })
  })

  describe('class methods', () => {
    let fx
    beforeAll(() => {
      fx = new ForeignExchangeBase({ assetId: 'EURUSD' })
    })
    it('getBaseCurrency should return base currency', () => {
      expect(fx.getBaseCurrency()).toEqual('EUR')
      expect(fx.getCounterCurrency()).toEqual('USD')
    })
  })
})
