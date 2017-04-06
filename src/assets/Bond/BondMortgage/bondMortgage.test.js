import BondMortgage from './bondMortgage'

describe('BondMortgage', () => {
  describe('stringify/parse', () => {
    it('should stringify/parse correctly', () => {
      const test = new BondMortgage({ issueDate: 'today' })
      expect(JSON.parse(JSON.stringify(test)).issueDate).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).issueDate).toEqual('today')
    })
  })
})
