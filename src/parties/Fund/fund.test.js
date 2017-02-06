import Fund from './fund.js'

describe('Fund', () => {
  describe('constructor', () => {
    it('should set partyType to Fund', () => {
      const testFund = new Fund({})
      expect(testFund.partyType).toEqual('Fund')
    })
    it('should set partyClass to Company', () => {
      const testFund = new Fund({})
      expect(testFund.partyClass).toEqual('Company')
    })
  })
})
