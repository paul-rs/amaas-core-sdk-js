'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.insert = insert;
exports.amend = amend;
exports.search = search;
exports.cancel = cancel;
exports.reopen = reopen;
exports._parseCA = _parseCA;

var _network = require('../network');

var _corporateActions = require('../../corporateActions');

var CAClass = _interopRequireWildcard(_corporateActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Retrieve a Corporate Action
 * @function retrieve
 * @memberof module:api.CorporateActions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Asset Manager that owns the Corporate Action
 * @param {string} [params.resourceId] - ID of the Corporate Action to retrieve. Omit to return all Corporate Actions for supplied AMId
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Corporate Actions or a single CorporateAction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Corporate Actions or a single CorporateAction instance
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId;

  var params = {
    AMaaSClass: 'corporateActions',
    AMId: AMId,
    resourceId: resourceId
  };
  var promise = (0, _network.retrieveData)(params).then(function (result) {
    if (Array.isArray(result)) {
      result = result.map(function (ca) {
        return _parseCA(ca);
      });
    } else {
      result = _parseCA(result);
    }
    if (typeof callback === 'function') {
      calback(null, result);
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
 * Insert a Corporate Action
 * @function insert
 * @memberof module:api.CorporateActions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Asset Manager that owns the Corporate Action
 * @param {string} params.corporateAction - CorporateAction instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted CorporateAction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted CorporateAction instance
 */
function insert(_ref2, callback) {
  var AMId = _ref2.AMId,
      corporateAction = _ref2.corporateAction;

  var data = void 0;
  if (corporateAction) {
    data = JSON.parse(JSON.stringify(corporateAction));
  } else {
    throw new Error('Missing Corporate Action data');
  }
  var params = {
    AMaaSClass: 'corporateActions',
    AMId: AMId,
    data: data
  };
  var promise = (0, _network.insertData)(params).then(function (result) {
    result = _parseCA(result);
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
 * Insert a Corporate Action
 * @function amend
 * @memberof module:api.CorporateActions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Asset Manager that owns the Corporate Action
 * @param {string} params.resourceId - ID of the Corporate Action to amend
 * @param {string} params.corporateAction - Amended CorporateAction instance
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended CorporateAction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended CorporateAction instance
 */
function amend(_ref3, callback) {
  var AMId = _ref3.AMId,
      resourceId = _ref3.resourceId,
      corporateAction = _ref3.corporateAction;

  var data = void 0;
  if (!corporateAction) {
    throw new Error('Missing Corporate Action data');
  }
  data = JSON.parse(JSON.stringify(corporateAction));
  var params = {
    AMaaSClass: 'corporateActions',
    AMId: AMId,
    resourceId: resourceId,
    data: data
  };
  var promise = (0, _network.putData)(params).then(function (result) {
    result = _parseCA(result);
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
 * Search for Corporate Actions
 * @function search
 * @memberof module:api.CorporateActions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} [params.AMId] - AMId of the Asset Manager that owns the Corporate Action. If omitted you must pass assetManagerIds in the query
 * @param {array} params.query - Query parameters to search in the form [{ key: <string>, values: <array of values> }]<br />
 * Available keys are:
 * <li>assetManagerIds (Required if AMId param is omitted)</li>
 * <li>clientIds</li>
 * <li>corporateActionIds</li>
 * <li>corporateActionStatuses</li>
 * <li>corporateActionTypes</li>
 * <li>assetIds</li>
 * <li>partyIds</li>
 * <li>recordDateStart</li>
 * <li>recordDateEnd</li>
 * <li>declaredDateStart</li>
 * <li>declaredDateEnd</li>
 * <li>referenceTypes</li>
 * <li>referenceValues</li>
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Corporate Actions or a single CorporateAction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Corporate Actions or a single CorporateAction instance
 */
function search(_ref4, callback) {
  var AMId = _ref4.AMId,
      query = _ref4.query;

  var params = {
    AMaaSClass: 'corporateActions',
    AMId: AMId,
    query: query
  };
  var promise = (0, _network.searchData)(params).then(function (result) {
    if (Array.isArray(result)) {
      result = result.map(function (ca) {
        return _parseCA(ca);
      });
    } else {
      result = _parseCA(result);
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
 * Cancel a Corporate Action
 * @function cancel
 * @memberof module:api.CorporateActions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Asset Manager that owns the Corporate Action.
 * @param {array} params.resourceId - ID of the Corporate Action to cancel
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the cancelled CorporateAction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the cancelled CorporateAction instance
 */
function cancel(_ref5, callback) {
  var AMId = _ref5.AMId,
      resourceId = _ref5.resourceId;

  var params = {
    AMaaSClass: 'corporateActions',
    AMId: AMId,
    resourceId: resourceId,
    data: { corporateActionStatus: 'Cancelled' }
  };
  var promise = (0, _network.patchData)(params).then(function (result) {
    result = _parseCA(result);
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
 * Reopen a cancelled Corporate Action
 * @function reopen
 * @memberof module:api.CorporateActions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Asset Manager that owns the Corporate Action.
 * @param {array} params.resourceId - ID of the Corporate Action to reopen
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the reopened CorporateAction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the reopened CorporateAction instance
 */
function reopen(_ref6, callback) {
  var AMId = _ref6.AMId,
      resourceId = _ref6.resourceId;

  var params = {
    AMaaSClass: 'corporateActions',
    AMId: AMId,
    resourceId: resourceId,
    data: { corporateActionStatus: 'Open' }
  };
  var promise = (0, _network.patchData)(params).then(function (result) {
    result = _parseCA(result);
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

function _parseCA(obj) {
  if (!obj.corporateActionType || !CAClass[obj.corporateActionType]) {
    return new CAClass.CorporateAction(obj);
  }
  return new CAClass[obj.corporateActionType](obj);
}