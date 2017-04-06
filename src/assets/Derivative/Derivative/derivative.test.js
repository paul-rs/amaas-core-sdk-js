import Derivative from './derivative'

describe('Derivative', ()  => {
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new Derivative({ maturityDate: 'today' })
      expect(JSON.parse(JSON.stringify(test)).maturityDate).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).maturityDate).toEqual('today')
    })
  })
})
