'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStage = configureStage;
exports.endpoint = endpoint;
exports.buildURL = buildURL;
exports.makeRequest = makeRequest;
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

require('dotenv').config();

var stage = void 0;
function configureStage(config) {
  return stage = config;
}
function endpoint() {
  if (!stage) {
    return 'https://iwe48ph25i.execute-api.ap-southeast-1.amazonaws.com/dev';
  }
  return 'https://iwe48ph25i.execute-api.ap-southeast-1.amazonaws.com/' + stage;
}

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
      baseURL = endpoint() + '/book/books';
      // baseURL = `${ENDPOINTS.books}/books`
      break;
    case 'parties':
      baseURL = endpoint() + '/party/parties';
      // baseURL = `${ENDPOINTS.parties}/parties`
      break;
    case 'assetManagers':
      baseURL = endpoint() + '/asset-manager/asset-managers';
      // baseURL = `${ENDPOINTS.assetManagers}/asset-managers`
      break;
    case 'assets':
      baseURL = endpoint() + '/asset/assets';
      // baseURL = `${ENDPOINTS.assets}/assets`
      break;
    case 'positions':
      baseURL = endpoint() + '/position/positions';
      // baseURL = `${ENDPOINTS.transactions}/positions`
      break;
    case 'allocations':
      baseURL = endpoint() + '/allocation/allocations';
      // baseURL = `${ENDPOINTS.transactions}/allocations`
      break;
    case 'netting':
      baseURL = endpoint() + '/netting/netting';
      // baseURL = `${ENDPOINTS.transactions}/netting`
      break;
    case 'relationships':
      baseURL = endpoint() + '/asset-manager-relationship/asset-manager-relationships';
      // baseURL = `${ENDPOINTS.assetManagers}/asset-manager-relationships`
      break;
    case 'transactions':
      baseURL = endpoint() + '/transaction/transactions';
      // baseURL = `${ENDPOINTS.transactions}/transactions`
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

function makeRequest(_ref2) {
  var method = _ref2.method,
      url = _ref2.url,
      data = _ref2.data,
      token = _ref2.token;

  switch (method) {
    case 'GET':
      return _superagent2.default.get(url).set('x-api-key', token).query({ camelcase: true });
    case 'SEARCH':
      return _superagent2.default.get(url).set('x-api-key', token).query(data);
    case 'POST':
      return _superagent2.default.post(url).send(data).set('x-api-key', token).query({ camelcase: true });
    case 'PUT':
      return _superagent2.default.put(url).send(data).set('x-api-key', token).query({ camelcase: true });
    case 'PATCH':
      return _superagent2.default.patch(url).send(data).set('x-api-key', token).query({ camelcase: true });
    case 'DELETE':
      return _superagent2.default.delete(url).set('x-api-key', token).query({ camelcase: true });
    default:
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
function retrieveData(_ref3, callback) {
  var AMaaSClass = _ref3.AMaaSClass,
      AMId = _ref3.AMId,
      resourceId = _ref3.resourceId,
      token = _ref3.token;

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
  var promise = makeRequest({ method: 'GET', url: url, token: token });
  // let promise = request.get(url).set('x-api-key', token).query({ camelcase: true })
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
function insertData(_ref4, callback) {
  var AMaaSClass = _ref4.AMaaSClass,
      AMId = _ref4.AMId,
      resourceId = _ref4.resourceId,
      data = _ref4.data,
      token = _ref4.token;

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
  var promise = makeRequest({ method: 'POST', url: url, data: data, token: token });
  // let promise = request.post(url).send(data).set('x-api-key', token).query({ camelcase: true })
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

function putData(_ref5, callback) {
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
  var promise = makeRequest({ method: 'PUT', url: url, data: data, token: token });
  // let promise = request.put(url).send(data).set('x-api-key', token).query({ camelcase: true })
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

function patchData(_ref6, callback) {
  var AMaaSClass = _ref6.AMaaSClass,
      AMId = _ref6.AMId,
      resourceId = _ref6.resourceId,
      data = _ref6.data,
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
  var params = {
    url: url,
    json: data
  };
  var promise = makeRequest({ method: 'PATCH', url: url, data: data, token: token });
  // let promise = request.patch(url).send(data).set('x-api-key', token).query({ camelcase: true })
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

function deleteData(_ref7, callback) {
  var AMaaSClass = _ref7.AMaaSClass,
      AMId = _ref7.AMId,
      resourceId = _ref7.resourceId,
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
  var promise = makeRequest({ method: 'DELETE', url: url, token: token });
  // let promise = request.delete(url).set('x-api-key', token).query({ camelcase: true })
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
function searchData(_ref8, callback) {
  var AMaaSClass = _ref8.AMaaSClass,
      query = _ref8.query,
      token = _ref8.token;

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
  var data = { camelcase: true };
  for (var i = 0; i < query.length; i++) {
    queryString[query[i].key] = query[i].values.join();
  }
  var promise = makeRequest({ method: 'SEARCH', url: url, token: token, data: data });
  // let promise = request.get(url).set('x-api-key', token).query(queryString)
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