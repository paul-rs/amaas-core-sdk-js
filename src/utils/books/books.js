import { retrieveData, searchData } from '../network'
import Book from './../../books/Book/book'

/**
 * @namespace api
 * @memberof module:Books
 */

/**
 * Retrieve Book data for specified AMId and bookId
 * @function retrieve
 * @memberof module:Books.api
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Asset
 * @param {string} [params.resourceId] - ID of the Book
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise|Array|Book} If callback supplied, it is called and the function returns either an array of Books or a single Book instance. Otherwise promise is returned that resolves with either an array of Books or a single Book instance
 */
export function retrieve({AMId, resourceId, token}, callback) {
  const params = {
    AMaaSClass: 'book',
    AMId,
    resourceId,
    token
  }
  let promise = retrieveData(params).then(result => {
    if (!Array.isArray(result)) {
      callback(null, _parseBook(result))
      return
    }
    const books = result.map(book => {
      return _parseBook(book)
    })
    if (typeof callback === 'function') {
      callback(null, books)
    } else {
      return books
    }
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Search Books for specified AMId and bookId
 * @function search
 * @memberof module:Books.api
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.queryKey - Key of the category over which to search (e.g. bookIds)
 * @param {string} params.queryValue - Value of the key for the search (e.g. 123 where 123 is a Book ID and queryKey = bookIds)
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise|Array} If callback supplied, it is called and the function returns an array of Books. Otherwise promise is returned that resolves with an array of Books
 */
export function search({queryKey, queryValue, token}, callback) {
  const params = {
    AMaaSClass: 'book',
    queryKey,
    queryValue,
    token
  }
  let promise = searchData(params).then(result => {
    const books = result.map((book) => {
      return _parseBook(book)
    })
    if (typeof callback === 'function') {
      callback(null, books)
    } else {
      return books
    }
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

export function _parseBook(object) {
  return new Book(object)
}

function _handleCallback(error, result, callback) {
  if (error) {
    callback(error)
  } else {
    callback(null, result)
  }
}
