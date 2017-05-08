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
 * Retrieve Book data for specified AMId and bookId
 * @function retrieve
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Asset
 * @param {string} [params.resourceId] - ID of the Book. Omit to return all Books for the supplied AMId
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Books or a single Book instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Books or a single Book instance
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId;

  var params = {
    AMaaSClass: 'book',
    AMId: AMId,
    resourceId: resourceId
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
    }
    return books;
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
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {number} [params.AMId] - Asset Manager ID of the user calling the API. If omitted, you must pass assetManagerIds in the query
 * @param {object} params.query - Search parameters of the form: { `key`: `[values]` }<br />
 * Available keys are:
 * <li>assetManagerIds (Required if AMId param is omitted)</li>
 * <li>clientIds</li>
 * <li>bookStatuses</li>
 * <li>bookIds</li>
 * <li>ownerIds</li>
 * e.g. `{ assetManagerIds: [1], bookIds: [1, 2, 3] }`
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Books or a single Book instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Books or a single Book instance
 */
function search(_ref2, callback) {
  var AMId = _ref2.AMId,
      query = _ref2.query;

  var params = {
    AMaaSClass: 'book',
    AMId: AMId,
    query: query
  };
  var promise = (0, _network.searchData)(params).then(function (result) {
    var books = result.map(function (book) {
      return _parseBook(book);
    });
    if (typeof callback === 'function') {
      callback(null, books);
    }
    return books;
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
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the AM insering the Book
 * @param {Asset} params.book - Book instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted Book instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Book instance
 */
function insert(_ref3, callback) {
  var AMId = _ref3.AMId,
      book = _ref3.book;

  var data = void 0;
  if (book) {
    data = JSON.parse(JSON.stringify(book));
  }
  var params = {
    AMaaSClass: 'book',
    AMId: AMId,
    data: data
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
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Book to amend
 * @param {Asset} params.book - Amended Book instance to PUT
 * @param {string} params.resourceId - Book ID of the Book to amend
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Book instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended Book instance
 */
function amend(_ref4, callback) {
  var AMId = _ref4.AMId,
      book = _ref4.book,
      resourceId = _ref4.resourceId;

  var data = void 0;
  if (book) {
    data = JSON.parse(JSON.stringify(book));
  }
  var params = {
    AMaaSClass: 'book',
    AMId: AMId,
    resourceId: resourceId,
    data: data
  };
  var promise = (0, _network.putData)(params).then(function (result) {
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
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Books to be retired
 * @param {string} params.resourceId - Book ID of the Book to be retired
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the retired Book instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the retired Book instance
 */
function retire(_ref5, callback) {
  var AMId = _ref5.AMId,
      resourceId = _ref5.resourceId;

  var params = {
    AMaaSClass: 'book',
    AMId: AMId,
    resourceId: resourceId,
    data: { bookStatus: 'Retired' }
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
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Books to be reactivated
 * @param {string} params.resourceId - Book ID of the Book to be reactivated
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the reactivated Book instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the reactivated Book instance
 */
function reactivate(_ref6, callback) {
  var AMId = _ref6.AMId,
      resourceId = _ref6.resourceId;

  var params = {
    AMaaSClass: 'book',
    AMId: AMId,
    resourceId: resourceId,
    data: { bookStatus: 'Active' }
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