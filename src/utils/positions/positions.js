import { retrieveData, insertData, patchData, putData, deleteData, searchData } from '../network'

import Position from '../../transactions/Positions/position.js'

export function retrieve(AMId, resourceId, token, callback) {
  const params = {
    AMaaSClass: 'positions',
    AMId,
    resourceId,
    token
  }
  retrieveData(params, (error, result) => {
    if (error) {
      callback(error)
    } else {
      const pos = _parsePos(result)
      callback(null, pos)
    }
  })
}

export function search(queryKey, queryValue, token, callback) {
  const params = {
    AMaaSClass: 'positions',
    queryKey,
    queryValue,
    token
  }
  searchData(params, (error, result) => {
    if (error) {
      callback(error)
    } else {
      const positions = result.map((pos) => {
        return _parsePos(pos)
      })
      callback(null, positions)
    }
  })
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
