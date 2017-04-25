'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.Parties = exports.Books = exports.Assets = exports.AssetManagers = undefined;

var _allocations = require('../utils/allocations');

var Allocations = _interopRequireWildcard(_allocations);

var _assetManagers = require('../utils/assetManagers');

var AssetManagers = _interopRequireWildcard(_assetManagers);

var _assets = require('../utils/assets');

var Assets = _interopRequireWildcard(_assets);

var _books = require('../utils/books');

var Books = _interopRequireWildcard(_books);

var _netting = require('../utils/netting');

var Netting = _interopRequireWildcard(_netting);

var _parties = require('../utils/parties');

var Parties = _interopRequireWildcard(_parties);

var _positions = require('../utils/positions');

var Positions = _interopRequireWildcard(_positions);

var _relationships = require('../utils/relationships');

var Relationships = _interopRequireWildcard(_relationships);

var _transactions = require('../utils/transactions');

var Transactions = _interopRequireWildcard(_transactions);

var _network = require('../utils/network');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * API Methods
 * @module api
 */

exports.AssetManagers = AssetManagers;
exports.Assets = Assets;
exports.Books = Books;
exports.Parties = Parties;
exports.config = config;


function config(config) {
  var stage = config.stage,
      token = config.token;

  (0, _network.configureStage)({ stage: stage, token: token });
}