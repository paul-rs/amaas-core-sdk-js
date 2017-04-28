require('dotenv').config()
import request from 'superagent'
import { endpoint, userPoolId, clientAppId } from '../../config.js'
import fs from 'fs'
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js'
import expandTilde from 'expand-tilde'

const userPool = new CognitoUserPool({
  UserPoolId: userPoolId,
  ClientId: clientAppId
})
let stage = 'prod'
let token
let credPath

export function configureStage(config) {
  if (config.state) {
    stage = config.stage
  }
  if (config.credentialsPath) {
    credPath = config.credentialsPath
  }
  return
}

export function getEndpoint() {
  switch (stage) {
    case 'staging':
      return `${endpoint.staging}/staging`
    case 'prod':
      return `${endpoint.prod}/prod`
    default:
      console.warn(`Unknown stage variable: ${stage}. Defaulting to /prod`)
      return `${endpoint.prod}/prod`
  }
}

function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === '[object process]'
  } catch(e) {
    return false
  }
}

export function authenticate() {
  let injectedResolve
  let injectedReject
  return new Promise((resolve, reject) => {
    injectedResolve = resolve
    injectedReject = reject
    let path
    if (credPath) {
      path = credPath
    } else {
      path = `${expandTilde('~')}/amaas.js`
    }
    console.log(`Reading credentials from ${path}`)
    fs.readFile(path, (error, data) => {
      const Username = JSON.parse(data).username
      const Password = JSON.parse(data).password
      const authenticationDetails = new AuthenticationDetails({
        Username,
        Password
      })
      const cognitoUser = new CognitoUser({
        Username,
        Pool: userPool
      })
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: res => injectedResolve(res.getIdToken().getJwtToken()),
        onFailure: err => injectedReject(err)
      })
    })
  })
}

export function getToken() {
  let injectedResolve
  let injectedReject
  return new Promise((resolve, reject) => {
    injectedResolve = resolve
    injectedReject = reject
    switch (stage) {
      case 'staging':
        injectedResolve(token)
        break
      case 'prod':
        const cognitoUser = userPool.getCurrentUser()
        if (!cognitoUser) {
          if (isNode()) {
            console.warn('No user in storage, attempting to authenticate...')
            authenticate()
              .then(res => injectedResolve(res))
              .catch(err => injectedReject(err))
          } else {
            injectedReject('Unauthorized, please re-authenticate')
          }
        } else {
          cognitoUser.getSession((err, session) => {
            if (session) {
              console.log('getSession success')
              injectedResolve(session.getIdToken().getJwtToken())
            } else {
              if (isNode()) {
                console.warn('getSession failure, attempting to authenticate')
                  authenticate()
                  .then(res => injectedResolve(res))
                  .catch(err => injectedReject(err))
              } else {
                injectedReject('Unauthorized, please re-authenticate')
              }
            }
          })
        }
        break
      default:
        injectedReject('Missing Authorization')
    }
  })
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
      baseURL = `${getEndpoint()}/book/books`
      break
    case 'parties':
      baseURL = `${getEndpoint()}/party/parties`
      break
    case 'assetManagers':
      baseURL = `${getEndpoint()}/asset-manager/asset-managers`
      break
    case 'assets':
      baseURL = `${getEndpoint()}/asset/assets`
      break
    case 'positions':
      baseURL = `${getEndpoint()}/transaction/positions`
      break
    case 'allocations':
      baseURL = `${getEndpoint()}/transaction/allocations`
      break
    case 'netting':
      baseURL = `${getEndpoint()}/transaction/netting`
      break
    case 'relationships':
      baseURL = `${getEndpoint()}/asset-manager-relationship/asset-manager-relationships`
      break
    case 'transactions':
      baseURL = `${getEndpoint()}/transaction/transactions`
      break
    case 'corporateActions':
      baseURL = `${getEndpoint()}/corporateaction/corporate-actions`
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

export function setAuthorization() {
  switch (stage) {
    case 'staging':
      return 'x-api-key'
    case 'prod':
    default:
      return 'Authorization'
  }
}

export function makeRequest({ method, url, data, query }) {
  return getToken()
    .then(res => {
      console.log(res)
      switch (method) {
        case 'GET':
          return request.get(url).set(setAuthorization(), res).query({ camelcase: true })
        case 'SEARCH':
          return request.get(url).set(setAuthorization(), res).query(data)
        case 'POST':
          return request.post(url).send(data).set(setAuthorization(), res).query(query)
        case 'PUT':
          return request.put(url).send(data).set(setAuthorization(), res).query({ camelcase: true })
        case 'PATCH':
          return request.patch(url).send(data).set(setAuthorization(), res).query({ camelcase: true })
        case 'DELETE':
          return request.delete(url).set(setAuthorization(), res).query({ camelcase: true })
        default:
      }
    })
    .catch(err => Promise.reject(err))
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
export function retrieveData({ AMaaSClass, AMId, resourceId }, callback) {
  // if (stage === 'dev' || stage === 'staging' && !token) {
  //   if (typeof callback !== 'function') {
  //     return Promise.reject('Missing Authorization')
  //   }
  //   callback('Missing Authorization')
  //   return
  // }
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
  let promise = makeRequest({ method: 'GET', url })
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
export function insertData({ AMaaSClass, AMId, resourceId, data, queryParams }, callback) {
  // if (stage === 'dev' || stage === 'staging' && !token) {
  //   if (typeof callback !== 'function') {
  //     return Promise.reject('Missing Authorization')
  //   }
  //   callback('Missing Authorization')
  //   return
  // }
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
  let query = { camelcase: true }
  if (queryParams) {
    for (let i = 0; i < queryParams.length; i++) {
      data[queryParams[i].key] = queryParams[i].values.join()
    }
    Object.assign(query, queryParams)
  }
  let promise = makeRequest({ method: 'POST', url, data, query })
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

export function putData({ AMaaSClass, AMId, resourceId, data }, callback) {
  // if (stage === 'dev' || stage === 'staging' && !token) {
  //   if (typeof callback !== 'function') {
  //     return Promise.reject('Missing Authorization')
  //   }
  //   callback('Missing Authorization')
  //   return
  // }
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
  let promise = makeRequest({ method: 'PUT', url, data })
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

export function patchData({ AMaaSClass, AMId, resourceId, data }, callback) {
  // if (stage === 'dev' || stage === 'staging' && !token) {
  //   if (typeof callback !== 'function') {
  //     return Promise.reject('Missing Authorization')
  //   }
  //   callback('Missing Authorization')
  //   return
  // }
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
  let promise = makeRequest({ method: 'PATCH', url, data })
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

export function deleteData({ AMaaSClass, AMId, resourceId }, callback) {
  // if (stage === 'dev' || stage === 'staging' && !token) {
  //   if (typeof callback !== 'function') {
  //     return Promise.reject('Missing Authorization')
  //   }
  //   callback('Missing Authorization')
  //   return
  // }
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
  let promise = makeRequest({ method: 'DELETE', url })
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
export function searchData({ AMaaSClass, AMId, query }, callback) {
  // if (stage === 'dev' || stage === 'staging' && !token) {
  //   if (typeof callback !== 'function') {
  //     return Promise.reject('Missing Authorization')
  //   }
  //   callback('Missing Authorization')
  //   return
  // }
  let url
  try {
    url = buildURL({
      AMaaSClass,
      AMId
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
    data[query[i].key] = query[i].values.join()
  }
  let promise = makeRequest({ method: 'SEARCH', url, data })
  // let promise = request.get(url).set('x-api-key', token).query(queryString)
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
