import BondMortgage from './bondMortgage'

describe('BondMortgage', () => {
  describe('stringify/parse', () => {
    it('should stringify/parse correctly', () => {
      const test = new BondMortgage({ currency: 'SGD' })
      expect(JSON.parse(JSON.stringify(test)).currency).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).currency).toEqual('SGD')
    })
  })
})
