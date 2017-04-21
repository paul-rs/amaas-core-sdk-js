'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildURL = buildURL;
exports.retrieveData = retrieveData;
exports.insertData = insertData;
exports.putData = putData;
exports.patchData = patchData;
exports.deleteData = deleteData;
exports.searchData = searchData;

var _config = require('../../config.js');

var _config2 = _interopRequireDefault(_config);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { baseURL } from './constants.js'
// import * as types from '../../core/types.js'
require('dotenv').config();

/***
 * !This is an internal function that should not be called by the end user!

 * Builds a URL for HTTP request
 * @param {object} anonymous: anonyous object with arguments:
 * @param {string} AMaaSClass: class being requested/sent (e.g. Transaction) (required)
 * @param {string} AMId: Asset Manager Id (required)
 * @param {string} resourceId: Id of the resource being requested (e.g. book_id)
*/
function buildURL(_ref) {
  var AMaaSClass = _ref.AMaaSClass,
      AMId = _ref.AMId,
      resourceId = _ref.resourceId;

  var baseURL = '';
  switch (AMaaSClass) {
    case 'book':
      baseURL = _config2.default.books + '/books';
      break;
    case 'parties':
      baseURL = _config2.default.parties + '/parties';
      break;
    case 'assetManagers':
      baseURL = _config2.default.assetManagers + '/asset-managers';
      break;
    case 'assets':
      baseURL = _config2.default.assets + '/assets';
      break;
    case 'positions':
      baseURL = _config2.default.transactions + '/positions';
      break;
    case 'allocations':
      baseURL = _config2.default.transactions + '/allocations';
      break;
    case 'netting':
      baseURL = _config2.default.transactions + '/netting';
      break;
    case 'relationships':
      baseURL = _config2.default.assetManagers + '/asset-manager-relationships';
      break;
    default:
      throw new Error('Invalid class type: ' + AMaaSClass);
  }
  if (!AMId) {
    return baseURL + '/';
  } else if (!resourceId) {
    return baseURL + '/' + AMId;
  } else {
    return baseURL + '/' + AMId + '/' + resourceId;
  }
}

/***
 * !This is an internal function that should not be called by the end user!
 * !Wrapper functions are exposed for the individual asset classes for consumption!

 * Base function for retrieval of data from the database (GET request)
 * @param {object} anonymous: anonymous object with arguments:
 * @param {string} AMaaSClass: class being requested/sent (e.g. Transaction) (required)
 * @param {string} AMId: Asset Manager Id (required)
 * @param {string} resourceId: Id of the resource being requested (e.g. book_id)
*/
function retrieveData(_ref2, callback) {
  var AMaaSClass = _ref2.AMaaSClass,
      AMId = _ref2.AMId,
      resourceId = _ref2.resourceId,
      token = _ref2.token;

  // callback(err, result)
  // Class and AMId needed to build the Url and for authorization
  if (!AMaaSClass || !AMId) {
    if (typeof callback !== 'function') {
      return Promise.reject('Both class and AMId are required');
    }
    callback('Both class and AMId are required');
    return;
    // throw new Error('Both class and AMId are required')
  }
  if (!token) {
    if (typeof callback !== 'function') {
      return Promise.reject('Missing Authorization');
    }
    callback('Missing Authorization');
    return;
    // throw new Error('Missing Authorization')
  }
  var url = void 0;
  // If resourceId is supplied, append to url. Otherwise, return all data for AMId
  try {
    url = buildURL({ AMaaSClass: AMaaSClass, AMId: AMId, resourceId: resourceId });
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e);
    }
    callback(e);
    return;
  }
  var promise = _superagent2.default.get(url).set('Authorization', token).query({ camelcase: true });
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(function (response) {
      return response.body;
    });
  }
  promise.end(function (error, response) {
    if (!error && response.status == 200) {
      callback(null, response.body);
    } else {
      var statusCode = response ? response.status : '';
      var requestError = { statusCode: statusCode, error: error };
      if (typeof callback === 'function') {
        callback(requestError);
      }
    }
  });
}

/***
 * !This is an internal function that should not be called by the end user!
 * !Wrapper functions are exposed for the individual asset classes for consumption!

 * Base function for insertion of data to the database (POST request)
 * @param {object} anonymous: anonymous object with arguments:
 * @param {string} AMaaSClass: class being requested/sent (e.g. Transaction) (required)
 * @param {string} AMId: Asset Manager Id (required)
 * @param {string} data: data to insert into database
*/
function insertData(_ref3, callback) {
  var AMaaSClass = _ref3.AMaaSClass,
      AMId = _ref3.AMId,
      resourceId = _ref3.resourceId,
      data = _ref3.data,
      token = _ref3.token;

  // if (!AMaaSClass || !AMId || !data) {
  //   throw new Error('Class, AMId and data to insert are required')
  // }
  if (!token) {
    if (typeof callback !== 'function') {
      return Promise.reject('Missing Authorization');
    }
    callback('Missing Authorization');
    return;
  }
  var url = void 0;
  try {
    url = buildURL({
      AMaaSClass: AMaaSClass,
      AMId: AMId,
      resourceId: resourceId
    });
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e);
    }
    callback(e);
    return;
  }
  // Data is object with required key value pairs for that class
  // const am = 'asset_manager_id'
  // data[am] = AMId
  var params = {
    url: url,
    json: data
  };
  var promise = _superagent2.default.post(url).send(data).set('Authorization', token).query({ camelcase: true });
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(function (response) {
      return response.body;
    });
  }
  promise.end(function (error, response) {
    var body = void 0;
    if (response) body = response.body;
    _networkCallback(error, response, body, callback);
  });
}

