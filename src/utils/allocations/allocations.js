import { retrieveData, insertData } from '../network'
import { Link } from '../../children'

/**
 * @namespace api
 * @memberof module:Allocations
 */

/**
 * Retrieve Allocations for a specific Transaction
 * @function retrieve
 * @memberof module:Allocations.api
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of Transaction
 * @param {string} params.resourceId - Transaction ID
 * @param {string} params.token - Authorization token
 */
export function retrieve({ AMId, resourceId, token }, callback) {
  if (!AMId || !resourceId) {
    throw new Error('Asset Manager ID and Transaction ID are required for allocations')
  }
  const params = {
    AMaaSClass: 'allocations',
    AMId,
    resourceId,
    token
  }
  let promise = retrieveData(params).then(result => {
    const allocations = result.map(link => {
      return new Link(link)
    })
    if (typeof callback === 'function') {
      callback(null, allocations)
    }
    return allocations
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Send Allocations for a specific Transaction
 * @function send
 * @memberof module:Allocations.api
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of Transaction
 * @param {string} params.resourceId - Transaction ID
 * @param {object} params.data - Allocation data for the Transaction of the form [ { book_id: '123', quantity: '50', transaction_id: 'XYZ' }, { book_id: '456', quantity: '50', transaction_id: 'ABC' } ]
   If transaction_id is given, the new Transaction that is created will have this as ID.
 * @param {string} params.token - Authorization token
 */
export function send({ AMId, resourceId, data, token }, callback) {
  if (!AMId || !resourceId) {
    throw new Error('Asset Manager ID and Transaction ID are required for allocations')
  }
  const params = {
    AMaaSClass: 'allocations',
    AMId,
    resourceId,
    data,
    token
  }
  let promise = insertData(params).then(result => {
    const allocated = result
    if (typeof callback === 'function') {
      callback(null, allocated)
    }
    return allocated
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}
