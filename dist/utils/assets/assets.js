'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.insert = insert;
exports.amend = amend;
exports.partialAmend = partialAmend;
exports.deactivate = deactivate;
exports.reactivate = reactivate;
exports._parseAsset = _parseAsset;

var _network = require('../network');

var _assets = require('../../assets');

var AssetClasses = _interopRequireWildcard(_assets);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Retrieve Asset data for specified AMId and assetId
 * @function retrieve
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Asset
 * @param {string} [params.resourceId] - Asset ID of the Asset. Omit to return all Assets for the supplied AMId
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Assets or a single Asset instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Assets or a single Asset instance
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId;

  var params = {
    AMaaSClass: 'assets',
    AMId: AMId,
    resourceId: resourceId
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
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Asset Manager to whom the inserted Asset belongs
 * @param {Asset} params.asset - Asset instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. ` result` is the inserted Asset instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Asset instance
 */
function insert(_ref2, callback) {
  var AMId = _ref2.AMId,
      asset = _ref2.asset;

  var stringified = void 0,
      data = void 0;
  if (asset) {
    stringified = JSON.stringify(asset);
    data = JSON.parse(stringified);
  }
  var params = {
    AMaaSClass: 'assets',
    AMId: AMId,
    data: data
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
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Asset to amend
 * @param {Asset} params.asset - Amended Asset instance to PUT
 * @param {string} params.resourceId - Asset ID of the Asset to amend
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Asset instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended Asset instance
 */
function amend(_ref3, callback) {
  var AMId = _ref3.AMId,
      asset = _ref3.asset,
      resourceId = _ref3.resourceId;

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
    data: data
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
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Asset to be partially amended
 * @param {object} params.changes - Object of changes to the Asset.
 * @param {string} params.resourceId - Asset ID of the Asset to be partially amended
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Asset instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended Asset instance
 */
function partialAmend(_ref4, callback) {
  var AMId = _ref4.AMId,
      changes = _ref4.changes,
      resourceId = _ref4.resourceId;

  var params = {
    AMaaSClass: 'assets',
    AMId: AMId,
    resourceId: resourceId,
    data: changes
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
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Asset to be deleted
 * @param {string} params.resourceId - Asset ID of the Asset to be deleted
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the deactivated Asset instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the deactivated Asset instance
 */
function deactivate(_ref5, callback) {
  var AMId = _ref5.AMId,
      resourceId = _ref5.resourceId;

  var params = {
    AMaaSClass: 'assets',
    AMId: AMId,
    resourceId: resourceId,
    data: { assetStatus: 'Inactive' }
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
 * Reactivate a deactivated Asset. This will set the Asset status to 'Active'.
 * @function reactivate
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Asset to be deleted
 * @param {string} params.resourceId - Asset ID of the Asset to be deleted
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the reactivated Asset instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the reactivated Asset instance
 */
function reactivate(_ref6, callback) {
  var AMId = _ref6.AMId,
      resourceId = _ref6.resourceId;

  var params = {
    AMaaSClass: 'assets',
    AMId: AMId,
    resourceId: resourceId,
    data: { assetStatus: 'Active' }
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

function _parseAsset(object) {
  if (!object.assetType) {
    return new AssetClasses.Asset(object);
  }
  return new AssetClasses[object.assetType](object);
}