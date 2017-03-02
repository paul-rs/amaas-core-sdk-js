'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AMaaSModel = require('./AMaaSModel/AMaaSModel.js');

Object.defineProperty(exports, 'AMaaSModel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AMaaSModel).default;
  }
});

var _Reference = require('./Reference/Reference.js');

Object.defineProperty(exports, 'Reference', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Reference).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }