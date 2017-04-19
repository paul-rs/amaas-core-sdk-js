import { retrieveData, searchData } from '../network'
import Book from './../../books/Book/book'

/**
 * Retrieve Book data for specified AMId and bookId
 * @param {number} AMId - Asset Manager ID of the Asset
 * @param {string} [bookId] - ID of the Book
 * @param {function} callback - Called with two arguments (error, result) on completion
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
