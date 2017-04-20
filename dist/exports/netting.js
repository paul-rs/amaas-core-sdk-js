'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = undefined;

var _netting = require('../utils/netting');

var api = _interopRequireWildcard(_netting);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.api = api; /**
                    * API methods to send and retrieve Transaction Netting.
                    * (Not ready yet)
                    * @module Netting
                    */