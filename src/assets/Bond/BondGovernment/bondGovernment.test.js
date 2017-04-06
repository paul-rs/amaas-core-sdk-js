import BondGovernment from './bondGovernment'

describe('BondGovernment', () => {
  describe('stringify/parse', () => {
    it('should stringify and parse correctly', () => {
      const test = new BondGovernment({ clientId: 'test' })
      expect(JSON.parse(JSON.stringify(test)).clientId).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).clientId).toEqual('test')
    })
  })
})
