'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.search = search;
exports._parseBook = _parseBook;

var _network = require('../network');

var _book = require('./../../books/Book/book');

var _book2 = _interopRequireDefault(_book);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId,
      token = _ref.token;

  var params = {
    AMaaSClass: 'book',
    AMId: AMId,
    resourceId: resourceId,
    token: token
  };
  var promise = (0, _network.retrieveData)(params).then(function (result) {
    var books = void 0;
    if (!Array.isArray(result)) {
      books = _parseBook(result);
    } else {
      books = result.map(function (book) {
        return _parseBook(book);
      });
    }
    if (typeof callback === 'function') {
      callback(null, books);
    } else {
      return books;
    }
  });
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise;
  }
  promise.catch(function (error) {
    return callback(error);
  });
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
function search(_ref2, callback) {
  var queryKey = _ref2.queryKey,
      queryValue = _ref2.queryValue,
      token = _ref2.token;

  var params = {
    AMaaSClass: 'book',
    queryKey: queryKey,
    queryValue: queryValue,
    token: token
  };
  var promise = (0, _network.searchData)(params).then(function (result) {
    var books = result.map(function (book) {
      return _parseBook(book);
    });
    if (typeof callback === 'function') {
      callback(null, books);
    } else {
      return books;
    }
  });
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise;
  }
  promise.catch(function (error) {
    return callback(error);
  });
}

function _parseBook(object) {
  return new _book2.default(object);
}

function _handleCallback(error, result, callback) {
  if (error) {
    callback(error);
  } else {
    callback(null, result);
  }
}