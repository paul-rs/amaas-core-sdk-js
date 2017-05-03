'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.insert = insert;
exports.amend = amend;
exports.partialAmend = partialAmend;
exports.search = search;
exports.deactivate = deactivate;
exports.reactivate = reactivate;
exports._parseParty = _parseParty;

var _network = require('../network');

var _parties = require('../../parties');

var PartyClasses = _interopRequireWildcard(_parties);

var _address = require('../../parties/Children/address.js');

var _address2 = _interopRequireDefault(_address);

var _email = require('../../parties/Children/email.js');

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Retrieve Party data for specified AMId and partyId
 * @function retrieve
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Party
 * @param {string} [params.partyId] - Party ID of the Party. Omitting this will return all Parties associated with the supplied AMId
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Parties or a single Party instance. Omit to return Promise
 * @returns {Promise|null} - If no callback supplied, returns a Promise that resolves with an array of Parties or a single Party instance
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId;

  var params = {
    AMaaSClass: 'parties',
    AMId: AMId,
    resourceId: resourceId
  };
  var promise = (0, _network.retrieveData)(params).then(function (result) {
    if (Array.isArray(result)) {
      result = result.map(function (party) {
        return _parseParty(party);
      });
    } else {
      result = _parseParty(result);
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
 * Insert a new Party into the database
 * @function insert
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID to whom the Party will belong
 * @param {Party} params.party - Party instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted Party instance. Omit to return Promise.
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Party instance
 */
function insert(_ref2, callback) {
  var AMId = _ref2.AMId,
      party = _ref2.party;

  var stringified = void 0,
      data = void 0;
  if (party) {
    stringified = JSON.stringify(party);
    data = JSON.parse(stringified);
  }
  var params = {
    AMaaSClass: 'parties',
    AMId: AMId,
    data: data
  };
  var promise = (0, _network.insertData)(params).then(function (result) {
    result = _parseParty(result);
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
 * Amend an existing Party. WARNING: This makes a HTTP PUT request and will replace the existing Party with the one passed in
 * @function amend
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Party to amend
 * @param {Party} params.party - Amended Party instance to PUT
 * @param {string} params.resourceId - Party ID of the Party to amend
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Party instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended Party instance
 */
function amend(_ref3, callback) {
  var AMId = _ref3.AMId,
      party = _ref3.party,
      resourceId = _ref3.resourceId;

  var stringified = void 0,
      data = void 0;
  if (party) {
    stringified = JSON.stringify(party);
    data = JSON.parse(stringified);
  }
  var params = {
    AMaaSClass: 'parties',
    AMId: AMId,
    resourceId: resourceId,
    data: data
  };
  var promise = (0, _network.putData)(params).then(function (result) {
    result = _parseParty(result);
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
 * Partially amend an existing Party.
 * @function partialAmend
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Party to be partially amended
 * @param {object} params.changes - Object of changes to the Party
 * @param {string} params.resourceId - Party ID of the Party to be partially amended
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Party instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended Party instance
 */
function partialAmend(_ref4, callback) {
  var AMId = _ref4.AMId,
      changes = _ref4.changes,
      resourceId = _ref4.resourceId;

  var params = {
    AMaaSClass: 'parties',
    AMId: AMId,
    resourceId: resourceId,
    data: changes
  };
  var promise = (0, _network.patchData)(params).then(function (result) {
    result = _parseParty(result);
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
 * Search for Parties
 * @function search
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {number} [params.AMId] - Asset Manager of the Parties to search over. If omitted you must pass assetManagerIds in the query
 * @param {array} params.query - Array of query parameters of the form: [{ key: `string`, values: `array` }]<br />
 * Available keys are:
 * <li>assetManagerIds (required if AMId param is omitted)</li>
 * <li>clientIds</li>
 * <li>partyStatuses</li>
 * <li>partyIds</li>
 * <li>partyClasses</li>
 * <li>partyTypes</li>
 * e.g. `[ { key: 'assetManagerIds', values: [1] }, { key: 'clientIds', values: [1, 2, 3] } ]`
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Parties or a single Party instance. Omit to return promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Parties or a single Party instance
 */
function search(_ref5, callback) {
  var AMId = _ref5.AMId,
      query = _ref5.query;

  var params = {
    AMaaSClass: 'parties',
    AMId: AMId,
    query: query
  };
  var promise = (0, _network.searchData)(params).then(function (result) {
    if (Array.isArray(result)) {
      result = result.map(function (party) {
        return _parseParty(party);
      });
    } else {
      result = _parseParty(result);
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
 * Deactivate an exising Party. This will set the Party status to 'Inactive'
 * @function deactivate
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Party to be deactivated
 * @param {string} params.resourceId - Party ID of the Party to be deactivated
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the deactivated Party instance. Omit to return Promise
 * @erturns {PRomise|null} If no callback supplied, returns a Promise that resolves with the deactivated Party instance
 */
function deactivate(_ref6, callback) {
  var AMId = _ref6.AMId,
      resourceId = _ref6.resourceId;

  var params = {
    AMaaSClass: 'parties',
    AMId: AMId,
    resourceId: resourceId,
    data: { partyStatus: 'Inactive' }
  };
  var promise = (0, _network.patchData)(params).then(function (result) {
    result = _parseParty(result);
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
 * Reactivate a Party. This will set the Party status to 'Active'
 * @function reactivate
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Party to be reactivated
 * @param {string} params.resourceId - Party ID of the Party to be reactivated
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the reactivated Party instance. Omit to return Promise
 * @erturns {Promise|null} If no callback supplied, returns a Promise that resolves with the reactivated Party instance
 */
function reactivate(_ref7, callback) {
  var AMId = _ref7.AMId,
      resourceId = _ref7.resourceId;

  var params = {
    AMaaSClass: 'parties',
    AMId: AMId,
    resourceId: resourceId,
    data: { partyStatus: 'Active' }
  };
  var promise = (0, _network.patchData)(params).then(function (result) {
    result = _parseParty(result);
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

function _parseParty(object) {
  if (!object.partyType || !PartyClasses[object.partyType]) {
    return new PartyClasses.Party(object);
  }
  return new PartyClasses[object.partyType](object);
}