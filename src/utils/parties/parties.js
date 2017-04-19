import { retrieveData, insertData, patchData, putData, deleteData } from '../network'
import * as PartyClasses from '../../parties'

import Address from '../../parties/Children/address.js'
import Email from '../../parties/Children/email.js'
import Reference from '../../core/Reference/Reference.js'

/**
 * Retrieve Party data for specified AMId and partyId
 * @param {number} AMId - Asset Manager ID of the Party
 * @param {string} [partyId] - Party ID of the Party. Omitting this will return all Parties associated with that AMId
 * @param {function} callback - Called with two arguments (error, result) on completion
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
 * @param {Party} party - Party instance to insert
 * @param {function} callback - Called with two arguments (error, result) on completion
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
 * @param {Party} party - Amended Party instance to PUT
 * @param {number} AMId - AMId of the Party to amend
 * @param {string} resourceId - Party ID of the Party to amend
 * @param {function} callback - Called with two arguments (error, result) on completion
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
 * @param {object} changes - Object of changes to the Party.
 * @param {string} AMId - AMId of the Party to be partially amended
 * @param {string} resourceId - Party ID of the Party to be partially amended
 * @param {function} callback - Called with two arguments (error, result) on completion
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
 * Delete an exising Party. This will set the Party status to 'Inactive'.
 * @param {string} AMId - AMId of the Party to be deleted
 * @param {string} resourceId - Party ID of the Party to be deleted
 * @param {function} callback - Called with two arguments (error, result) on completion
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
