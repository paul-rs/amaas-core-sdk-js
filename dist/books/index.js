'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _book = require('./Book/book.js');

Object.defineProperty(exports, 'Book', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_book).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }