import Exchange from './exchange.js'

describe('Exchange', () => {
  describe('constructor', () => {
    it('should set partyType to Exchange', () => {
      const testEx = new Exchange({})
      expect(testEx.partyType).toEqual('Exchange')
    })
    it('should set partyClass to Company', () => {
      const testEx = new Exchange({})
      expect(testEx.partyClass).toEqual('Company')
    })
  })
})
