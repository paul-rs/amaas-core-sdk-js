'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('../../core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Decimal = require('decimal.js');

/**
 * Class representing a Charge (a Transaction children type)
 * @extends AMaaSModel
 */

var Charge = function (_AMaaSModel) {
  _inherits(Charge, _AMaaSModel);

  /**
   * Construct a new Charge object
   * @param {object} params - Charge creation options
   * @param {string} params.chargeValue - Value of the charge
   * @param {string} params.currency - Currency of the charge (e.g. SGD, USD etc.)
   * @param {bool} params.active - Whether this Charge is active
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new Charge)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing Charge)
   * @param {date} params.createdTime - Time that the Charge was created (required if creating new Charge)
   * @param {date} params.updatedTime - Time that the Charge was updated (required if amending existing Charge)
   * @param {number} params.version - Version number of the Charge
   */
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

    _this.chargeValue = chargeValue;
    _this.currency = currency;
    _this.active = active;
    _this.netAffecting = netAffecting === false ? false : true;
    return _this;
  }

  _createClass(Charge, [{
    key: 'active',
    set: function set(newActive) {
      switch (newActive) {
        case false:
          this._active = false;
          break;
        case undefined:
          this._active = true;
          break;
        default:
          this._active = newActive;
      }
    },
    get: function get() {
      return this._active;
    }
  }, {
    key: 'netAffecting',
    set: function set(newNetAffecting) {
      switch (newNetAffecting) {
        case false:
          this._netAffecting = false;
          break;
        case undefined:
          this._netAffecting = true;
          break;
        default:
          this._netAffecting = newNetAffecting;
      }
    },
    get: function get() {
      return this._netAffecting;
    }
  }, {
    key: 'chargeValue',
    set: function set() {
      var newChargeValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this._chargeValue = new Decimal(newChargeValue);
    },
    get: function get() {
      return this._chargeValue;
    }
  }]);

  return Charge;
}(_core.AMaaSModel);

exports.default = Charge;