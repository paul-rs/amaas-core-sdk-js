'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.insert = insert;
exports.amend = amend;
exports.partialAmend = partialAmend;
exports.deactivate = deactivate;
exports._parseAsset = _parseAsset;

var _network = require('../network');

var _assets = require('../../assets');

var AssetClasses = _interopRequireWildcard(_assets);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @namespace api
 * @memberof module:Assets
 */

/**
 * Retrieve Asset data for specified AMId and partyId
 * @function retrieve
 * @memberof module:Assets.api
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Asset
 * @param {string} [params.resourceId] - Party ID of the Asset. Omitting this will return all Assets associated with that AMId
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId,
      token = _ref.token;

  var params = {
    AMaaSClass: 'assets',
    AMId: AMId,
    resourceId: resourceId,
    token: token
  };
  var promise = (0, _network.retrieveData)(params).then(function (result) {
    if (Array.isArray(result)) {
      result = result.map(function (asset) {
        return _parseAsset(asset);
      });
    } else {
      result = _parseAsset(result);
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
 * Insert a new Asset into the database
 * @function insert
 * @memberof module:Assets.api
 * @static
 * @param {object} params - object of parameters:
 * @param {Asset} params.asset - Asset instance to insert
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function insert(_ref2, callback) {
  var asset = _ref2.asset,
      token = _ref2.token;

  var stringified = void 0,
      data = void 0;
  if (asset) {
    stringified = JSON.stringify(asset);
    data = JSON.parse(stringified);
  }
  var params = {
    AMaaSClass: 'assets',
    data: data,
    token: token
  };
  var promise = (0, _network.insertData)(params).then(function (result) {
    result = _parseAsset(result);
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
 * Amend an existing Asset. WARNING: This makes a HTTP PUT request and will replace the existing Asset with the one passed in
 * @function amend
 * @memberof module:Assets.api
 * @static
 * @param {object} params - object of parameters:
 * @param {Asset} params.asset - Amended Asset instance to PUT
 * @param {number} params.AMId - AMId of the Party to amend
 * @param {string} params.resourceId - Asset ID of the Party to amend
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function amend(_ref3, callback) {
  var asset = _ref3.asset,
      AMId = _ref3.AMId,
      resourceId = _ref3.resourceId,
      token = _ref3.token;

  var stringified = void 0,
      data = void 0;
  if (asset) {
    stringified = JSON.stringify(asset);
    data = JSON.parse(stringified);
  }
  var params = {
    AMaaSClass: 'assets',
    AMId: AMId,
    resourceId: resourceId,
    data: data,
    token: token
  };
  var promise = (0, _network.putData)(params).then(function (result) {
    result = _parseAsset(result);
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
 * Partially amend an existing Asset.
 * @function partialAmend
 * @memberof module:Assets.api
 * @static
 * @param {object} params - object of parameters:
 * @param {object} params.changes - Object of changes to the Asset.
 * @param {string} params.AMId - AMId of the Asset to be partially amended
 * @param {string} params.resourceId - Asset ID of the Asset to be partially amended
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function partialAmend(_ref4, callback) {
  var changes = _ref4.changes,
      AMId = _ref4.AMId,
      resourceId = _ref4.resourceId,
      token = _ref4.token;

  var params = {
    AMaaSClass: 'assets',
    AMId: AMId,
    resourceId: resourceId,
    data: changes,
    token: token
  };
  var promise = (0, _network.patchData)(params).then(function (result) {
    result = _parseAsset(result);
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
 * Delete an exising Asset. This will set the Asset status to 'Inactive'.
 * @function deactivate
 * @memberof module:Assets.api
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Asset to be deleted
 * @param {string} params.resourceId - Asset ID of the Asset to be deleted
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function deactivate(_ref5, callback) {
  var AMId = _ref5.AMId,
      resourceId = _ref5.resourceId,
      token = _ref5.token;

  var params = {
    AMaaSClass: 'assets',
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

function _parseAsset(object) {
  if (!object.assetType) {
    return new AssetClasses.Asset(object);
  }
  return new AssetClasses[object.assetType](object);
}