import AssetManager from './assetManager.js'

describe('AssetManager', () => {
  describe('stringify', () => {
    it('should return the correct object from JSON.stringify', () => {
      const testAM = new AssetManager({
        assetManagerId: '48576',
        createdBy: 'almightyCreator'
      })
      const expectedObj = {
        assetManagerId: '48576',
        createdBy: 'almightyCreator',
        updatedBy: 'TEMP',
        version: 1
      }
      expect(JSON.parse(JSON.stringify(testAM))).toEqual(expectedObj)
    })
  })
})
