import Broker from './broker.js'

describe('Broker', () => {
  describe('constructor', () => {
    it('should set partyType to Broker', () => {
      const testBroker = new Broker({})
      expect(testBroker.partyType).toEqual('Broker')
    })
    it('should set partyClass to Company', () => {
      const testBroker = new Broker({})
      expect(testBroker.partyClass).toEqual('Company')
    })
  })
})
