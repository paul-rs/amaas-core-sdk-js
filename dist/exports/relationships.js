'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.Class = undefined;

var _relationships = require('../relationships');

var Class = _interopRequireWildcard(_relationships);

var _relationships2 = require('../utils/relationships');

var api = _interopRequireWildcard(_relationships2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Exports
/**
 * Classes and API methods for the Relationships service (not ready yet)
 * @module Relationships
 */

// Classes
exports.Class = Class;
exports.api = api;

// CRUD methods