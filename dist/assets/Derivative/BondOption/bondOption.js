'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decimal = require('decimal.js');

var _decimal2 = _interopRequireDefault(_decimal);

var _derivative = require('../Derivative/derivative.js');

var _derivative2 = _interopRequireDefault(_derivative);

var _enums = require('../../enums');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an Bond Option
 * @memberof module:assets
 * @extends module:assets.Derivative
 */
var BondOption = function (_Derivative) {
  _inherits(BondOption, _Derivative);

  /**
   * Construct a new Bond Option instance
   * @param {object} params - BondOption creation options
   * @param {number} params.assetManagerId - ID of Bond Option's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Bond Option __(required)__
   * @param {string} [params.assetClass=Derivative] - Auto-set to `Derivative` __(read-only)__
   * @param {boolean} [params.fungible=false] - Auto-set to `false` for Derivative and subclasses
   * @param {string} [params.assetIssuerId] - ID of the Bond Option's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Bond Option
   * @param {string} [params.countryId] - ID of Bond Option's country
   * @param {string} [params.venueId] - ID of Bond Option's venue if applicable
   * @param {string} [params.currency] - Bond Option currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date (YYYY-MM-DD)
   * @param {string} [params.expiryDate=9999-12-31] - Expiry date (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Bond Option
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} params.optionStyle - Option style __(required)__<br />
   * Available options:
   * <li>American</li>
   * <li>Bermudan</li>
   * <li>European</li>
   * @param {string} params.optionType - Option type __(required)__<br />
   * Available options:
   * <li>Put</li>
   * <li>Call</li>
   * @param {number} params.strike - Strike price of the Bond Option. Stored as a Decimal instance __(required)__
   * @param {string} params.underlyingAssetId - ID of the underlying Asset __(required)__
   * @param {object} [params.comments] - Object of Comments attached to the Bond Option
   * @param {object} [params.links] - Object of array of Links attached to the Bond Option
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Bond Option. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Bond Option
   * @param {string} [params.updatedBy] - ID of the user that updated the Bond Option
   * @param {date} [params.createdTime] - Time that the Bond Option was created
   * @param {date} [params.updatedTime] - Time that the Bond Option was updated
   * @param {number} [params.version] - Version number of the Bond Option
  */
  function BondOption(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        assetIssuerId = _ref.assetIssuerId,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        currency = _ref.currency,
        issueDate = _ref.issueDate,
        maturityDate = _ref.maturityDate,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        clientId = _ref.clientId,
        premium = _ref.premium,
        optionType = _ref.optionType,
        strike = _ref.strike,
        underlyingAssetId = _ref.underlyingAssetId,
        optionStyle = _ref.optionStyle,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, BondOption);

    var _this = _possibleConstructorReturn(this, (BondOption.__proto__ || Object.getPrototypeOf(BondOption)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: 'Derivative',
      fungible: false,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
      issueDate: issueDate,
      maturityDate: maturityDate,
      description: description,
      clientId: clientId,
      premium: premium,
      comments: comments,
      links: links,
      references: references,
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    Object.defineProperties(_this, {
      _optionType: { writable: true, enumerable: false },
      optionType: {
        get: function get() {
          return _this._optionType;
        },
        set: function set(newOptionType) {
          if (_enums.OPTION_TYPES.indexOf(newOptionType) === -1) {
            throw new Error('Invalid Option Type: ' + newOptionType);
          }
          _this._optionType = newOptionType;
        },
        enumerable: true
      },
      _optionStyle: { writable: true, enumerable: false },
      optionStyle: {
        get: function get() {
          return _this._optionStyle;
        },
        set: function set(newOptionStyle) {
          if (_enums.OPTION_STYLES.indexOf(newOptionStyle) === -1) {
            throw new Error('Invalid Option Style: ' + newOptionStyle);
          }
          _this._optionStyle = newOptionStyle;
        },
        enumerable: true
      },
      _strike: { writable: true, enumerable: false },
      strike: {
        get: function get() {
          return _this._strike;
        },
        set: function set(newStrike) {
          if (!newStrike) {
            _this._strike = new _decimal2.default(0);
          } else {
            _this._strike = new _decimal2.default(newStrike);
          }
        },
        enumerable: true
      },
      _expiryDate: { writable: true, enumerable: false },
      expiryDate: {
        get: function get() {
          return _this._expiryDate;
        },
        set: function set(newExpiryDate) {
          if (newExpiryDate) {
            _this._expiryDate = newExpiryDate;
          } else {
            _this._expiryDate = '9999-12-31';
          }
        },
        enumerable: true
      }
    });
    _this.optionStyle = optionStyle;
    _this.optionType = optionType;
    _this.strike = strike;
    _this.expiryDate = expiryDate;
    _this.underlyingAssetId = underlyingAssetId;
    return _this;
  }

  return BondOption;
}(_derivative2.default);

exports.default = BondOption;