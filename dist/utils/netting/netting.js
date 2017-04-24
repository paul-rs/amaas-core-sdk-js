'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.send = send;

var _network = require('../network');

/**
 * @namespace api
 * @memberof module:Netting
 */

/**
 * Retrieve Netting for a specific Transaction
 * @function retrieve
 * @memberof module:Netting.api
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
 * @memberof module:Netting.api
 * @static
 * @param {string} - *
 * @returns {string} *
 */
function send() {
  // TODO: Implement this once the DB testing env is stable
}