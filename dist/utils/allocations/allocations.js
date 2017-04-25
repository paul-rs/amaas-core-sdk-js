'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.send = send;

var _network = require('../network');

var _children = require('../../children');

/**
 * Retrieve Allocations for a specific Transaction
 * @function retrieve
 * @memberof module:api.Allocations
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of Transaction
 * @param {string} params.resourceId - Transaction ID
 * @param {string} params.token - Authorization token
 * @param {function} [callback] - Function of form (error, result) called on completion
 * @returns {Promise|Array} If callback given, callback is called with array of Allocations. Otherwise returns promise which resolves with array of Allocations
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId,
      token = _ref.token;

  if (!AMId || !resourceId) {
    throw new Error('Asset Manager ID and Transaction ID are required for allocations');
  }
  var params = {
    AMaaSClass: 'allocations',
    AMId: AMId,
    resourceId: resourceId,
    token: token
  };
  var promise = (0, _network.retrieveData)(params).then(function (result) {
    var allocations = result.map(function (link) {
      return new _children.Link(link);
    });
    if (typeof callback === 'function') {
      callback(null, allocations);
    }
    return allocations;
  });
  if (typeof callback !== 'function') {
    return promise;
  }
  promise.catch(function (error) {
    return callback(error);
  });
}

/**
 * Send Allocations for a specific Transaction
 * @function send
 * @memberof module:api.Allocations
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of Transaction
 * @param {string} params.resourceId - Transaction ID
 * @param {object} params.data - Allocation data for the Transaction of the form [ { book_id: '123', quantity: '50', transaction_id: 'XYZ' }, { book_id: '456', quantity: '50', transaction_id: 'ABC' } ]
   If transaction_id is given, the new Transaction that is created will have this as ID.
 * @param {string} params.token - Authorization token
 * @returns {Promise|Array} ???
 */
function send(_ref2, callback) {
  var AMId = _ref2.AMId,
      resourceId = _ref2.resourceId,
      data = _ref2.data,
      token = _ref2.token;

  if (!AMId || !resourceId) {
    throw new Error('Asset Manager ID and Transaction ID are required for allocations');
  }
  var params = {
    AMaaSClass: 'allocations',
    AMId: AMId,
    resourceId: resourceId,
    data: data,
    token: token
  };
  var promise = (0, _network.insertData)(params).then(function (result) {
    var allocated = result;
    if (typeof callback === 'function') {
      callback(null, allocated);
    }
    return allocated;
  });
  if (typeof callback !== 'function') {
    return promise;
  }
  promise.catch(function (error) {
    return callback(error);
  });
}