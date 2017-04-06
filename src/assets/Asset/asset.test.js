import Asset from './asset.js'
import Reference from '../../core/Reference/reference.js'

describe('Asset', () => {
  describe('constructor', () => {
    it('should set the AMaaS reference as assetId', () => {
      const testAsset = new Asset({ assetId: 'testId' })
      const expectedRef = new Reference({ referenceValue: 'testId' })
      expect(testAsset.references.AMaaS).toEqual(expectedRef)
    })

    it('should stringify correctly', () => {
      const testAsset = new Asset({ assetId: 'testId' })
      expect(JSON.parse(JSON.stringify(testAsset)).assetId).toEqual('testId')
    })
  })
})
