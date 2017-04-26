'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.insert = insert;
exports.amend = amend;
exports.deactivate = deactivate;
exports.reactivate = reactivate;
exports._parseAM = _parseAM;

var _network = require('../network');

var _assetManager = require('../../assetManagers/AssetManager/assetManager.js');

var _assetManager2 = _interopRequireDefault(_assetManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve Asset Manager data for specified Asset Manager ID
 * @function retrieve
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID to retrieve
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an AssetManager instance
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId;

  var params = {
    AMaaSClass: 'assetManagers',
    AMId: AMId
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
 * @function insert
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {AssetManager} params.assetManager - Asset Manager instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted AssetManager instance
 */
function insert(_ref2, callback) {
  var assetManager = _ref2.assetManager;

  var stringified = void 0,
      data = void 0;
  if (assetManager) {
    stringified = JSON.stringify(assetManager);
    data = JSON.parse(stringified);
  }
  var params = {
    AMaaSClass: 'assetManagers',
    data: data
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

/**
 * Amend an Asset Manager (Replaces current Asset Manager with what is passed in)
 * @function amend
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to amend
 * @param {AssetManager} params.assetManager - Asset Manager instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended AssetManager instance
 */
function amend(_ref3, callback) {
  var AMId = _ref3.AMId,
      assetManager = _ref3.assetManager;

  var stringified = void 0,
      data = void 0;
  if (assetManager) {
    stringified = JSON.stringify(assetManager);
    data = JSON.parse(stringified);
  }
  var params = {
    AMaaSClass: 'assetManagers',
    AMId: AMId,
    data: data
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
 * Deactivate an Asset Manager
 * @function deactivate
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to deactivate
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the deactivated AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the deactivated AssetManager instance
 */
function deactivate(_ref4, callback) {
  var AMId = _ref4.AMId;

  var params = {
    AMaaSClass: 'assetManagers',
    AMId: AMId,
    data: { assetManagerStatus: 'Inactive' }
  };
  var promise = (0, _network.patchData)(params).then(function (result) {
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

/**
 * Reactivate an Asset Manager
 * @function reactivate
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to deactivate
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the reactivated AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the reactivated AssetManager instance
 */
function reactivate(_ref5, callback) {
  var AMId = _ref5.AMId;

  var params = {
    AMaaSClass: 'assetManagers',
    AMId: AMId,
    data: { assetManagerStatus: 'Active' }
  };
  var promise = (0, _network.patchData)(params).then(function (result) {
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

function _parseAM(object) {
  return new _assetManager2.default(object);
}