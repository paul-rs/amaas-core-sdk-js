import { retrieveData, insertData, patchData, putData, deleteData, searchData } from '../network'

import Position from '../../transactions/Positions/position.js'

/**
 * Retrieve a Position from the database
 * @function retrieve
 * @memberof module:api.Positions
 * @static
 * @param {object} params - object of parameters
 * @param {number} params.AMId - Asset Manager ID of the the Positions
 * @param {function} [callback] - Called with two arugments (error, result) on completion. `result` is an array of Positions. Omit to return Promise
 * @returns {Promise|null} If no callback is supplied, returns promise that resolves with an array of Positions
 */
export function retrieve({ AMId }, callback) {
  const params = {
    AMaaSClass: 'positions',
    AMId
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
 * Search for Positions in the database
 * @function search
 * @memberof module:api.Positions
 * @static
 * @param {object} params - object of parameters
 * @param {number} params.AMId - Asset Manager ID of the Asset Manager owning the Postions
 * @param {array} params.query - array of query objects: { key: `string`, values: `array` }<br />
 * Available keys are:
 * <li>assetManagerIds (Required if AMId param is omitted)</li>
 * <li>bookIds</li>
 * <li>assetIds</li>
 * <li>clientIds</li>
 * <li>accountIds</li>
 * <li>accountingTypes</li>
 * <li>positionDate</li>
 * e.g. `[ { key: 'assetManagerIds', values: [1] }, { key: 'bookIds', values: [1, 2, 3] } ]`
 * @param {function} [callback] - Called with two arguments (error, result) on completion. Omit to return Promise
 * @returns {Promise|null} If no callback is supplied, returns promise that resolves with array of Positions
 */
export function search({ AMId, query }, callback) {
  const params = {
    AMaaSClass: 'positions',
    AMId,
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
    }
    return result
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
