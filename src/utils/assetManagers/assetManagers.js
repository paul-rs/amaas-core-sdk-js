import { retrieveData, insertData, putData, patchData, deleteData } from '../network'
import AssetManager from '../../assetManagers/AssetManager/assetManager.js'

/**
 * Retrieve Asset Manager data for specified Asset Manager ID
 * @param {number} AMId - Asset Manager ID to retrieve
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function retrieve(AMId, callback) {
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

/**
 * Insert a new Asset Manager into the database
 * @param {AssetManager} assetManager - Asset Manager instance to insert
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function insert(assetManager, callback) {
  const stringified = JSON.stringify(assetManager)
  const params = {
    AMaaSClass: 'assetManagers',
    data: JSON.parse(stringified)
  }
  insertData(params, (error, result) => {
    _handleCallback(error, result, callback)
  })
}

// export function amendAM(assetManager, AMId, resourceId, callback) {
//   const stringified = JSON.stringify(assetManager)
//   const params = {
//     AMaaSClass: 'assetManagers',
//     AMId,
//     resourceId,
//     data: JSON.parse(stringified)
//   }
//   putData(params, (error, result) => {
//     _handleCallback(error, result, callback)
//   })
// }
//
// export function partialAmendAM(changes, AMId, resourceId, callback) {
//   const params = {
//     AMaaSClass: 'assetManagers',
//     AMId,
//     resourceId,
//     data: changes
//   }
//   patchData(params, (error, result) => {
//     _handleCallback(error, result, callback)
//   })
// }

/**
 * Deactive an existing Asset Manager (AM)
 * @param {string} AMId - AM ID of the AM to deactive
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function deactivate(AMId, callback) {
  const params = {
    AMaaSClass: 'assetManagers',
    AMId
  }
  deleteData(params, (error, result) => {
    _handleCallback(error, result, callback)
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

export function _handleCallback(error, result, callback) {
  if (error) {
    callback(error)
  } else {
    callback(null, result)
  }
}
