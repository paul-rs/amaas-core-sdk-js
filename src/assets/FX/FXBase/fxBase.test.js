import FXBase from './fxBase.js'

describe('FXBase', () => {
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new FXBase({ assetStatus: 'Active' })
      expect(JSON.parse(JSON.stringify(test)).assetStatus).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).assetStatus).toEqual('Active')
    })
  })
})
