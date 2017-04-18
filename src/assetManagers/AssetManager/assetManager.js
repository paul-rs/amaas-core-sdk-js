import { AMaaSModel } from '../../core'
import { ASSET_MANAGER_TYPES } from '../enums'

/**
 * Class representing an Asset Manager
 * @extends AMaaSModel
 */
class AssetManager extends AMaaSModel {
  /**
   * Construct a new Asset Manager Model
   * @param {object} params - Asset Manager creation options
   * @param {number} params.assetManagerId - Asset Manager's ID
   * @param {string} params.assetManagerType - Type of Asset Manager (e.g. Hedge Fund)
   * @param {string} params.assetManagerStatus - Status of Asset Manager (e.g. Active)
   * @param {string} params.clientId - ID of the associated client
   * @param {string} params.partyId - ID of the associated party (associated party may be self)
   * @param {string} params.defaultBookOwnerId - ID of the default owner for any books owned by this Asset Manager
   * @param {date} params.defaultTimezone - Default timezone for any books owned by this Asset Manager
   * @param {date} params.defaultBookCloseTime - Default book close time for any books owned by this Asset Manager
   * @param {string} params.createdBy - ID of the user that created the Asset Manager (required if creating a new Asset Manager)
   * @param {string} params.updatedBy - ID of the user that updated the Asset Manager (use if amending existing Asset Manager)
   * @param {date} params.createdTime - Time that the Asset Manager was created (required if creating new Asset Manager)
   * @param {date} params.updatedTime - Time that the Asset Manager was updated (required if amending existing Asset Manager)
   * @param {number} params.version - Version number of the Asset Manager
   */
  constructor({ assetManagerId, assetManagerType, assetManagerStatus='Active', clientId, partyId, defaultBookOwnerId, defaultTimezone='UTC', defaultBookCloseTime, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _assetManagerType: { writable: true, enumerable: false },
      assetManagerType: {
        get: () => this._assetManagerType,
        set: (newAssetManagerType) => {
          if (newAssetManagerType) {
            if (ASSET_MANAGER_TYPES.indexOf(newAssetManagerType) == -1) {
              throw new Error(`Invalid Asset Manager Type: ${newAssetManagerType}`)
            } else {
              this._assetManagerType = newAssetManagerType
            }
          }
        }, enumerable: true
      }
    })
    this.assetManagerId = assetManagerId
    this.assetManagerType = assetManagerType
    this.assetManagerStatus = assetManagerStatus
    this.partyId = partyId
    this.defaultBookOwnerId = defaultBookOwnerId
    this.defaultTimezone = defaultTimezone
    this.defaultBookCloseTime = defaultBookCloseTime
  }
}

export default AssetManager
