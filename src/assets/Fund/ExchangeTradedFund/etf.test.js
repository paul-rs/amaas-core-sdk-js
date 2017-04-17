import ExchangeTradedFund from './etf'

describe('ETF class', () => {
  describe('constructor', () => {
    it('should set fundType to ETF', () => {
      const etf = new ExchangeTradedFund({})
      expect(etf.fundType).toEqual('ETF')
    })
  })
})
