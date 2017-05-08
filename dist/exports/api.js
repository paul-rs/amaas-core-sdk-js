'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.Transactions = exports.Positions = exports.Parties = exports.CorporateActions = exports.Books = exports.Assets = exports.AssetManagers = exports.Allocations = undefined;

var _allocations = require('../utils/allocations');

var Allocations = _interopRequireWildcard(_allocations);

var _assetManagers = require('../utils/assetManagers');

var AssetManagers = _interopRequireWildcard(_assetManagers);

var _assets = require('../utils/assets');

var Assets = _interopRequireWildcard(_assets);

var _books = require('../utils/books');

var Books = _interopRequireWildcard(_books);

var _corporateActions = require('../utils/corporateActions');

var CorporateActions = _interopRequireWildcard(_corporateActions);

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

exports.Allocations = Allocations;
exports.AssetManagers = AssetManagers;
exports.Assets = Assets;
exports.Books = Books;
exports.CorporateActions = CorporateActions;
exports.Parties = Parties;
exports.Positions = Positions;
exports.Transactions = Transactions;
exports.config = config; /**
                          * API Methods. These methods enable communication with the AMaaS Database. All methods return Promises with the option to use callbacks instead. Specific implementation instructions are detailed below.
                          * @module api
                          */

function config(config) {
  var stage = config.stage,
      credentialsPath = config.credentialsPath,
      token = config.token;

  (0, _network.configureStage)({ stage: stage, credentialsPath: credentialsPath });
  (0, _network.configureAuth)({ token: token });
}