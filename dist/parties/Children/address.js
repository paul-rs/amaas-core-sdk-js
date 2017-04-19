'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

    Object.defineProperties(_this, {
      _active: { writable: true, enumerable: false },
      active: {
        get: function get() {
          return _this._active;
        },
        set: function set(newActive) {
          switch (newActive) {
            case false:
              _this._active = false;
              break;
            case undefined:
              _this._active = true;
              break;
            default:
              _this._active = newActive;
          }
        }, enumerable: true
      },
      _addressPrimary: { writable: true, enumerable: false },
      addressPrimary: {
        get: function get() {
          return _this._addressPrimary;
        },
        set: function set(newAddressPrimary) {
          switch (!!newAddressPrimary) {
            case false:
              _this._addressPrimary = false;
              break;
            case undefined:
              _this._addressPrimary = true;
              break;
            default:
              _this._addressPrimary = !!newAddressPrimary;
          }
        }, enumerable: true
      },
      _countryId: { writable: true, enumerable: false },
      countryId: {
        get: function get() {
          return _this._countryId;
        },
        set: function set(newCountryId) {
          if (newCountryId) {
            if (newCountryId.length !== 3) {
              throw new Error('Invalid Country ID: ' + newCountryId);
            }
          }
          _this._countryId = newCountryId;
        },
        enumerable: true
      }
    });
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

  return Address;
}(_core.AMaaSModel);

exports.default = Address;