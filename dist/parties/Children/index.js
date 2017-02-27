'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _address = require('./address.js');

Object.defineProperty(exports, 'Address', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_address).default;
  }
});

var _email = require('./email.js');

Object.defineProperty(exports, 'Email', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_email).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }