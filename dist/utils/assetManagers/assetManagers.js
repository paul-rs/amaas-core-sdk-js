'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.insert = insert;
exports.deactivate = deactivate;
exports._parseAM = _parseAM;
exports._handleCallback = _handleCallback;

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
  (0, _network.retrieveData)(params, function (error, result) {
    if (error) {
      callback(error);
    } else {
      var assetManager = _parseAM(result);
      callback(null, assetManager);
    }
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

  var stringified = JSON.stringify(assetManager);
  var params = {
    AMaaSClass: 'assetManagers',
    data: JSON.parse(stringified),
    token: token
  };
  (0, _network.insertData)(params, function (error, result) {
    _handleCallback(error, result, callback);
  });
}

// export function amendAM(assetManager, AMId, resourceId, callback) {
//   const stringified = JSON.stringify(assetManager)
//   const params = {
//     AMaaSClass: 'assetManagers',
//     AMId,
//     resourceId,
//     data: JSON.parse(stringified)
//   }
//   putData(params, (error, result) => {
//     _handleCallback(error, result, callback)
//   })
// }
//
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
function deactivate(_ref3, callback) {
  var AMId = _ref3.AMId,
      token = _ref3.token;

  var params = {
    AMaaSClass: 'assetManagers',
    AMId: AMId,
    token: token
  };
  (0, _network.deleteData)(params, function (error, result) {
    _handleCallback(error, result, callback);
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

function _handleCallback(error, result, callback) {
  if (error) {
    callback(error);
  } else {
    callback(null, result);
  }
}