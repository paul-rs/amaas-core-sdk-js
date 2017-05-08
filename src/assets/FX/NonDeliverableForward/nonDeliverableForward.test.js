import NonDeliverableForward from './nonDeliverableForward.js'

describe('NonDeliverableForward', () => {
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new NonDeliverableForward({})
      expect(JSON.parse(JSON.stringify(test)).assetStatus).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).assetStatus).toEqual('Active')
    })
  })
})
