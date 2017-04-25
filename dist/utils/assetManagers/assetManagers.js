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
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise | AssetManager} If callback supplied, callback(null, AssetManager) is called. Otherwise promise is returned that resolves with AssetManager instance
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
 * @function insert
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {AssetManager} params.assetManager - Asset Manager instance to insert
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise | AssetManager} If callback supplied, callback(null, AssetManager) is called. Otherwise promise is returned that resolves with AssetManager instance
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

/**
 * Amend an Asset Manager (Replaces current Asset Manager with what is passed in)
 * @function amend
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to amend
 * @param {AssetManager} params.assetManager - Asset Manager instance to insert
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise | AssetManager} If callback supplied, callback(null, AssetManager) is called. Otherwise promise is returned that resolves with AssetManager instance
 */
function amend(_ref3, callback) {
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
 * Deactivate an Asset Manager
 * @function deactivate
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to deactivate
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise | AssetManager} ???
 */
function deactivate(_ref4, callback) {
  var AMId = _ref4.AMId,
      token = _ref4.token;

  var params = {
    AMaaSClass: 'assetManagers',
    AMId: AMId,
    data: { assetManagerStatus: 'Inactive' },
    token: token
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
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise | AssetManager} ???
 */
function reactivate(_ref5, callback) {
  var AMId = _ref5.AMId,
      token = _ref5.token;

  var params = {
    AMaaSClass: 'assetManagers',
    AMId: AMId,
    data: { assetManagerStatus: 'Active' },
    token: token
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