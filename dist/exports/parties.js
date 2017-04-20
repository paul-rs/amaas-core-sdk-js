'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.Class = undefined;

var _parties = require('../parties');

var Class = _interopRequireWildcard(_parties);

var _parties2 = require('../utils/parties');

var api = _interopRequireWildcard(_parties2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Exports
/**
 * Classes and API methods for the Parties service
 * @module Parties
 */

// Classes
exports.Class = Class;
exports.api = api;

// CRUD methods