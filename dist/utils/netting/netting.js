'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.send = send;

var _network = require('../network');

/**
 * @namespace Netting
 * @memberof module:api
 */

/**
 * Retrieve Netting for a specific Transaction
 * @function retrieve
 * @memberof module:api.Netting
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of Transaction
 * @param {string} params.resourceId - Transaction ID
 * @param {string} params.token - Authorization token
 * @returns {Promise|Array} If callback is supplied, it is called with ???. Otherwise a promise that resolves with ??? is returned
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId,
      token = _ref.token;

  if (!AMId || !resourceId) {
    throw new Error('Asset Manager ID and Transaction ID are required for netting');
  }
  var params = {
    AMaaSClass: 'netting',
    AMId: AMId,
    resourceId: resourceId,
    token: token
  };
  var promise = (0, _network.retrieveData)(params).then(function (result) {
    // TODO: Parse this accordingly
    var netting = result;
    if (typeof callback === 'function') {
      callback(null, netting);
    }
    return netting;
  });
  if (typeof callback !== 'function') {
    return promise;
  }
  promise.catch(function (error) {
    return callback(error);
  });
}

/**
 * Send Transactions to Net
 * @function send
 * @memberof module:api.Netting
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Transactions to be netted
 * @param {array} params.data - An Array of Transaction IDs to be netted
 * @param {string} [params.nettingType=Net] - Optional netting type
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is ??? Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with ???
 */
function send(_ref2, callback) {
  var AMId = _ref2.AMId,
      data = _ref2.data,
      nettingType = _ref2.nettingType;

  var params = {
    AMaaSClass: 'netting',
    AMId: AMId,
    data: data,
    queryParams: [{ key: 'netting_type', values: [nettingType] }]
  };
  var promise = (0, _network.insertData)(params).then(function (result) {
    // TODO: Parse this accoringly
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