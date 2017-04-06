import Equity from './equity'

describe('Equity', () => {
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new Equity({ venueId: 'test' })
      expect(JSON.parse(JSON.stringify(test)).venueId).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).venueId).toEqual('test')
    })
  })
})
