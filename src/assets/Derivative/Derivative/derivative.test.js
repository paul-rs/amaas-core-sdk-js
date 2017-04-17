import Derivative from './derivative'

describe('Derivative', ()  => {
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new Derivative({ maturityDate: '2017-04-12' })
      const expectedDate = JSON.parse(JSON.stringify(new Date(2017, 3, 12)))
      expect(JSON.parse(JSON.stringify(test)).maturityDate).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).maturityDate).toEqual(expectedDate)
    })
  })
})
