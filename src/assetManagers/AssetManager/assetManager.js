import { AMaaSModel } from '../../core'

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
  constructor({ assetManagerId, assetManagerType, assetManagerStatus, clientId, partyId, defaultBookOwnerId, defaultTimezone, defaultBookCloseTime, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.assetManagerId = assetManagerId
    this.assetManagerType = assetManagerType
    this.assetManagerStatus = assetManagerStatus
    this.clientId = clientId
    this.partyId = partyId
    this.defaultBookOwnerId = defaultBookOwnerId
    this.defaultTimezone = defaultTimezone
    this.defaultBookCloseTime = defaultBookCloseTime
  }

  toJSON() {
    return {
      asset_manager_id: this.assetManagerId,
      asset_manager_type: this.assetManagerType,
      asset_manager_status: this.assetManagerStatus,
      client_id: this.clientId,
      party_id: this.partyId,
      default_book_owner_id: this.defaultBookOwnerId,
      default_timezone: this.defaultTimezone,
      default_book_close_time: this.defaultBookCloseTime,
      created_by: this.createdBy,
      updated_by: this.updatedBy,
      created_time: this.createdTime,
      updated_time: this.updatedTime,
      version: this.version
    }
  }
}

export default AssetManager
