import BondOption from './bondOption'

describe('BondOption', () => {
  describe('stringify/parse', () => {
    it('should stringify/parse correctly', () => {
      const test = new BondOption({ putCall: 'test' })
      expect(JSON.parse(JSON.stringify(test)).putCall).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).putCall).toEqual('test')
    })
  })
})
