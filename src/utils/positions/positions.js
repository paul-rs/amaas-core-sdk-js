import { retrieveData, insertData, patchData, putData, deleteData, searchData } from '../network'

import Position from '../../transactions/Positions/position.js'

export function retrieve({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'positions',
    AMId,
    resourceId,
    token
  }
  let promise = retrieveData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(pos => (
        _parsePos(pos)
      ))
    } else {
      result = _parsePos(result)
    }
    if (typeof callback === 'function') {
      callback(null, result)
    } else {
      return result
    }
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

export function search({ query }, callback) {
  const params = {
    AMaaSClass: 'positions',
    query
  }
  let promise = searchData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(pos => {
        return _parsePos(pos)
      })
    } else {
      result = _parsePos(result)
    }
    if (typeof callback === 'function') {
      callback(null, result)
    } else {
      return result
    }
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

export function _parsePos(pos) {
  return new Position(pos)
}
