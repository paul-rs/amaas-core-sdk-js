import { retrieveData, insertData, patchData, putData, deleteData } from '../network'

import * as AssetClasses from '../../assets'

import Reference from '../../core/Reference/Reference.js'

import { _parseChildren } from '../parties/parties.js'

/**
 * Retrieve Asset data for specified AMId and partyId
 * @function retrieve
 * @memberof module:Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Asset
 * @param {string} [params.resourceId] - Party ID of the Asset. Omitting this will return all Assets associated with that AMId
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function retrieve({AMId, resourceId, token}, callback) {
  const params = {
    AMaaSClass: 'assets',
    AMId,
    resourceId,
    token
  }
  let promise = retrieveData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(asset => _parseAsset(asset))
    } else {
      result = _parseAsset(result)
    }
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
 * Insert a new Asset into the database
 * @function insert
 * @memberof module:Assets
 * @static
 * @param {object} - object of parameters:
 * @param {Asset} params.asset - Asset instance to insert
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function insert({asset, token}, callback) {
  let stringified, data
  if (asset) {
    stringified = JSON.stringify(asset)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'assets',
    data,
    token
  }
  let promise = insertData(params).then(result => {
    result = _parseAsset(result)
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
 * Amend an existing Asset. WARNING: This makes a HTTP PUT request and will replace the existing Asset with the one passed in
 * @function insert
 * @memberof module:Assets
 * @static
 * @param {object} - object of parameters:
 * @param {Asset} params.asset - Amended Asset instance to PUT
 * @param {number} params.AMId - AMId of the Party to amend
 * @param {string} params.resourceId - Asset ID of the Party to amend
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function amend({asset, AMId, resourceId, token}, callback) {
  let stringified, data
  if (asset) {
    stringified = JSON.stringify(asset)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'assets',
    AMId,
    resourceId,
    data,
    token
  }
  let promise = putData(params).then(result => {
    result = _parseAsset(result)
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
 * Partially amend an existing Asset.
 * @function insert
 * @memberof module:Assets
 * @static
 * @param {object} - object of parameters:
 * @param {object} params.changes - Object of changes to the Asset.
 * @param {string} params.AMId - AMId of the Asset to be partially amended
 * @param {string} params.resourceId - Asset ID of the Asset to be partially amended
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function partialAmend({changes, AMId, resourceId, token}, callback) {
  const params = {
    AMaaSClass: 'assets',
    AMId,
    resourceId,
    data: changes,
    token
  }
  let promise = patchData(params).then(result => {
    result = _parseAsset(result)
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
 * Delete an exising Asset. This will set the Asset status to 'Inactive'.
 * @function insert
 * @memberof module:Assets
 * @static
 * @param {object} - object of parameters:
 * @param {string} params.AMId - AMId of the Asset to be deleted
 * @param {string} params.resourceId - Asset ID of the Asset to be deleted
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function deactivate({AMId, resourceId, token}, callback) {
  const params = {
    AMaaSClass: 'assets',
    AMId,
    resourceId,
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

export function _parseAsset(object) {
  if (!object.assetType) {
    return new AssetClasses.Asset(object)
  }
  return new AssetClasses[object.assetType](object)
}
