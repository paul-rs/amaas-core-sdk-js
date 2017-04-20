'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deactivate = exports.amend = exports.insert = exports.retrieve = exports.Relationship = exports.AssetManager = undefined;

var _assetManagers = require('../assetManagers');

var _assetManagers2 = require('../utils/assetManagers');

// Exports
/**
 * Classes and API methods for the AssetManagers service
 * @module AssetManagers
 */

// Classes
exports.AssetManager = _assetManagers.AssetManager;
exports.Relationship = _assetManagers.Relationship;
exports.retrieve = _assetManagers2.retrieve;
exports.insert = _assetManagers2.insert;
exports.amend = _assetManagers2.amend;
exports.deactivate = _assetManagers2.deactivate;

// CRUD methods