'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.insert = insert;
exports.amend = amend;
exports.partialAmend = partialAmend;

var _network = require('../network');

var _transactions = require('../../transactions');

/**
* Retrieve a Transaction from the database
* @function retrieve
* @memberof module:api.Transactions
* @static
* @param {object} params - object of parameters:
* @param {number} params.AMId - Asset Manager ID of the Transaction's owner
* @param {string} params.resourceId - Transaction ID
* @param {string} params.token - Authorization token
* @param {function} callback - Called with two arguments (error, result) on completion
*/
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId,
      token = _ref.token;

  var params = {
    AMaaSClass: 'transactions',
    AMId: AMId,
    resourceId: resourceId,
    token: token
  };
  var promise = (0, _network.retrieveData)(params).then(function (result) {
    if (Array.isArray(result)) {
      result = result.map(function (tran) {
        return _parseTransaction(tran);
      });
    } else {
      result = _parseTransaction(result);
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
 * Insert a new Transaction into the database
 * @function insert
 * @memberof module:api.Transactions
 * @static
 * @param {object} params - object of parameters:
 * @param {Transaction} params.transaction - Transaction instance or object to insert
 * @param {number} params.AMId - Asset Manager ID of the Transaction's owner
 * @param {string} params.resourceId - Transaction ID
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function insert(_ref2, callback) {
  var AMId = _ref2.AMId,
      transaction = _ref2.transaction,
      token = _ref2.token;

  var data = void 0;
  if (transaction) {
    data = JSON.parse(JSON.stringify(transaction));
  }
  var params = {
    AMaaSClass: 'transactions',
    AMId: AMId,
    data: data,
    token: token
  };
  var promise = (0, _network.insertData)(params).then(function (result) {
    result = _parseTransaction(result);
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
 * Amend a Transaction
 * @function amend
 * @memberof module:api.Transactions
 * @static
 * @param {object} params - object of parameters:
 * @param {Transaction} params.transaction - Transaction instance or object to amend
 * @param {number} params.AMId - Asset Manager ID of the Transaction's owner
 * @param {string} params.resourceId - Transaction ID
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function amend(_ref3, callback) {
  var transaction = _ref3.transaction,
      AMId = _ref3.AMId,
      resourceId = _ref3.resourceId,
      token = _ref3.token;

  var data = void 0;
  if (transaction) {
    data = JSON.parse(JSON.stringify(transaction));
  }
  var params = {
    AMaaSClass: 'transactions',
    AMId: AMId,
    resourceId: resourceId,
    data: data,
    token: token
  };
  var promise = (0, _network.putData)(params).then(function (result) {
    result = _parseTransaction(result);
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
 * Partially amend a Transaction
 * @function partialAmend
 * @memberof module:api.Transactions
 * @static
 * @param {object} params - object of parameters:
 * @param {Transaction} params.changes - object of changes to apply to the Transaction
 * @param {number} params.AMId - Asset Manager ID of the Transaction's owner
 * @param {string} params.resourceId - Transaction ID
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function partialAmend(_ref4, callback) {
  var changes = _ref4.changes,
      AMId = _ref4.AMId,
      resourceId = _ref4.resourceId,
      token = _ref4.token;

  var params = {
    AMaaSClass: 'transactions',
    AMId: AMId,
    resourceId: resourceId,
    data: changes,
    token: token
  };
  var promise = (0, _network.patchData)(params).then(function (result) {
    result = _parseTransaction(result);
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

function _parseTransaction(t) {
  return new _transactions.Transaction(t);
}