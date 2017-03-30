'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.insert = insert;
exports.amendAM = amendAM;
exports.deactivate = deactivate;
exports._parseAM = _parseAM;

var _network = require('../network');

var _assetManager = require('../../assetManagers/AssetManager/assetManager.js');

var _assetManager2 = _interopRequireDefault(_assetManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve Asset Manager data for specified Asset Manager ID
 * @param {number} AMId - Asset Manager ID to retrieve
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      token = _ref.token;

  var params = {
    AMaaSClass: 'assetManagers',
    AMId: AMId, token: token
  };
  var promise = (0, _network.retrieveData)(params).then(function (result) {
    var assetManager = _parseAM(result);
    if (typeof callback === 'function') {
      callback(null, assetManager);
    }
    return assetManager;
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
 * Insert a new Asset Manager into the database
 * @param {AssetManager} assetManager - Asset Manager instance to insert
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function insert(_ref2, callback) {
  var assetManager = _ref2.assetManager,
      token = _ref2.token;

  var stringified = void 0,
      data = void 0;
  if (assetManager) {
    stringified = JSON.stringify(assetManager);
    data = JSON.parse(stringified);
  }
  var params = {
    AMaaSClass: 'assetManagers',
    data: data,
    token: token
  };
  var promise = (0, _network.insertData)(params).then(function (result) {
    result = _parseAM(result);
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

function amendAM(_ref3, callback) {
  var assetManager = _ref3.assetManager,
      AMId = _ref3.AMId,
      token = _ref3.token;

  var stringified = void 0,
      data = void 0;
  if (assetManager) {
    stringified = JSON.stringify(assetManager);
    data = JSON.parse(stringified);
  }
  var params = {
    AMaaSClass: 'assetManagers',
    AMId: AMId,
    data: data,
    token: token
  };
  var promise = (0, _network.putData)(params).then(function (result) {
    result = _parseAM(result);
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

// export function partialAmendAM(changes, AMId, resourceId, callback) {
//   const params = {
//     AMaaSClass: 'assetManagers',
//     AMId,
//     resourceId,
//     data: changes
//   }
//   patchData(params, (error, result) => {
//     _handleCallback(error, result, callback)
//   })
// }

/**
 * Deactive an existing Asset Manager (AM)
 * @param {string} AMId - AM ID of the AM to deactive
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function deactivate(_ref4, callback) {
  var AMId = _ref4.AMId,
      token = _ref4.token;

  var params = {
    AMaaSClass: 'assetManagers',
    AMId: AMId,
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

function _parseAM(object) {
  return new _assetManager2.default({
    assetManagerId: object.asset_manager_id,
    assetManagerType: object.asset_manager_type,
    assetManagerStatus: object.asset_manager_status,
    clientId: object.client_id,
    partyId: object.party_id,
    defaultBookOwnerId: object.default_book_owner_id,
    defaultTimezone: object.default_timezone,
    defaultBookCloseTime: object.default_book_close_time,
    createdBy: object.created_by,
    updatedBy: object.updated_by,
    createdTime: object.created_time,
    updatedTime: object.updated_time
  });
}