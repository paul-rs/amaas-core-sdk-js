import Organisation from './organisation.js'

describe('Organisation', () => {
  describe('constructor', () => {
    it('should set partyClass to Organisation if not assigned', () => {
      const testOrg = new Organisation({})
      expect(testOrg.partyClass).toEqual('Organisation')
    })
  })
})
