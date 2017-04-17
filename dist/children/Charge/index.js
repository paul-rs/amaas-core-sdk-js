'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../../core');

var _decimal = require('decimal.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Charge = function (_AMaaSModel) {
  _inherits(Charge, _AMaaSModel);

  function Charge(_ref) {
    var chargeValue = _ref.chargeValue,
        currency = _ref.currency,
        active = _ref.active,
        netAffecting = _ref.netAffecting,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Charge);

    var _this = _possibleConstructorReturn(this, (Charge.__proto__ || Object.getPrototypeOf(Charge)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    Object.defineProperties(_this, {
      _chargeValue: { writable: true, enumerable: false },
      chargeValue: {
        get: function get() {
          return _this._chargeValue;
        },
        set: function set(newChargeValue) {
          if (newChargeValue) {
            _this._chargeValue = new _decimal.Decimal(chargeValue);
          } else {
            _this._chargeValue = new _decimal.Decimal(0);
          }
        },
        enumerable: true
      }
    });

    _this.chargeValue = chargeValue;
    _this.currency = currency;
    _this.active = active === false ? false : true;
    _this.netAffecting = netAffecting === false ? false : true;
    return _this;
  }

  return Charge;
}(_core.AMaaSModel);

exports.default = Charge;