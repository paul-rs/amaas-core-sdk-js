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
 * @param {number} AMId - Asset Manager ID of Transaction
 * @param {string} resourceId - Transaction ID
 * @param {string} token - Authorization token
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
 * @param {number} AMId - Asset Manager ID of Transaction
 * @param {string} resourceId - Transaction ID
 * @param {object} data - Allocation data for the Transaction of the form [ { book_id: '123', quantity: '50', transaction_id: 'XYZ' }, { book_id: '456', quantity: '50', transaction_id: 'ABC' } ]
   If transaction_id is given, the new Transaction that is created will have this as ID.
 * @param {string} token - Authorization token
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