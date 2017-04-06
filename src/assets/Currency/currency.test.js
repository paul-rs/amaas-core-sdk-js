import Currency from './currency'

describe('Currency', () => {
  describe('stringify/parse', () => {
    it('should stringify/parse correctly', () => {
      const test = new Currency({ clientId: 'test' })
      expect(JSON.parse(JSON.stringify(test)).clientId).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).clientId).toEqual('test')
    })
  })
})
