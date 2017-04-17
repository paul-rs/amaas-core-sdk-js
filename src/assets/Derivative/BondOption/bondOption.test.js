import BondOption from './bondOption'

describe('BondOption', () => {
  describe('stringify/parse', () => {
    it('should stringify/parse correctly', () => {
      const test = new BondOption({ optionType: 'test' })
      expect(JSON.parse(JSON.stringify(test)).optionType).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).optionType).toEqual('test')
    })
  })
})
