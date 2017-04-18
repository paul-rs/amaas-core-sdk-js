import AssetManager from './assetManager'

describe('Party AssetManager class', () => {
  describe('constructor', () => {
    it('should set partyClass to Company', () => {
      const am = new AssetManager({})
      expect(am.partyClass).toEqual('Company')
    })

    it('should set partyType to AssetManager', () => {
      const am = new AssetManager({})
      expect(am.partyType).toEqual('AssetManager')
    })
  })
})
