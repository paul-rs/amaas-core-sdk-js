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
 * @param {string} [params.resourceId] - Transaction ID. Omit to return all Allocations for the supplied AMId
 * @param {function} [callback] - Function of form (error, result) called on completion. `result` is an array of Link instances or a single Link instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an Array of Link instances or a single Link instance (an Allocation is an instance of the Link class)
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId;

  if (!AMId || !resourceId) {
    if (typeof callback === 'function') {
      return callback('Asset Manager ID and Transaction ID are required for allocations');
    }
    return Promise.reject('Asset Manager ID and Transaction ID are required for allocations');
  }
  var params = {
    AMaaSClass: 'allocations',
    AMId: AMId,
    resourceId: resourceId
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
 * @param {object} params.data - Allocation data for the Transaction of the form [ { book_id: '123', quantity: '50', transaction_id: 'XYZ' }, { book_id: '456', quantity: '50', transaction_id: 'ABC' } ]. If transaction_id is supplied, it is used as the inserted Allocation's transactionId. Otherwise a random ID is generated
 * @param {function} [callback] - Called with two arugments (error, result) on completion. `result` is the inserted Allocations. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Allocations
 */
function send(_ref2, callback) {
  var AMId = _ref2.AMId,
      resourceId = _ref2.resourceId,
      data = _ref2.data;

  if (!AMId || !resourceId) {
    if (typeof callback === 'function') {
      return callback('Asset Manager ID and Transaction ID are required for allocations');
    }
    return Promise.reject('Asset Manager ID and Transaction ID are required for allocations');
  }
  var params = {
    AMaaSClass: 'allocations',
    AMId: AMId,
    resourceId: resourceId,
    data: data
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