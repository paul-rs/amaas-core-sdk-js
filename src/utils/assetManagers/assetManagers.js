import { retrieveData, insertData, putData, patchData, deleteData } from '../network'
import AssetManager from '../../assetManagers/AssetManager/assetManager.js'

/**
 * Retrieve Asset Manager data for specified Asset Manager ID
 * @function retrieve
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID to retrieve
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an AssetManager instance
 */
export function retrieve({ AMId }, callback) {
  const params = {
    AMaaSClass: 'assetManagers',
    AMId
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
 * @function insert
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {AssetManager} params.assetManager - Asset Manager instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted AssetManager instance
 */
export function insert({ assetManager }, callback) {
  let stringified, data
  if (assetManager) {
    stringified = JSON.stringify(assetManager)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'assetManagers',
    data
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

/**
 * Amend an Asset Manager (Replaces current Asset Manager with what is passed in)
 * @function amend
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to amend
 * @param {AssetManager} params.assetManager - Asset Manager instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended AssetManager instance
 */
export function amend({ AMId, assetManager }, callback) {
  let stringified, data
  if (assetManager) {
    stringified = JSON.stringify(assetManager)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'assetManagers',
    AMId,
    data
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
 * Deactivate an Asset Manager
 * @function deactivate
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to deactivate
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the deactivated AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the deactivated AssetManager instance
 */
export function deactivate({ AMId }, callback) {
  const params = {
    AMaaSClass: 'assetManagers',
    AMId,
    data: { assetManagerStatus: 'Inactive' }
  }
  let promise = patchData(params).then(result => {
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

/**
 * Reactivate an Asset Manager
 * @function reactivate
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to deactivate
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the reactivated AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the reactivated AssetManager instance
 */
export function reactivate({ AMId }, callback) {
  const params = {
    AMaaSClass: 'assetManagers',
    AMId,
    data: { assetManagerStatus: 'Active' }
  }
  let promise = patchData(params).then(result => {
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

export function _parseAM(object) {
  return new AssetManager(object)
}
