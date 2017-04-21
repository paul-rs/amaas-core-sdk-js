'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.search = search;
exports.insert = insert;
exports.amend = amend;
exports.retire = retire;
exports.reactivate = reactivate;
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
function insert(_ref3, callback) {
  var AMId = _ref3.AMId,
      book = _ref3.book,
      token = _ref3.token;

  var data = void 0;
  if (book) {
    data = JSON.parse(JSON.stringify(book));
  }
  var params = {
    AMaaSClass: 'book',
    AMId: AMId,
    data: data,
    token: token
  };
  var promise = (0, _network.insertData)(params).then(function (result) {
    result = _parseBook(result);
    if (typeof callback === 'function') {
      callback(null, result);
    }
    return result;
  });
  if (typeof callback !== 'function') {
    return promise;
  }
  promise.catch(function (error) {
    return callback(error);
  });
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
function amend(_ref4, callback) {
  var book = _ref4.book,
      AMId = _ref4.AMId,
      resourceId = _ref4.resourceId,
      token = _ref4.token;

  var data = void 0;
  if (book) {
    data = JSON.parse(JSON.stringify(book));
  }
  var params = {
    AMaaSClass: 'book',
    AMId: AMId,
    resrouceId: resrouceId,
    data: data,
    token: token
  };
  var promise = putData(params).then(function (result) {
    result = _parseBook(result);
    if (typeof callback === 'function') {
      callback(null, result);
    }
    return result;
  });
  if (typeof callback !== 'function') {
    return promise;
  }
  promise.catch(function (error) {
    return callback(error);
  });
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
function retire(_ref5, callback) {
  var AMId = _ref5.AMId,
      resourceId = _ref5.resourceId,
      token = _ref5.token;

  var params = {
    AMaaSClass: 'book',
    AMId: AMId,
    resourceId: resourceId,
    data: { bookStatus: 'Retired' },
    token: token
  };
  var promise = (0, _network.patchData)(params).then(function (result) {
    result = _parseBook(result);
    if (typeof callback === 'function') {
      callback(null, result);
    }
    return result;
  });
  if (typeof callback !== 'function') {
    return promise;
  }
  promise.catch(function (error) {
    return callback(error);
  });
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
function reactivate(_ref6, callback) {
  var AMId = _ref6.AMId,
      resourceId = _ref6.resourceId,
      token = _ref6.token;

  var params = {
    AMaaSClass: 'book',
    AMId: AMId,
    resourceId: resourceId,
    data: { bookStatus: 'Active' },
    token: token
  };
  var promise = (0, _network.patchData)(params).then(function (result) {
    result = _parseBook(result);
    if (typeof callback === 'function') {
      callback(null, result);
    }
    return result;
  });
  if (typeof callback !== 'function') {
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