function putData(_ref4, callback) {
  var AMaaSClass = _ref4.AMaaSClass,
      AMId = _ref4.AMId,
      resourceId = _ref4.resourceId,
      data = _ref4.data,
      token = _ref4.token;

  if (!token) {
    if (typeof callback !== 'function') {
      return Promise.reject('Missing Authorization');
    }
    callback('Missing Authorization');
    return;
  }
  var url = void 0;
  try {
    url = buildURL({
      AMaaSClass: AMaaSClass,
      AMId: AMId,
      resourceId: resourceId
    });
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e);
    }
    callback(e);
    return;
  }
  var params = {
    url: url,
    json: data
  };
  var promise = _superagent2.default.put(url).send(data).set('Authorization', token).query({ camelcase: true });
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(function (response) {
      return response.body;
    });
  }
  promise.end(function (error, response) {
    var body = void 0;
    if (response) body = response.body;
    _networkCallback(error, response, body, callback);
  });
}

function patchData(_ref5, callback) {
  var AMaaSClass = _ref5.AMaaSClass,
      AMId = _ref5.AMId,
      resourceId = _ref5.resourceId,
      data = _ref5.data,
      token = _ref5.token;

  if (!token) {
    if (typeof callback !== 'function') {
      return Promise.reject('Missing Authorization');
    }
    callback('Missing Authorization');
    return;
  }
  var url = void 0;
  try {
    url = buildURL({
      AMaaSClass: AMaaSClass,
      AMId: AMId,
      resourceId: resourceId
    });
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e);
    }
    callback(e);
    return;
  }
  var params = {
    url: url,
    json: data
  };
  var promise = _superagent2.default.patch(url).send(data).set('Authorization', token).query({ camelcase: true });
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(function (response) {
      return response.body;
    });
  }
  promise.end(function (error, response) {
    var body = void 0;
    if (response) body = response.body;
    _networkCallback(error, response, body, callback);
  });
}

function deleteData(_ref6, callback) {
  var AMaaSClass = _ref6.AMaaSClass,
      AMId = _ref6.AMId,
      resourceId = _ref6.resourceId,
      token = _ref6.token;

  if (!token) {
    if (typeof callback !== 'function') {
      return Promise.reject('Missing Authorization');
    }
    callback('Missing Authorization');
    return;
  }
  var url = void 0;
  try {
    url = buildURL({
      AMaaSClass: AMaaSClass,
      AMId: AMId,
      resourceId: resourceId
    });
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e);
    }
    callback(e);
    return;
  }
  var promise = _superagent2.default.delete(url).set('Authorization', token).query({ camelcase: true });
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(function (response) {
      return response.body;
    });
  }
  promise.end(function (error, response) {
    var body = void 0;
    if (response) body = response.body;
    _networkCallback(error, response, body, callback);
  });
}

/*
 * query is an array of objects: { key: <string>, values: <array> }
 * key is the key to search over (depends on the specific service)
 * and values are all the values to search over. E.g.
 *   const queries = [
 *     { key: 'assetIds', values: [1, 2, 44, 'asf'] },
 *     { key: 'assetClasses', values: ['Currency', 'Bond', 'Equity']},
 *     { key: 'assetTypes', values: ['GovernmentBond, ForeignExchange']}
 *   ]
 */
function searchData(_ref7, callback) {
  var AMaaSClass = _ref7.AMaaSClass,
      query = _ref7.query,
      token = _ref7.token;

  if (!token) {
    if (typeof callback !== 'function') {
      return Promise.reject('Missing Authorization');
    }
    callback('Missing Authorization');
    return;
  }
  var url = void 0;
  try {
    url = buildURL({
      AMaaSClass: AMaaSClass
    });
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e);
    }
    callback(e);
    return;
  }
  var queryString = { camelcase: true };
  for (var i = 0; i < query.length; i++) {
    queryString[query[i].key] = query[i].values.join();
  }
  var promise = _superagent2.default.get(url).set('Authorization', token).query(queryString);
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(function (response) {
      return response;
    });
  }
  promise.end(function (error, response) {
    var body = void 0;
    if (response) body = response.body;
    _networkCallback(error, response, body, callback);
  });
}

function _networkCallback(error, response, body, callback) {
  if (typeof callback !== 'function') {
    return false;
  }
  if (!error && response.status === 200) {
    callback(null, body);
  } else if (error) {
    callback(error);
  } else {
    callback({ response: response, body: body });
  }
}