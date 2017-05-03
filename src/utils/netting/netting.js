import { retrieveData, insertData } from '../network'

/**
 * Retrieve Netting for a specific Transaction
 * @function retrieve
 * @memberof module:api.Netting
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of Transaction
 * @param {string} params.resourceId - Transaction ID
 * @param {string} params.token - Authorization token
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is ???. Omit to return Promise
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
 * @memberof module:api.Netting
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Transactions to be netted
 * @param {array} params.data - An Array of Transaction IDs to be netted
 * @param {string} [params.nettingType=Net] - Optional netting type
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is ??? Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with ???
 */
export function send({ AMId, data, nettingType }, callback) {
  const params = {
    AMaaSClass: 'netting',
    AMId,
    data,
    queryParams: [{ key: 'netting_type', values: [nettingType] }]
  }
  let promise = insertData(params).then(result => {
    // TODO: Parse this accoringly
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}
