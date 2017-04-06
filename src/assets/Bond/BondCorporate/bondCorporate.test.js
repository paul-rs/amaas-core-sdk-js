import BondCorporate from './bondCorporate'

describe('BondCorporate', () => {
  describe('stringify and parse', () => {
    it('should stringify and parse correctly', () => {
      const bond = new BondCorporate({ venueId: 'test' })
      expect(JSON.parse(JSON.stringify(bond)).venueId).toBeDefined()
      expect(JSON.parse(JSON.stringify(bond)).venueId).toEqual('test')
    })
  })
})
