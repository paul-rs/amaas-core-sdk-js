import PartyChild from './partychild.js'

describe('PartyChild', () => {
  describe('constructor', () => {
    it('should set active to false if assigned false', () => {
      const testPartyChild = new PartyChild({ active: false })
      expect(testPartyChild.active).toEqual(false)
    })
    it('should set active to true if undefined', () => {
      const testPartyChild = new PartyChild({})
      expect(testPartyChild.active).toEqual(true)
    })
    it('should otherwise set active correctly', () => {
      const testPartyChild = new PartyChild({ active: true })
      expect(testPartyChild.active).toEqual(true)
    })
  })
})
