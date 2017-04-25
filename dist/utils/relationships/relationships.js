'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.insert = insert;
exports.amend = amend;

var _network = require('../network');

var _relationships = require('../../relationships');

/**
 * Retrieve Relationships for specified Asset Manager
 * @function retrieve
 * @memberof module:api.Relationships
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Relationships
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise} Returns a promise that resolves with Relationship instance or Array of Relationships if callback is not supplied
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      token = _ref.token;

  var params = {
    AMaaSClass: 'relationships',
    AMId: AMId,
    token: token
  };
  var promise = (0, _network.retrieveData)(params).then(function (result) {
    var relationships = void 0;
    if (!Array.isArray(result)) {
      relationships = _parseRelationship(result);
    } else {
      relationships = result.map(function (rel) {
        return _parseRelationship(rel);
      });
    }
    if (typeof callback === 'function') {
      callback(null, relationships);
    }
    return relationships;
  });
  if (typeof callback !== 'function') {
    return promise;
  }
  promise.catch(function (error) {
    return callback(error);
  });
}

/**
 * Insert a new Relationship
 * @function insert
 * @memberof module:api.Relationships
 * @static
 * @param {object} params - object of parameters:
 * @param {Relationship} params.relationship - Relationship instance to insert
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise} Returns ???
 */
function insert(_ref2, callback) {
  var relationship = _ref2.relationship,
      token = _ref2.token;

  var data = void 0;
  if (relationship) {
    data = JSON.parse(JSON.stringify(relationship));
  }
  var params = {
    AMaaSClass: 'relationships',
    data: data,
    token: token
  };
  var promise = (0, _network.insertData)(params).then(function (result) {
    result = _parseRelationship(result);
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
 * Amend an existing Relationship
 * @function amend
 * @memberof module:api.Relationships
 * @static
 * @param {object} params - object of parameters:
 * @param {Relationship} params.relationship - Amended Relationship instance
 * @param {number} params.AMId - Asset Manager ID who owns the Relationship to amend
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise} Returns ???
 */
function amend(_ref3, callback) {
  var relationship = _ref3.relationship,
      AMId = _ref3.AMId,
      token = _ref3.token;

  var data = void 0;
  if (relationship) {
    data = JSON.parse(JSON.stringify(relationship));
  }
  var params = {
    AMaaSClass: 'relationships',
    AMId: AMId,
    data: data,
    token: token
  };
  var promise = (0, _network.putData)(params).then(function (result) {
    result = _parseRelationship(result);
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

function _parseRelationship(rel) {
  return new _relationships.Relationship(rel);
}