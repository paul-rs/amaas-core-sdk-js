import AssetManager from './assetManager.js'

describe('AssetManager', () => {
  describe('constructor', () => {
    it('should throw if attempting to set invalid asset manager type', () => {
      function tester() {
        const testAM = new AssetManager({ assetManagerType: 'notAType' })
      }
      expect(tester).toThrowError('Invalid Asset Manager Type')
    })

    it('should construct', () => {
      const testAM = new AssetManager({
        assetManagerId: 'testAMId',
        assetManagerType: 'Venture Capital',
        assetManagerStatus: 'testAMStatus',
        partyId: 'testPartyId',
        defaultBookOwnerId: 'testId',
        defaultTimezone: 'testTimezone',
        defaultBookCloseTime: 'testTime'
      })
      expect(testAM.assetManagerId).toEqual('testAMId')
      expect(testAM.assetManagerType).toEqual('Venture Capital')
      expect(testAM.assetManagerStatus).toEqual('testAMStatus')
      expect(testAM.partyId).toEqual('testPartyId')
      expect(testAM.defaultBookOwnerId).toEqual('testId')
      expect(testAM.defaultTimezone).toEqual('testTimezone')
      expect(testAM.defaultBookCloseTime).toEqual('testTime')
    })
  })

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
      expect(JSON.parse(JSON.stringify(testAM))).toEqual(expect.objectContaining(expectedObj))
    })
  })
})
