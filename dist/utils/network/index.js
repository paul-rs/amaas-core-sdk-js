'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStage = configureStage;
exports.endpoint = endpoint;
exports.getToken = getToken;
exports.buildURL = buildURL;
exports.setAuthorization = setAuthorization;
exports.makeRequest = makeRequest;
exports.retrieveData = retrieveData;
exports.insertData = insertData;
exports.putData = putData;
exports.patchData = patchData;
exports.deleteData = deleteData;
exports.searchData = searchData;

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var stage = 'prod';
var token = void 0;

function configureStage(config) {
  stage = config.stage;
  switch (config.stage) {
    case 'staging':
      if (!config.token) {
        throw new Error('Missing Authorization');
      }
      token = config.token;
      break;
    case 'prod':
      token = 'token';
      // token = getToken()
      break;
    default:
      token = 'token';
    // token = getToken()
  }
  return;
}

function endpoint() {
  switch (stage) {
    case 'staging':
      return 'https://iwe48ph25i.execute-api.ap-southeast-1.amazonaws.com/staging';
    case 'prod':
      return 'https://iwe48ph25i.execute-api.ap-southeast-1.amazonaws.com/prod';
    default:
      console.warn('Unknown stage variable: ' + stage + '. Defaulting to /prod');
      return 'https://iwe48ph25i.execute-api.ap-southeast-1.amazonaws.com/prod';
  }
}

function getToken() {
  return new Promise(function (resolve, reject) {
    switch (stage) {
      case 'staging':
        resolve(token);
        break;
      case 'prod':
        // TODO: Implement Cognito to get access tokens
        resolve('token');
        break;
      default:
        reject('Missing Authorization');
    }
  });
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
      break;
    case 'parties':
      baseURL = endpoint() + '/party/parties';
      break;
    case 'assetManagers':
      baseURL = endpoint() + '/asset-manager/asset-managers';
      break;
    case 'assets':
      baseURL = endpoint() + '/asset/assets';
      break;
    case 'positions':
      baseURL = endpoint() + '/position/positions';
      break;
    case 'allocations':
      baseURL = endpoint() + '/allocation/allocations';
      break;
    case 'netting':
      baseURL = endpoint() + '/netting/netting';
      break;
    case 'relationships':
      baseURL = endpoint() + '/asset-manager-relationship/asset-manager-relationships';
      break;
    case 'transactions':
      baseURL = endpoint() + '/transaction/transactions';
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

function setAuthorization() {
  switch (stage) {
    case 'staging':
      return 'x-api-key';
    case 'prod':
      return 'Authorization';
    default:
      return 'x-api-key';
  }
}

function makeRequest(_ref2) {
  var method = _ref2.method,
      url = _ref2.url,
      data = _ref2.data;

  return getToken().then(function (res) {
    switch (method) {
      case 'GET':
        return _superagent2.default.get(url).set(setAuthorization(), res).query({ camelcase: true });
      case 'SEARCH':
        return _superagent2.default.get(url).set(setAuthorization(), res).query(data);
      case 'POST':
        return _superagent2.default.post(url).send(data).set(setAuthorization(), res).query({ camelcase: true });
      case 'PUT':
        return _superagent2.default.put(url).send(data).set(setAuthorization(), res).query({ camelcase: true });
      case 'PATCH':
        return _superagent2.default.patch(url).send(data).set(setAuthorization(), res).query({ camelcase: true });
      case 'DELETE':
        return _superagent2.default.delete(url).set(setAuthorization(), res).query({ camelcase: true });
      default:
    }
  }).catch(function (err) {
    return Promise.reject(err);
  });
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
      resourceId = _ref3.resourceId;

  // if (stage === 'dev' || stage === 'staging' && !token) {
  //   if (typeof callback !== 'function') {
  //     return Promise.reject('Missing Authorization')
  //   }
  //   callback('Missing Authorization')
  //   return
  // }
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
  var promise = makeRequest({ method: 'GET', url: url });
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
      data = _ref4.data;

  // if (stage === 'dev' || stage === 'staging' && !token) {
  //   if (typeof callback !== 'function') {
  //     return Promise.reject('Missing Authorization')
  //   }
  //   callback('Missing Authorization')
  //   return
  // }
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
  var promise = makeRequest({ method: 'POST', url: url, data: data });
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
      data = _ref5.data;

  // if (stage === 'dev' || stage === 'staging' && !token) {
  //   if (typeof callback !== 'function') {
  //     return Promise.reject('Missing Authorization')
  //   }
  //   callback('Missing Authorization')
  //   return
  // }
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
  var promise = makeRequest({ method: 'PUT', url: url, data: data });
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
      data = _ref6.data;

  // if (stage === 'dev' || stage === 'staging' && !token) {
  //   if (typeof callback !== 'function') {
  //     return Promise.reject('Missing Authorization')
  //   }
  //   callback('Missing Authorization')
  //   return
  // }
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
  var promise = makeRequest({ method: 'PATCH', url: url, data: data });
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
      resourceId = _ref7.resourceId;

  // if (stage === 'dev' || stage === 'staging' && !token) {
  //   if (typeof callback !== 'function') {
  //     return Promise.reject('Missing Authorization')
  //   }
  //   callback('Missing Authorization')
  //   return
  // }
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
  var promise = makeRequest({ method: 'DELETE', url: url });
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
      query = _ref8.query;

  // if (stage === 'dev' || stage === 'staging' && !token) {
  //   if (typeof callback !== 'function') {
  //     return Promise.reject('Missing Authorization')
  //   }
  //   callback('Missing Authorization')
  //   return
  // }
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
  var promise = makeRequest({ method: 'SEARCH', url: url, data: data });
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