'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.send = send;

var _network = require('../network');

/**
 * Retrieve Netting for a specific Transaction
 * @param {number} AMId - Asset Manager ID of Transaction
 * @param {string} resourceId - Transaction ID
 * @param {string} token - Authorization token
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
 * @param {number} AMId - Asset Manager ID of Transaction
 * @param {array} data - TBC
 * @param {string} token - Authorization token
 */
function send() {
  // TODO: Implement this once the DB testing env is stable
}