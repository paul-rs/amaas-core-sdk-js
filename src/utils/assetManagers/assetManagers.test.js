import { _parseAM, getAssetManager } from './assetManagers.js'
import AssetManager from '../../assetManagers/AssetManager/assetManager.js'

describe('_parseAM function', () => {
  it('should return an instance of AssetManager class', () => {
    const json = {
      asset_manager_id: '48576',
      client_id: 'testClient',
      default_timezone: 'UTC',
      version: 1
    }
    const parsedAM = _parseAM(json)
    const expectedClass = new AssetManager({
      assetManagerId: '48576',
      clientId: 'testClient',
      defaultTimezone: 'UTC',
      version: 1
    })
    expect(parsedAM).toEqual(expectedClass)
  })
})
