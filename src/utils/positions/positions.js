import { retrieveData, insertData, patchData, putData, deleteData, searchData } from '../network'

import Position from '../../transactions/Positions/position.js'

export function retrieve({AMId, resourceId, token}, callback) {
  const params = {
    AMaaSClass: 'positions',
    AMId,
    resourceId,
    token
  }
  let promise = retrieveData(params).then(result => {
    const pos = _parsePos(result)
    if (typeof callback === 'function') {
      callback(null, pos)
    } else {
      return pos
    }
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

export function search({queryKey, queryValue, token}, callback) {
  const params = {
    AMaaSClass: 'positions',
    queryKey,
    queryValue,
    token
  }
  let promise = searchData(params).then(result => {
    const positions = result.map((pos) => {
      return _parsePos(pos)
    })
    if (typeof callback === 'function') {
      callback(null, positions)
    } else {
      return positions
    }
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

export function _parsePos(pos) {
  return new Position({
    createdBy: pos.created_by,
    updatedBy: pos.updated_by,
    createdTime: pos.created_time,
    updatedTime: pos.updated_time,
    version: pos.version,
    assetManagerId: pos.asset_manager_id,
    assetBookId: pos.asset_book_id,
    assetId: pos.asset_id,
    quantity: pos.quantity,
    validFrom: pos.valid_from,
    internalId: pos.internal_id,
    validTo: pos.valid_to,
    clientId: pos.client_id,
    accountingType: pos.accounting_type,
    accountId: pos.account_id
  })
}
