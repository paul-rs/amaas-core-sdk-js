import { retrieveData, insertData } from '../network'

import Transaction from '../../transactions/Transaction/transaction'

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
    const allocations = result
    if (typeof callback === 'function') {
      callback(null, allocations)
    } else {
      return allocations
    }
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

export function send({ AMId, resourceId, data, token }, callback) {
  if (!AMId || !resourceId) {
    throw new Error('Asset Manager ID and Transaction ID are required for allocations')
  }
  const params = {
    AMaaSClass: 'allocations',
    AMId,
    resourceId,
    data
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
