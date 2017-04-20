'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.insert = insert;
exports.amend = amend;
exports.partialAmend = partialAmend;
exports.deactivate = deactivate;
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
 * @namespace api
  * @memberof module:Parties
 */

/**
 * Retrieve Party data for specified AMId and partyId
 * @function retrieve
 * @memberof module:Parties.api
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Party
 * @param {string} [params.partyId] - Party ID of the Party. Omitting this will return all Parties associated with that AMId
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise|Array|Party} - If callback supplied, it is called and function returns either a Party instance of array of Party instances. Otherwise promise that resolves with Party instance or array of Party instances is returned
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      partyId = _ref.partyId,
      token = _ref.token;

  var params = {
    AMaaSClass: 'parties',
    AMId: AMId,
    resourceId: partyId,
    token: token
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
 * @memberof module:Parties.api
 * @static
 * @param {object} params - object of parameters:
 * @param {Party} params.party - Party instance to insert
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise|Party} If callback is supplied, it is called and function returns the inserted Party instance. Otherwise promise that resolves with inserted Party instance is returned
 */
function insert(_ref2, callback) {
  var party = _ref2.party,
      token = _ref2.token;

  var stringified = void 0,
      data = void 0;
  if (party) {
    stringified = JSON.stringify(party);
    data = JSON.parse(stringified);
  }
  var params = {
    AMaaSClass: 'parties',
    data: data,
    token: token
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
 * @memberof module:Parties.api
 * @static
 * @param {object} params - object of parameters:
 * @param {Party} params.party - Amended Party instance to PUT
 * @param {number} params.AMId - AMId of the Party to amend
 * @param {string} params.resourceId - Party ID of the Party to amend
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise|Party} If callback is supplied, it is called and function returns the amended Party instance. Otherwise promise that resolves with amended Party instance is returned
 */
function amend(_ref3, callback) {
  var party = _ref3.party,
      AMId = _ref3.AMId,
      resourceId = _ref3.resourceId,
      token = _ref3.token;

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
    data: data,
    token: token
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
 * @memberof module:Parties.api
 * @static
 * @param {object} params - object of parameters:
 * @param {object} params.changes - Object of changes to the Party.
 * @param {string} params.AMId - AMId of the Party to be partially amended
 * @param {string} params.resourceId - Party ID of the Party to be partially amended
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise|Party} If callback is supplied, it is called and function returns the amended Party instance. Otherwise a promise that resolves with the amended Party instance is returned
 */
function partialAmend(_ref4, callback) {
  var changes = _ref4.changes,
      AMId = _ref4.AMId,
      resourceId = _ref4.resourceId,
      token = _ref4.token;

  var params = {
    AMaaSClass: 'parties',
    AMId: AMId,
    resourceId: resourceId,
    data: changes,
    token: token
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
 * Deactivate an exising Party. This will set the Party status to 'Inactive'
 * @function deactivate
 * @memberof module:Parties.api
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Party to be deleted
 * @param {string} params.resourceId - Party ID of the Party to be deleted
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @erturns {PRomise|string} If callback is supplied, it is called and the function returns ???. Otherwise a promise that resolves with ??? is returned
 */
function deactivate(_ref5, callback) {
  var AMId = _ref5.AMId,
      resourceId = _ref5.resourceId,
      token = _ref5.token;

  var params = {
    AMaaSClass: 'parties',
    AMId: AMId,
    resourceId: resourceId,
    token: token
  };
  var promise = (0, _network.deleteData)(params).then(function (result) {
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
  if (!object.partyType) {
    return new PartyClasses.Party(object);
  }
  return new PartyClasses[object.partyType](object);
}