'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('../../core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an Address
 * @extends AMaaSModel
 */
var Address = function (_AMaaSModel) {
  _inherits(Address, _AMaaSModel);

  /**
   * Construct a new Address object
   * @param {object} params - Address creation options
   * @param {bool} params.addressPrimary - Flag for whether Address is primary for its owner
   * @param {string} params.lineOne - First line of the Address
   * @param {string} params.lineTwo - Second line of the Address
   * @param {string} params.city - City of the Address
   * @param {string} params.region - Region of the Address
   * @param {string} params.postalCode - Postal code of the Address
   * @param {string} params.countryId - Country of the Address
   * @param {bool} params.active - Whether this Address is active for its owner
   * @param {string} params.createdBy - ID of the user that created the Address (required if creating a new Address)
   * @param {string} params.updatedBy - ID of the user that updated the Address (use if amending existing Address)
   * @param {date} params.createdTime - Time that the Address was created (required if creating new Address)
   * @param {date} params.updatedTime - Time that the Address was updated (required if amending existing Address)
   * @param {number} params.version - Version number of the Address
   */
  function Address(_ref) {
    var _ref$addressPrimary = _ref.addressPrimary,
        addressPrimary = _ref$addressPrimary === undefined ? false : _ref$addressPrimary,
        lineOne = _ref.lineOne,
        lineTwo = _ref.lineTwo,
        city = _ref.city,
        region = _ref.region,
        postalCode = _ref.postalCode,
        countryId = _ref.countryId,
        active = _ref.active,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Address);

    var _this = _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).call(this, {
      createdBy: createdBy,
      createdTime: createdTime,
      updatedBy: updatedBy,
      updatedTime: updatedTime,
      version: version
    }));

    _this.addressPrimary = addressPrimary;
    _this.lineOne = lineOne;
    _this.lineTwo = lineTwo;
    _this.city = city;
    _this.region = region;
    _this.postalCode = postalCode;
    _this.countryId = countryId;
    _this.active = active;
    return _this;
  }

  _createClass(Address, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        address_primary: this.addressPrimary,
        line_one: this.lineOne,
        line_two: this.lineTwo,
        city: this.city,
        region: this.region,
        postal_code: this.postalCode,
        country_id: this.countryId,
        active: this.active,
        created_by: this.createdBy,
        created_time: this.createdTime,
        updated_by: this.updatedBy,
        updated_time: this.updatedTime,
        version: this.version
      };
    }
  }, {
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
    key: 'addressPrimary',
    set: function set(newAddressPrimary) {
      switch (newAddressPrimary) {
        case false:
          this._addressPrimary = false;
          break;
        case undefined:
          this._addressPrimary = true;
          break;
        default:
          this._addressPrimary = newAddressPrimary;
      }
    },
    get: function get() {
      return this._addressPrimary;
    }
  }]);

  return Address;
}(_core.AMaaSModel);

exports.default = Address;