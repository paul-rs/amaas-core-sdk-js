'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decimal = require('decimal.js');

var _asset = require('../Asset/asset');

var _asset2 = _interopRequireDefault(_asset);

var _enums = require('../enums.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an FX Option
 * @memberof module:Assets.class
 * @extends module:Assets.class.Asset
 */
var ForeignExchangeOption = function (_Asset) {
  _inherits(ForeignExchangeOption, _Asset);

  /**
   * Construct a new FX Option instance
   * @param {object} params - Asset creation options
   * @param {integer} params.assetManagerId - ID of Asset's Asset Manager (required)
   * @param {integer} params.assetId - ID of the Asset (required)
   * @param {string} params.assetClass - Class of the Asset
   * @param {bool} params.fungible - Whether this Asset is fungible (required)
   * @param {string} params.assetIssuerId - ID of the Asset's issuer
   * @param {string} params.assetStatus - Status of the Asset (e.g. 'Active')
   * @param {string} params.countryId - ID of Asset's country
   * @param {string} params.venueId - ID of Asset's venue if applicable
   * @param {string} params.currency - Asset currency (e.g. USD, SGD)
   * @param {string} params.issueDate - Issue date if applicable (YYYY-MM-DD)
   * @param {string} params.maturityDate - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} params.description - Description of the Asset
   * @param {string} params.clientId - ID of the client to which the Asset belongs
   * @param {string} params.optionStyle - Option style (American, Bermudan, European)
   * @param {string} params.optionType - Option type (Put, Call)
   * @param {number} params.strike - Strike price of the Option
   * @param {string} params.underlyingAssetId - ID of the underlying Asset
   * @param {object} params.comments - Object of Comments attached to the Asset
   * @param {object} params.links - Object of array of Links attached to the Asset
   * @param {object} params.references - Object of References associated with this Asset
   * @param {string} params.createdBy - ID of the user that created the FX Option
   * @param {string} params.updatedBy - ID of the user that updated the FX Option
   * @param {date} params.createdTime - Time that the FX Option was created
   * @param {date} params.updatedTime - Time that the FX Option was updated
   * @param {number} params.version - Version number
  */
  function ForeignExchangeOption(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'ForeignExchange' : _ref$assetClass,
        fungible = _ref.fungible,
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
      assetClass: assetClass,
      fungible: fungible,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
      issueDate: issueDate,
      maturityDate: maturityDate,
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
            _this._strike = new _decimal.Decimal(0);
          } else {
            _this._strike = new _decimal.Decimal(newStrike);
          }
        },
        enumerable: true
      },
      _premium: { writable: true, enumerable: false },
      premium: {
        get: function get() {
          return _this._premium;
        },
        set: function set(newPremium) {
          if (!newPremium) {
            _this._premium = new _decimal.Decimal(0);
          } else {
            _this._premium = new _decimal.Decimal(newPremium);
          }
        },
        enumerable: true
      }
    });
    _this.optionType = optionType;
    _this.strike = strike;
    _this.premium = premium;
    _this.underlyingAssetId = underlyingAssetId;
    _this.optionStyle = optionStyle;
    return _this;
  }

  return ForeignExchangeOption;
}(_asset2.default);

exports.default = ForeignExchangeOption;