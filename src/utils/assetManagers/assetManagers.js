import { retrieveData, insertData, putData, patchData, deleteData } from '../network'
import AssetManager from '../../assetManagers/AssetManager/assetManager.js'

/**
 * @namespace api
 * @memberof module:AssetManagers
 */

/**
 * Retrieve Asset Manager data for specified Asset Manager ID
 * @function retrieve
 * @memberof module:AssetManagers.api
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID to retrieve
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise | AssetManager} If callback supplied, callback(null, AssetManager) is called. Otherwise promise is returned that resolves with AssetManager instance
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
 * @function insert
 * @memberof module:AssetManagers.api
 * @static
 * @param {object} params - object of parameters:
 * @param {AssetManager} params.assetManager - Asset Manager instance to insert
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise | AssetManager} If callback supplied, callback(null, AssetManager) is called. Otherwise promise is returned that resolves with AssetManager instance
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

/**
 * Amend an Asset Manager (Replaces current Asset Manager with what is passed in)
 * @function amend
 * @memberof module:AssetManagers.api
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to amend
 * @param {AssetManager} params.assetManager - Asset Manager instance to insert
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise | AssetManager} If callback supplied, callback(null, AssetManager) is called. Otherwise promise is returned that resolves with AssetManager instance
 */
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
 * Deactivate an Asset Manager
 * @function deactivate
 * @memberof module:AssetManagers.api
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to deactivate
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise | AssetManager} ???
 */
export function deactivate({AMId, token}, callback) {
  const params = {
    AMaaSClass: 'assetManagers',
    AMId,
    data: { assetManagerStatus: 'Inactive' },
    token
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
 * @memberof module:AssetManagers.api
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to deactivate
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise | AssetManager} ???
 */
export function reactivate({AMId, token}, callback) {
  const params = {
    AMaaSClass: 'assetManagers',
    AMId,
    data: { assetManagerStatus: 'Active' },
    token
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
