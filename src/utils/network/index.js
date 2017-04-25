import ENDPOINTS from '../../config.js'

import request from 'superagent'
require('dotenv').config()

let stage
export function configureStage(config) {
  return stage = config
}
export function endpoint() {
  if (!stage) {
    return 'https://iwe48ph25i.execute-api.ap-southeast-1.amazonaws.com/dev'
  }
  return `https://iwe48ph25i.execute-api.ap-southeast-1.amazonaws.com/${stage}`
}

/***
 * !This is an internal function that should not be called by the end user!

 * Builds a URL for HTTP request
 * @param {object} anonymous: anonyous object with arguments:
 * @param {string} AMaaSClass: class being requested/sent (e.g. Transaction) (required)
 * @param {string} AMId: Asset Manager Id (required)
 * @param {string} resourceId: Id of the resource being requested (e.g. book_id)
*/
export function buildURL({ AMaaSClass, AMId, resourceId }) {
  let baseURL = ''
  switch (AMaaSClass) {
    case 'book':
      baseURL = `${endpoint()}/book/books`
      // baseURL = `${ENDPOINTS.books}/books`
      break
    case 'parties':
      baseURL = `${endpoint()}/party/parties`
      // baseURL = `${ENDPOINTS.parties}/parties`
      break
    case 'assetManagers':
      baseURL = `${endpoint()}/asset-manager/asset-managers`
      // baseURL = `${ENDPOINTS.assetManagers}/asset-managers`
      break
    case 'assets':
      baseURL = `${endpoint()}/asset/assets`
      // baseURL = `${ENDPOINTS.assets}/assets`
      break
    case 'positions':
      baseURL = `${endpoint()}/position/positions`
      // baseURL = `${ENDPOINTS.transactions}/positions`
      break
    case 'allocations':
      baseURL = `${endpoint()}/allocation/allocations`
      // baseURL = `${ENDPOINTS.transactions}/allocations`
      break
    case 'netting':
      baseURL = `${endpoint()}/netting/netting`
      // baseURL = `${ENDPOINTS.transactions}/netting`
      break
    case 'relationships':
      baseURL = `${endpoint()}/asset-manager-relationship/asset-manager-relationships`
      // baseURL = `${ENDPOINTS.assetManagers}/asset-manager-relationships`
      break
    case 'transactions':
      baseURL = `${endpoint()}/transaction/transactions`
      // baseURL = `${ENDPOINTS.transactions}/transactions`
      break
    default:
      throw new Error(`Invalid class type: ${AMaaSClass}`)
  }
  if (!AMId) {
    return `${baseURL}/`
  } else if (!resourceId) {
    return `${baseURL}/${AMId}`
  } else {
    return `${baseURL}/${AMId}/${resourceId}`
  }
}

export function makeRequest({ method, url, data, token }) {
  switch (method) {
    case 'GET':
      return request.get(url).set('x-api-key', token).query({ camelcase: true })
    case 'SEARCH':
      return request.get(url).set('x-api-key', token).query(data)
    case 'POST':
      return request.post(url).send(data).set('x-api-key', token).query({ camelcase: true })
    case 'PUT':
      return request.put(url).send(data).set('x-api-key', token).query({ camelcase: true })
    case 'PATCH':
      return request.patch(url).send(data).set('x-api-key', token).query({ camelcase: true })
    case 'DELETE':
      return request.delete(url).set('x-api-key', token).query({ camelcase: true })
    default:
  }
}

/***
 * !This is an internal function that should not be called by the end user!
 * !Wrapper functions are exposed for the individual asset classes for consumption!

 * Base function for retrieval of data from the database (GET request)
 * @param {object} anonymous: anonymous object with arguments:
 * @param {string} AMaaSClass: class being requested/sent (e.g. Transaction) (required)
 * @param {string} AMId: Asset Manager Id (required)
 * @param {string} resourceId: Id of the resource being requested (e.g. book_id)
*/
export function retrieveData({ AMaaSClass, AMId, resourceId, token }, callback) {
  // callback(err, result)
  // Class and AMId needed to build the Url and for authorization
  if (!AMaaSClass || !AMId) {
    if (typeof callback !== 'function') {
      return Promise.reject('Both class and AMId are required')
    }
    callback('Both class and AMId are required')
    return
    // throw new Error('Both class and AMId are required')
  }
  if (!token) {
    if (typeof callback !== 'function') {
      return Promise.reject('Missing Authorization')
    }
    callback('Missing Authorization')
    return
    // throw new Error('Missing Authorization')
  }
  let url
  // If resourceId is supplied, append to url. Otherwise, return all data for AMId
  try {
    url = buildURL({ AMaaSClass, AMId, resourceId })
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e)
    }
    callback(e)
    return
  }
  let promise = makeRequest({ method: 'GET', url, token })
  // let promise = request.get(url).set('x-api-key', token).query({ camelcase: true })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(response => response.body)
  }
  promise.end((error, response) => {
    if (!error && response.status == 200) {
      callback(null, response.body)
    } else {
      const statusCode = response ? response.status : ''
      const requestError = {statusCode, error}
      if (typeof callback === 'function') {
        callback(requestError)
      }
    }
  })
}

