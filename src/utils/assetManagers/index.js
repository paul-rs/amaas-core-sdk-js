import { retrieveData, insertData } from '../network'
import AssetManager from '../../assetManagers/AssetManager/assetManager.js'

/**
 * Retrieve Asset Manager data for specified Asset Manager ID
 * @param {number} AMId - Asset Manager ID to retrieve
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function getAssetManager(AMId, callback) {
  const params = {
    AMaaSClass: 'assetManagers',
    AMId
  }
  retrieveData(params, (error, result) => {
    if (error) {
      callback(error)
    } else {
      const assetManager = _parseAM(result)
      callback(null, assetManager)
    }
  })
}

export function _parseAM(object) {
  return new AssetManager({
    assetManagerId: object.asset_manager_id,
    assetManagerType: object.asset_manager_type,
    assetManagerStatus: object.asset_manager_status,
    clientId: object.client_id,
    partyId: object.party_id,
    defaultBookOwnerId: object.default_book_owner_id,
    defaultTimezone: object.default_timezone,
    defaultBookCloseTime: object.default_book_close_time,
    createdBy: object.created_by,
    updatedBy: object.updated_by,
    createdTime: object.created_time,
    updatedTime: object.updated_time
  })
}
