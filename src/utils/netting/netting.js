import { retrieveData, insertData } from '../network'

/**
 * @namespace api
 * @memberof module:Netting
 */

/**
 * Retrieve Netting for a specific Transaction
 * @function retrieve
 * @memberof module:Netting.api
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of Transaction
 * @param {string} params.resourceId - Transaction ID
 * @param {string} params.token - Authorization token
 * @returns {Promise|Array} If callback is supplied, it is called with ???. Otherwise a promise that resolves with ??? is returned
 */
export function retrieve({ AMId, resourceId, token }, callback) {
  if (!AMId || !resourceId) {
    throw new Error('Asset Manager ID and Transaction ID are required for netting')
  }
  const params = {
    AMaaSClass: 'netting',
    AMId,
    resourceId,
    token
  }
  let promise = retrieveData(params).then(result => {
    // TODO: Parse this accordingly
    const netting = result
    if (typeof callback === 'function') {
      callback(null, netting)
    }
    return netting
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Send Transactions to Net
 * @function send
 * @memberof module:Netting.api
 * @static
 * @param {string} - *
 * @returns {string} *
 */
export function send() {
  // TODO: Implement this once the DB testing env is stable
}
