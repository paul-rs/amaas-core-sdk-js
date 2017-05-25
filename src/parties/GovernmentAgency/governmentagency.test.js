import GovernmentAgency from './governmentAgency.js'

describe('GovernmentAgency', () => {
  describe('constructor', () => {
    it('should set partyClass to Organisation', () => {
      const testGov = new GovernmentAgency({})
      expect(testGov.partyClass).toEqual('Organisation')
    })
    it('should set partyType to Government Agency', () => {
      const testGov = new GovernmentAgency({})
      expect(testGov.partyType).toEqual('GovernmentAgency')
    })
  })
})
