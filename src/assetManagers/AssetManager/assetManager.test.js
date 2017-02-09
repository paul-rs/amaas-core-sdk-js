import AssetManager from './assetManager.js'

describe('AssetManager', () => {
  describe('stringify', () => {
    it('should return the correct object from JSON.stringify', () => {
      const testAM = new AssetManager({
        assetManagerId: '48576',
        createdBy: 'almightyCreator'
      })
      const expectedObj = {
        asset_manager_id: '48576',
        created_by: 'almightyCreator',
        updated_by: 'TEMP',
        version: 1
      }
      expect(JSON.stringify(testAM)).toEqual(JSON.stringify(expectedObj))
    })
  })
})