/***
 * !This is an internal function that should not be called by the end user!
 * !Wrapper functions are exposed for the individual asset classes for consumption!

 * Base function for insertion of data to the database (POST request)
 * @param {object} anonymous: anonymous object with arguments:
 * @param {string} AMaaSClass: class being requested/sent (e.g. Transaction) (required)
 * @param {string} AMId: Asset Manager Id (required)
 * @param {string} data: data to insert into database
*/
export function insertData({ AMaaSClass, AMId, resourceId, data, token }, callback) {
  // if (!AMaaSClass || !AMId || !data) {
  //   throw new Error('Class, AMId and data to insert are required')
  // }
  if (!token) {
    if (typeof callback !== 'function') {
      return Promise.reject('Missing Authorization')
    }
    callback('Missing Authorization')
    return
  }
  let url
  try {
    url = buildURL({
      AMaaSClass,
      AMId,
      resourceId
    })
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e)
    }
    callback(e)
    return
  }
  // Data is object with required key value pairs for that class
  // const am = 'asset_manager_id'
  // data[am] = AMId
  const params = {
    url,
    json: data
  }
  let promise = makeRequest({ method: 'POST', url, data, token })
  // let promise = request.post(url).send(data).set('x-api-key', token).query({ camelcase: true })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(response => response.body)
  }
  promise.end((error, response) => {
    let body
    if (response) body = response.body
    _networkCallback(error, response, body, callback)
  })
}

export function putData({ AMaaSClass, AMId, resourceId, data, token }, callback) {
  if (!token) {
    if (typeof callback !== 'function') {
      return Promise.reject('Missing Authorization')
    }
    callback('Missing Authorization')
    return
  }
  let url
  try {
    url = buildURL({
      AMaaSClass,
      AMId,
      resourceId
    })
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e)
    }
    callback(e)
    return
  }
  const params = {
    url,
    json: data
  }
  let promise = makeRequest({ method: 'PUT', url, data, token })
  // let promise = request.put(url).send(data).set('x-api-key', token).query({ camelcase: true })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(response => response.body)
  }
  promise.end((error, response) => {
    let body
    if (response) body = response.body
    _networkCallback(error, response, body, callback)
  })
}

export function patchData({ AMaaSClass, AMId, resourceId, data, token }, callback) {
  if (!token) {
    if (typeof callback !== 'function') {
      return Promise.reject('Missing Authorization')
    }
    callback('Missing Authorization')
    return
  }
  let url
  try {
    url = buildURL({
      AMaaSClass,
      AMId,
      resourceId
    })
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e)
    }
    callback(e)
    return
  }
  const params = {
    url,
    json: data
  }
  let promise = makeRequest({ method: 'PATCH', url, data, token })
  // let promise = request.patch(url).send(data).set('x-api-key', token).query({ camelcase: true })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(response => response.body)
  }
  promise.end((error, response) => {
    let body
    if (response) body = response.body
    _networkCallback(error, response, body, callback)
  })
}

export function deleteData({ AMaaSClass, AMId, resourceId, token }, callback) {
  if (!token) {
    if (typeof callback !== 'function') {
      return Promise.reject('Missing Authorization')
    }
    callback('Missing Authorization')
    return
  }
  let url
  try {
    url = buildURL({
      AMaaSClass,
      AMId,
      resourceId
    })
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e)
    }
    callback(e)
    return
  }
  let promise = makeRequest({ method: 'DELETE', url, token })
  // let promise = request.delete(url).set('x-api-key', token).query({ camelcase: true })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(response => response.body)
  }
  promise.end((error, response) => {
    let body
    if (response) body = response.body
    _networkCallback(error, response, body, callback)
  })
}

/*
 * query is an array of objects: { key: <string>, values: <array> }
 * key is the key to search over (depends on the specific service)
 * and values are all the values to search over. E.g.
 *   const queries = [
 *     { key: 'assetIds', values: [1, 2, 44, 'asf'] },
 *     { key: 'assetClasses', values: ['Currency', 'Bond', 'Equity']},
 *     { key: 'assetTypes', values: ['GovernmentBond, ForeignExchange']}
 *   ]
 */
export function searchData({ AMaaSClass, query, token }, callback) {
  if (!token) {
    if (typeof callback !== 'function') {
      return Promise.reject('Missing Authorization')
    }
    callback('Missing Authorization')
    return
  }
  let url
  try {
    url = buildURL({
      AMaaSClass
    })
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e)
    }
    callback(e)
    return
  }
  let data = { camelcase: true }
  for (let i = 0; i < query.length; i++) {
    queryString[query[i].key] = query[i].values.join()
  }
  let promise = makeRequest({ method: 'SEARCH', url, token, data })
  // let promise = request.get(url).set('x-api-key', token).query(queryString)
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(response => response)
  }
  promise.end((error, response) => {
    let body
    if (response) body = response.body
    _networkCallback(error, response, body, callback)
  })
}

function _networkCallback(error, response, body, callback) {
  if (typeof callback !== 'function') {
    return false
  }
  if (!error && response.status === 200) {
    callback(null, body)
  } else if (error) {
    callback(error)
  } else {
    callback({ response, body })
  }
}
