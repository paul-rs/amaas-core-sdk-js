'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.insert = insert;
exports.amend = amend;
exports.partialAmend = partialAmend;
exports.search = search;
exports.cancel = cancel;

var _network = require('../network');

var _transactions = require('../../transactions');

/**
* Retrieve a Transaction from the database
* @function retrieve
* @memberof module:api.Transactions
* @static
* @param {object} params - object of parameters:
* @param {number} params.AMId - Asset Manager ID of the Transaction's owner
* @param {string} [params.resourceId] - Transaction ID. Omit to return all Transactions for the supplied AMId
* @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an Array of Transactions or a single Transaction instance. Omit to return Promise
* @returns {Promise|null} If no callback supplied, returns Promise that resolves with an Array of Transactions or a single Transaction instance
*/
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId;

  var params = {
    AMaaSClass: 'transactions',
    AMId: AMId,
    resourceId: resourceId
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
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted Transaction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns Promise that resolves with the inserted Transaction instance
 */
function insert(_ref2, callback) {
  var AMId = _ref2.AMId,
      transaction = _ref2.transaction;

  var data = void 0;
  if (transaction) {
    data = JSON.parse(JSON.stringify(transaction));
  }
  var params = {
    AMaaSClass: 'transactions',
    AMId: AMId,
    data: data
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
 * @param {Transaction} params.transaction - The amended Transaction instance
 * @param {number} params.AMId - Asset Manager ID of the Transaction's owner
 * @param {string} params.resourceId - Transaction ID
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Transaction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns Promise that resolves with the amended Transaction instance
 */
function amend(_ref3, callback) {
  var transaction = _ref3.transaction,
      AMId = _ref3.AMId,
      resourceId = _ref3.resourceId;

  var data = void 0;
  if (transaction) {
    data = JSON.parse(JSON.stringify(transaction));
  }
  var params = {
    AMaaSClass: 'transactions',
    AMId: AMId,
    resourceId: resourceId,
    data: data
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
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Transaction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns Promise that resolves with the amended Transaction instance
 */
function partialAmend(_ref4, callback) {
  var changes = _ref4.changes,
      AMId = _ref4.AMId,
      resourceId = _ref4.resourceId;

  var params = {
    AMaaSClass: 'transactions',
    AMId: AMId,
    resourceId: resourceId,
    data: changes
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

/**
 * Search Transactions
 * @function search
 * @memberof module:api.Transactions
 * @static
 * @param {object} params - object of parameters
 * @param {number} [params.AMId] - Asset Manager ID of the Transactions to search over. If omitted you must pass assetManagerIds in the query
 * @param {array} params.query - Array of query parameters of the form: [{ key: `string`, values: `array` }]<br />
 * Available keys are:
 * <li>clientIds</li>
 * <li>transactionStatuses</li>
 * <li>transactionIds</li>
 * <li>assetBookIds</li>
 * <li>counterpartyBookIds</li>
 * <li>assetIds</li>
 * <li>transactionDateStart</li>
 * <li>transactionDateEnd</li>
 * <li>codeTypes</li>
 * <li>codeValues</li>
 * <li>linkTypes</li>
 * <li>linkedTransactionIds</li>
 * <li>partyTypes</li>
 * <li>partyIds</li>
 * <li>referenceTypes</li>
 * <li>referenceValues</li>
 * e.g. `[ { key: 'assetManagerIds', values: [1] }, { key: 'bookIds', values: [1, 2, 3]} ]`
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Transactions or a single Transaction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Transactions or a single Transaction instance
 */
function search(_ref5, callback) {
  var AMId = _ref5.AMId,
      query = _ref5.query;

  var params = {
    AMaaSClass: 'transactions',
    AMId: AMId,
    query: query
  };
  var promise = (0, _network.searchData)(params).then(function (result) {
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
    return promise;
  }
  promise.catch(function (error) {
    return callback(error);
  });
}

/**
 * Cancel a Transaction
 * @function cancel
 * @memberof module:api.Transactions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Transaction's owner
 * @param {string} params.resourceId - Transaction ID
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the cancelled Transaction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns Promise that resolves with the cancelled Transaction instance. Note that this is the only time the API returns a Transaction instance where transactionStatus === 'Cancelled'
 */
function cancel(_ref6, callback) {
  var AMId = _ref6.AMId,
      resourceId = _ref6.resourceId;

  var params = {
    AMaaSClass: 'transactions',
    AMId: AMId,
    resourceId: resourceId
  };
  var promise = (0, _network.deleteData)(params).then(function (result) {
    result = _parseTransaction(result);
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

function _parseTransaction(t) {
  return new _transactions.Transaction(t);
}