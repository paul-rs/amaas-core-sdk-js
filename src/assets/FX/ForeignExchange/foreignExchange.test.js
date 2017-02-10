import ForeignExchange from './foreignExchange.js'

describe('ForeignExchange', () => {
  describe('get currency functions', () => {
    const fx = new ForeignExchange({ assetId: 'USDSGD' })
    it('getBaseCurrency should return first 3 characters of assetId', () => {
      expect(fx.getBaseCurrency()).toEqual('USD')
    })
    it('getCounterCurrency should return second 3 characters of assetId', () => {
      expect(fx.getCounterCurrency()).toEqual('SGD')
    })
  })
})
