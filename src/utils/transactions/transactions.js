import { retrieveData, insertData, patchData, putData, deleteData } from '../network'
import { Transaction } from '../../transactions'

/**
* Retrieve a Transaction from the database
* @function retrieve
* @memberof module:api.Transactions
* @static
* @param {object} params - object of parameters:
* @param {number} params.AMId - Asset Manager ID of the Transaction's owner
* @param {string} params.resourceId - Transaction ID
* @param {string} params.token - Authorization token
* @param {function} callback - Called with two arguments (error, result) on completion
*/
export function retrieve({ AMId, resourceId, token}, callback) {
  const params = {
    AMaaSClass: 'transactions',
    AMId,
    resourceId,
    token
  }
  let promise = retrieveData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(tran => _parseTransaction(tran))
    } else {
      result = _parseTransaction(result)
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
 * Insert a new Transaction into the database
 * @function insert
 * @memberof module:api.Transactions
 * @static
 * @param {object} params - object of parameters:
 * @param {Transaction} params.transaction - Transaction instance or object to insert
 * @param {number} params.AMId - Asset Manager ID of the Transaction's owner
 * @param {string} params.resourceId - Transaction ID
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function insert({ AMId, transaction, token }, callback) {
 let data
 if (transaction) {
   data = JSON.parse(JSON.stringify(transaction))
 }
 const params = {
   AMaaSClass: 'transactions',
   AMId,
   data,
   token
 }
 let promise = insertData(params).then(result => {
   result = _parseTransaction(result)
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
  * Amend a Transaction
  * @function amend
  * @memberof module:api.Transactions
  * @static
  * @param {object} params - object of parameters:
  * @param {Transaction} params.transaction - Transaction instance or object to amend
  * @param {number} params.AMId - Asset Manager ID of the Transaction's owner
  * @param {string} params.resourceId - Transaction ID
  * @param {string} params.token - Authorization token
  * @param {function} callback - Called with two arguments (error, result) on completion
  */
export function amend({ transaction, AMId, resourceId, token }, callback) {
  let data
  if (transaction) {
    data = JSON.parse(JSON.stringify(transaction))
  }
  const params = {
    AMaaSClass: 'transactions',
    AMId,
    resourceId,
    data,
    token
  }
  let promise = putData(params).then(result => {
    result = _parseTransaction(result)
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
 * Partially amend a Transaction
 * @function partialAmend
 * @memberof module:api.Transactions
 * @static
 * @param {object} params - object of parameters:
 * @param {Transaction} params.changes - object of changes to apply to the Transaction
 * @param {number} params.AMId - Asset Manager ID of the Transaction's owner
 * @param {string} params.resourceId - Transaction ID
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function partialAmend({ changes, AMId, resourceId, token }, callback) {
  const params = {
    AMaaSClass: 'transactions',
    AMId,
    resourceId,
    data: changes,
    token
  }
  let promise = patchData(params).then(result => {
    result = _parseTransaction(result)
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
 * Cancel a Transaction
 * @function cancel
 * @memberof module:api.Transactions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Transaction's owner
 * @param {string} params.resourceId - Transaction ID
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
 export function cancel({ AMId, resourceId }, callback) {
   const params = {
     AMaaSClass: 'transactions',
     AMId,
     resourceId
   }
   let promise = deleteData(params).then(result => {
     result = _parseTransaction(result)
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

function _parseTransaction(t) {
  return new Transaction(t)
}
