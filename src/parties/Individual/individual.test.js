import Individual from './individual.js'

describe('Individual', () => {
  describe('constructor', () => {
    it('should call super correctly', () => {
      const testIndividual = new Individual({ assetManagerId: '1234', partyId: '0987' })
      expect(testIndividual.assetManagerId).toEqual('1234')
      expect(testIndividual.partyId).toEqual('0987')
    })
    it('should set party class and type to Individual', () => {
      const testIndividual = new Individual({})
      expect(testIndividual.partyClass).toEqual('Individual')
      expect(testIndividual.partyType).toEqual('Individual')
    })
  })
})
