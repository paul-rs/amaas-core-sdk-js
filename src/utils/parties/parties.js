import { retrieveData, insertData, patchData, putData, deleteData } from '../network'
import * as PartyClasses from '../../parties'

import Address from '../../parties/Children/address.js'
import Email from '../../parties/Children/email.js'

/**
 * @namespace api
  * @memberof module:Parties
 */

/**
 * Retrieve Party data for specified AMId and partyId
 * @function retrieve
 * @memberof module:Parties.api
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Party
 * @param {string} [params.partyId] - Party ID of the Party. Omitting this will return all Parties associated with that AMId
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise|Array|Party} - If callback supplied, it is called and function returns either a Party instance of array of Party instances. Otherwise promise that resolves with Party instance or array of Party instances is returned
 */
export function retrieve({AMId, partyId, token}, callback) {
  const params = {
    AMaaSClass: 'parties',
    AMId,
    resourceId: partyId,
    token
  }
  let promise = retrieveData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(party => _parseParty(party))
    } else {
      result = _parseParty(result)
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
 * Insert a new Party into the database
 * @function insert
 * @memberof module:Parties.api
 * @static
 * @param {object} params - object of parameters:
 * @param {Party} params.party - Party instance to insert
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise|Party} If callback is supplied, it is called and function returns the inserted Party instance. Otherwise promise that resolves with inserted Party instance is returned
 */
export function insert({party, token}, callback) {
  let stringified, data
  if (party) {
    stringified = JSON.stringify(party)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'parties',
    data,
    token
  }
  let promise = insertData(params).then(result => {
    result = _parseParty(result)
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
 * Amend an existing Party. WARNING: This makes a HTTP PUT request and will replace the existing Party with the one passed in
 * @function amend
 * @memberof module:Parties.api
 * @static
 * @param {object} params - object of parameters:
 * @param {Party} params.party - Amended Party instance to PUT
 * @param {number} params.AMId - AMId of the Party to amend
 * @param {string} params.resourceId - Party ID of the Party to amend
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise|Party} If callback is supplied, it is called and function returns the amended Party instance. Otherwise promise that resolves with amended Party instance is returned
 */
export function amend({party, AMId, resourceId, token}, callback) {
  let stringified, data
  if (party) {
    stringified = JSON.stringify(party)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'parties',
    AMId,
    resourceId,
    data,
    token
  }
  let promise = putData(params).then(result => {
    result = _parseParty(result)
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
 * Partially amend an existing Party.
 * @function partialAmend
 * @memberof module:Parties.api
 * @static
 * @param {object} params - object of parameters:
 * @param {object} params.changes - Object of changes to the Party.
 * @param {string} params.AMId - AMId of the Party to be partially amended
 * @param {string} params.resourceId - Party ID of the Party to be partially amended
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise|Party} If callback is supplied, it is called and function returns the amended Party instance. Otherwise a promise that resolves with the amended Party instance is returned
 */
export function partialAmend({changes, AMId, resourceId, token}, callback) {
  const params = {
    AMaaSClass: 'parties',
    AMId,
    resourceId,
    data: changes,
    token
  }
  let promise = patchData(params).then(result => {
    result = _parseParty(result)
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
 * Deactivate an exising Party. This will set the Party status to 'Inactive'
 * @function deactivate
 * @memberof module:Parties.api
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Party to be deleted
 * @param {string} params.resourceId - Party ID of the Party to be deleted
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @erturns {PRomise|string} If callback is supplied, it is called and the function returns ???. Otherwise a promise that resolves with ??? is returned
 */
export function deactivate({AMId, resourceId, token}, callback) {
  const params = {
    AMaaSClass: 'parties',
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

export function _parseParty(object) {
  if (!object.partyType) {
    return new PartyClasses.Party(object)
  }
  return new PartyClasses[object.partyType](object)
}
