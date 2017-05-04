'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decimal = require('decimal.js');

var _decimal2 = _interopRequireDefault(_decimal);

var _asset = require('../Asset/asset');

var _asset2 = _interopRequireDefault(_asset);

var _enums = require('../enums.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an FX Option
 * @memberof module:assets
 * @extends module:assets.Asset
 */
var ForeignExchangeOption = function (_Asset) {
  _inherits(ForeignExchangeOption, _Asset);

  /**
   * Construct a new FX Option instance
   * @param {object} params - ForeignExchangeOption creation options:
   * @param {number} params.assetManagerId - ID of FX Option's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} [params.assetClass=ForeignExchange] - Auto-set to `ForeignExchange` __(read-only)__
   * @param {boolean} [params.fungible=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the FX Option's issuer
   * @param {string} [params.assetStatus=Active] - Status of the FX Option
   * @param {string} [params.countryId] - ID of FX Option's country
   * @param {string} [params.venueId] - ID of FX Option's venue if applicable
   * @param {string} [params.currency] - FX Option currency (e.g. USD, SGD)
   * @param {string} [params.issueDate] - Issue date (YYYY-MM-DD)
   * @param {string} [params.expiryDate] - Expiry date (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the FX Option
   * @param {string} [params.clientId] - ID of the client to which the FX Option belongs
   * @param {string} params.optionStyle - FX Option style __(required)__<br />
   * Available options:
   * <li>American</li>
   * <li>Bermudan</li>
   * <li>European</li>
   * @param {string} params.optionType - FX Option type __(required)__<br />
   * Available options:
   * <li>Put</li>
   * <li>Call</li>
   * @param {number} params.strike - Strike price of the FX Option __(required)__
   * @param {string} params.underlyingAssetId - ID of the underlying Asset __(required)__
   * @param {object} [params.comments] - Object of Comments attached to the FX Option
   * @param {object} [params.links] - Object of array of Links attached to the FX Option
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the FX Option. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the FX Option
   * @param {string} [params.updatedBy] - ID of the user that updated the FX Option
   * @param {date} [params.createdTime] - Time that the FX Option was created
   * @param {date} [params.updatedTime] - Time that the FX Option was updated
   * @param {number} [params.version] - Version number
  */
  function ForeignExchangeOption(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        assetIssuerId = _ref.assetIssuerId,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        currency = _ref.currency,
        issueDate = _ref.issueDate,
        expiryDate = _ref.expiryDate,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        clientId = _ref.clientId,
        optionType = _ref.optionType,
        strike = _ref.strike,
        premium = _ref.premium,
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

    _classCallCheck(this, ForeignExchangeOption);

    var _this = _possibleConstructorReturn(this, (ForeignExchangeOption.__proto__ || Object.getPrototypeOf(ForeignExchangeOption)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: 'ForeignExchange',
      fungible: false,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
      issueDate: issueDate,
      description: description,
      clientId: clientId,
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
          if (newOptionType) {
            if (_enums.OPTION_TYPES.indexOf(newOptionType) === -1) {
              throw new Error('Invalid Option Type: ' + newOptionType);
            }
            _this._optionType = newOptionType;
          }
        },
        enumerable: true
      },
      _optionStyle: { writable: true, enumerable: false },
      optionStyle: {
        get: function get() {
          return _this._optionStyle;
        },
        set: function set(newOptionStyle) {
          if (newOptionStyle) {
            if (_enums.OPTION_STYLES.indexOf(newOptionStyle) === -1) {
              throw new Error('Invalid Option Style: ' + newOptionStyle);
            }
            _this._optionStyle = newOptionStyle;
          }
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
    _this.optionType = optionType;
    _this.strike = strike;
    _this.expiryDate = expiryDate;
    _this.underlyingAssetId = underlyingAssetId;
    _this.optionStyle = optionStyle;
    return _this;
  }

  return ForeignExchangeOption;
}(_asset2.default);

exports.default = ForeignExchangeOption;