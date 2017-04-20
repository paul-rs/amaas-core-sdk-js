'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.Class = undefined;

var _assets = require('../assets');

var Class = _interopRequireWildcard(_assets);

var _assets2 = require('../utils/assets');

var api = _interopRequireWildcard(_assets2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Exports
/**
 * Classes and API methods for the Assets service
 * @module Assets
 */

// Classes
exports.Class = Class;
exports.api = api;

// CRUD methods