import { retrieveData, insertData, putData, patchData, deleteData } from '../network'
import AssetManager from '../../assetManagers/AssetManager/assetManager.js'

/**
 * Retrieve Asset Manager data for specified Asset Manager ID
 * @param {number} AMId - Asset Manager ID to retrieve
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function retrieve({AMId, token}, callback) {
  const params = {
    AMaaSClass: 'assetManagers',
    AMId, token
  }
  let promise = retrieveData(params).then(result => {
    const assetManager = _parseAM(result)
    if (typeof callback === 'function') {
      callback(null, assetManager)
    }
    return assetManager
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Insert a new Asset Manager into the database
 * @param {AssetManager} assetManager - Asset Manager instance to insert
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function insert({assetManager, token}, callback) {
  let stringified, data
  if (assetManager) {
    stringified = JSON.stringify(assetManager)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'assetManagers',
    data,
    token
  }
  let promise = insertData(params).then(result => {
    result = _parseAM(result)
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

export function amend({assetManager, AMId, token}, callback) {
  let stringified, data
  if (assetManager) {
    stringified = JSON.stringify(assetManager)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'assetManagers',
    AMId,
    data,
    token
  }
  let promise = putData(params).then(result => {
    result = _parseAM(result)
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

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
export function deactivate({AMId, token}, callback) {
  const params = {
    AMaaSClass: 'assetManagers',
    AMId,
    token
  }
  let promise = deleteData(params).then(result => {
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

export function _parseAM(object) {
  return new AssetManager(object)
  // return new AssetManager({
  //   assetManagerId: object.asset_manager_id,
  //   assetManagerType: object.asset_manager_type,
  //   assetManagerStatus: object.asset_manager_status,
  //   clientId: object.client_id,
  //   partyId: object.party_id,
  //   defaultBookOwnerId: object.default_book_owner_id,
  //   defaultTimezone: object.default_timezone,
  //   defaultBookCloseTime: object.default_book_close_time,
  //   createdBy: object.created_by,
  //   updatedBy: object.updated_by,
  //   createdTime: object.created_time,
  //   updatedTime: object.updated_time
  // })
}
