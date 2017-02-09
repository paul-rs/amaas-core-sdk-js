// import { baseURL } from './constants.js'
// import * as types from '../../core/types.js'
import ENDPOINTS from '../../config.js'

import request from 'request'
require('dotenv').config()

/***
 * !This is an internal function that should not be called by the end user!

 * Builds a URL for HTTP request
 * @param {object} anonymous: anonyous object with arguments:
 * @param {string} type: type of HTTP request (GET, POST, etc). Used for validation of parameters
 * @param {string} AMaaSClass: class being requested/sent (e.g. Transaction) (required)
 * @param {string} AMId: Asset Manager Id (required)
 * @param {string} resourceId: Id of the resource being requested (e.g. book_id)
*/
export function buildURL({ AMaaSClass, AMId, resourceId }) {
  let baseURL;
  switch (AMaaSClass) {
    case 'book':
      // baseURL = process.env.booksURL
      baseURL = `${ENDPOINTS.books}/books`
      break
    case 'parties':
      // baseURL = process.env.partiesURL
      baseURL = `${ENDPOINTS.parties}/parties`
      break
    case 'assetManagers':
      baseURL = `${ENDPOINTS.assetManagers}/asset_managers`
      break
    default:
      // baseURL = process.env.booksURL
      baseURL = `${ENDPOINTS.books}/books`
  }
  if (!AMaaSClass) {
    throw new Error('Class is required to build URL')
  } else if (!AMId) {
    return `${baseURL}/`
  } else if (!resourceId) {
    return `${baseURL}/${AMId}`
  } else {
    return `${baseURL}/${AMId}/${resourceId}`
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
export function retrieveData({ AMaaSClass, AMId, resourceId }, callback) {
  // callback(err, result)
  // Class and AMId needed to build the Url and for authorization
  if (!AMaaSClass || !AMId) {
    throw new Error('Both class and AMId are required')
  }
  // If resourceId is supplied, append to url. Otherwise, return all data for AMId
  const url = buildURL({ AMaaSClass, AMId, resourceId })
  // const url = resourceId ? `${baseURL}${AMaaSClass}/${AMId}/${resourceId}` : `${baseURL}${AMaaSClass}/${AMId}/`
  request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      callback(null, JSON.parse(body))
    } else {
      const statusCode = response ? response.statusCode : ''
      const requestError = {
        statusCode,
        error
      }
      callback(requestError)
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
export function insertData({ AMaaSClass, AMId, data }, callback) {
  // if (!AMaaSClass || !AMId || !data) {
  //   throw new Error('Class, AMId and data to insert are required')
  // }
  const url = buildURL({
    AMaaSClass,
    AMId
  })
  // Data is object with required key value pairs for that class
  // const am = 'asset_manager_id'
  // data[am] = AMId
  const params = {
    url,
    json: data
  }
  request.post(params, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      callback(null, body)
    } else if (error) {
      callback(error)
    } else {
      console.log(`Server returned with status code ${response.statusCode}`)
      console.log(`Error message: ${response.body.message}`)
    }
  })
}
