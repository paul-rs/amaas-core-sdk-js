import NonDeliverableForward from './nonDeliverableForward.js'

describe('NonDeliverableForward', () => {
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new NonDeliverableForward({ maturityDate: 'today' })
      expect(JSON.parse(JSON.stringify(test)).maturityDate).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).maturityDate).toEqual('today')
    })
  })
})
