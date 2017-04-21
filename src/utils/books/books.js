import { retrieveData, searchData, putData, patchData, insertData } from '../network'
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
    let books
    if (!Array.isArray(result)) {
      books = _parseBook(result)
    } else {
      books = result.map(book => {
        return _parseBook(book)
      })
    }
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

/**
 * Insert a new Book into the database
 * @function insert
 * @memberof module:Books.api
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the AM insering the Book
 * @param {Asset} params.book - Book instance to insert
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function insert({ AMId, book, token }, callback) {
  let data
  if (book) {
    data = JSON.parse(JSON.stringify(book))
  }
  const params = {
    AMaaSClass: 'book',
    AMId,
    data,
    token
  }
  let promise = insertData(params).then(result => {
    result = _parseBook(result)
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Amend an existing Book. WARNING: This makes a HTTP PUT request and will replace the existing Book with the one passed in
 * @function amend
 * @memberof module:Books.api
 * @static
 * @param {object} params - object of parameters:
 * @param {Asset} params.book - Amended Book instance to PUT
 * @param {number} params.AMId - AMId of the Book to amend
 * @param {string} params.resourceId - Book ID of the Book to amend
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function amend({ book, AMId, resourceId, token }, callback) {
  let data
  if (book) {
    data = JSON.parse(JSON.stringify(book))
  }
  const params = {
    AMaaSClass: 'book',
    AMId,
    resourceId,
    data,
    token
  }
  let promise = putData(params).then(result => {
    result = _parseBook(result)
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Retire a Book. This will set the Book status to 'Retired'.
 * @function retire
 * @memberof module:Books.api
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Books to be retired
 * @param {string} params.resourceId - Book ID of the Book to be retired
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function retire({ AMId, resourceId, token }, callback) {
  const params = {
    AMaaSClass: 'book',
    AMId,
    resourceId,
    data: { bookStatus: 'Retired' },
    token
  }
  let promise = patchData(params).then(result => {
    result = _parseBook(result)
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Reactivate a Book. This will set the Book status to 'Active'.
 * @function reactivate
 * @memberof module:Books.api
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Books to be reactivated
 * @param {string} params.resourceId - Book ID of the Book to be reactivated
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function reactivate({ AMId, resourceId, token }, callback) {
  const params = {
    AMaaSClass: 'book',
    AMId,
    resourceId,
    data: { bookStatus: 'Active' },
    token
  }
  let promise = patchData(params).then(result => {
    result = _parseBook(result)
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
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
