import Company from './company.js'

describe('Company', () => {
  describe('constructor', () => {
    it('should set partyClass as Company if none assigned', () => {
      const testCo = new Company({})
      expect(testCo.partyClass).toEqual('Company')
    })
  })
})
