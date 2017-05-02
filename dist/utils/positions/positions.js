'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.search = search;
exports._parsePos = _parsePos;

var _network = require('../network');

var _position = require('../../transactions/Positions/position.js');

var _position2 = _interopRequireDefault(_position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve a Position from the database
 * @function retrieve
 * @memberof module:api.Positions
 * @static
 * @param {object} params - object of parameters
 * @param {number} params.AMId - Asset Manager ID of the the Positions
 * @param {function} [callback] - Called with two arugments (error, result) on completion. `result` is an array of Positions. Omit to return Promise
 * @returns {Promise|null} If no callback is supplied, returns promise that resolves with an array of Positions
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId;

  var params = {
    AMaaSClass: 'positions',
    AMId: AMId
  };
  var promise = (0, _network.retrieveData)(params).then(function (result) {
    if (Array.isArray(result)) {
      result = result.map(function (pos) {
        return _parsePos(pos);
      });
    } else {
      result = _parsePos(result);
    }
    if (typeof callback === 'function') {
      callback(null, result);
    }
    return result;
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
 * Search for Positions in the database
 * @function search
 * @memberof module:api.Positions
 * @static
 * @param {object} params - object of parameters
 * @param {array} params.query - array of query objects: { key: string, values: array }. e.g. [{ key: 'book_ids', values: [1, 2, 3] }]
 * Available keys are:
 * TODO: List the keys (Note that if omitting AMId, then asset_manager_ids must be passed in the query string)
 * @param {function} [callback] - Called with two arguments (error, result) on completion. Omit to return Promise
 * @returns {Promise|null} If no callback is supplied, returns promise that resolves with array of Positions
 */
function search(_ref2, callback) {
  var AMId = _ref2.AMId,
      query = _ref2.query;

  var params = {
    AMaaSClass: 'positions',
    AMId: AMId,
    query: query
  };
  var promise = (0, _network.searchData)(params).then(function (result) {
    if (Array.isArray(result)) {
      result = result.map(function (pos) {
        return _parsePos(pos);
      });
    } else {
      result = _parsePos(result);
    }
    if (typeof callback === 'function') {
      callback(null, result);
    }
    return result;
  });
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise;
  }
  promise.catch(function (error) {
    return callback(error);
  });
}

function _parsePos(pos) {
  return new _position2.default(pos);
}