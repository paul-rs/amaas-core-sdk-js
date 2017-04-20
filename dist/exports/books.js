'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.Class = undefined;

var _books = require('../books');

var Class = _interopRequireWildcard(_books);

var _books2 = require('../utils/books');

var api = _interopRequireWildcard(_books2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Export
/**
 * Classes and API methods for the Books Service
 * @module Books
 */

// Classes
exports.Class = Class;
exports.api = api;

// CRUD methods