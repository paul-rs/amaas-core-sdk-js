import { retrieveData, insertData } from '../network'

/**
 * Retrieve Netting for a specific Transaction
 * @param {number} AMId - Asset Manager ID of Transaction
 * @param {string} resourceId - Transaction ID
 * @param {string} token - Authorization token
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
 * @param {number} AMId - Asset Manager ID of Transaction
 * @param {array} data - TBC
 * @param {string} token - Authorization token
 */
export function send() {
  // TODO: Implement this once the DB testing env is stable
}
