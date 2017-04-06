'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.search = search;
exports._parsePos = _parsePos;

var _network = require('../network');

var _position = require('../../transactions/Positions/position.js');

var _position2 = _interopRequireDefault(_position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId,
      token = _ref.token;

  var params = {
    AMaaSClass: 'positions',
    AMId: AMId,
    resourceId: resourceId,
    token: token
  };
  var promise = (0, _network.retrieveData)(params).then(function (result) {
    var pos = _parsePos(result);
    if (typeof callback === 'function') {
      callback(null, pos);
    } else {
      return pos;
    }
  });
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise;
  }
  promise.catch(function (error) {
    return callback(error);
  });
}

function search(_ref2, callback) {
  var queryKey = _ref2.queryKey,
      queryValue = _ref2.queryValue,
      token = _ref2.token;

  var params = {
    AMaaSClass: 'positions',
    queryKey: queryKey,
    queryValue: queryValue,
    token: token
  };
  var promise = (0, _network.searchData)(params).then(function (result) {
    var positions = result.map(function (pos) {
      return _parsePos(pos);
    });
    if (typeof callback === 'function') {
      callback(null, positions);
    } else {
      return positions;
    }
  });
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise;
  }
  promise.catch(function (error) {
    return callback(error);
  });
}

function _parsePos(pos) {
  return new _position2.default(pos);
  // return new Position({
  //   createdBy: pos.created_by,
  //   updatedBy: pos.updated_by,
  //   createdTime: pos.created_time,
  //   updatedTime: pos.updated_time,
  //   version: pos.version,
  //   assetManagerId: pos.asset_manager_id,
  //   assetBookId: pos.asset_book_id,
  //   assetId: pos.asset_id,
  //   quantity: pos.quantity,
  //   validFrom: pos.valid_from,
  //   internalId: pos.internal_id,
  //   validTo: pos.valid_to,
  //   clientId: pos.client_id,
  //   accountingType: pos.accounting_type,
  //   accountId: pos.account_id
  // })
}