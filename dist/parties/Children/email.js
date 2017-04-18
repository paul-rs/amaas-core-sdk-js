'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../../core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an Email
 * @extends AMaaSModel
 */
var Email = function (_AMaaSModel) {
  _inherits(Email, _AMaaSModel);

  /**
   * Construct a new Email object
   * @param {object} params - Email creation options
   * @param {string} params.email - Email address
   * @param {bool} params.emailPrimary - Whether the Email is primary for its owner
   * @param {bool} params.active - Whether the Email is active for its owner
   * @param {string} params.createdBy - ID of the user that created the Email (required if creating a new Email)
   * @param {string} params.updatedBy - ID of the user that updated the Email (use if amending existing Email)
   * @param {date} params.createdTime - Time that the Email was created (required if creating new Email)
   * @param {date} params.updatedTime - Time that the Email was updated (required if amending existing Email)
   * @param {number} params.version - Version number of the Email
   */
  function Email(_ref) {
    var emailPrimary = _ref.emailPrimary,
        email = _ref.email,
        active = _ref.active,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Email);

    var _this = _possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
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
      _emailPrimary: { writable: true, enumerable: false },
      emailPrimary: {
        get: function get() {
          return _this._emailPrimary;
        },
        set: function set(newEmailPrimary) {
          switch (!!newEmailPrimary) {
            case false:
              _this._emailPrimary = false;
              break;
            case undefined:
              _this._emailPrimary = true;
              break;
            default:
              _this._emailPrimary = !!newEmailPrimary;
          }
        }, enumerable: true
      }
    });
    _this.emailPrimary = emailPrimary;
    _this.email = email;
    _this.active = active;
    return _this;
  }

  return Email;
}(_core.AMaaSModel);

exports.default = Email;