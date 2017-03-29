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
 * Retrieve Book data for specified AMId and bookId
 * @param {number} AMId - Asset Manager ID of the Asset
 * @param {string} [bookId] - ID of the Book
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId,
      token = _ref.token;

  var params = {
    AMaaSClass: 'books',
    AMId: AMId,
    resourceId: resourceId,
    token: token
  };
  var promise = (0, _network.retrieveData)(params).then(function (result) {
    if (!Array.isArray(result)) {
      callback(null, _parseBook(result));
      return;
    }
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

function search(_ref2, callback) {
  var queryKey = _ref2.queryKey,
      queryValue = _ref2.queryValue,
      token = _ref2.token;

  var params = {
    AMaaSClass: 'books',
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
  return new _book2.default({
    assetManagerId: object.asset_manager_id,
    bookId: object.book_id,
    bookStatus: object.book_status,
    ownerId: object.owner_id,
    closeTime: object.close_time,
    timezone: object.timezone,
    description: object.description,
    positions: object.positions,
    createdBy: object.created_by,
    updatedBy: object.updated_by,
    createdTime: object.created_time,
    updatedTime: object.updated_time,
    version: object.version
  });
}

function _handleCallback(error, result, callback) {
  if (error) {
    callback(error);
  } else {
    callback(null, result);
  }
}