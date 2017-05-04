'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decimal = require('decimal.js');

var _decimal2 = _interopRequireDefault(_decimal);

var _future = require('../Future/future');

var _future2 = _interopRequireDefault(_future);

var _enums = require('../../enums.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Future Option
 * @memberof module:assets
 * @extends module:assets.Future
 */
var FutureOption = function (_Future) {
  _inherits(FutureOption, _Future);

  /**
   * Construct a new Future Option instance
   * @param {object} params - Future Option creation options:
   * @param {number} params.assetManagerId - ID of Future Option's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Future Option __(required)__
   * @param {string} [params.assetClass=Future] - Auto-set to `Future` __(read-only)__
   * @param {boolean} [params.fungible=true] - Auto-set to `true` for Future subclasses __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Future Option's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Future Option
   * @param {string} [params.countryId] - ID of Future Option's country
   * @param {string} [params.venueId] - ID of Future Option's venue if applicable
   * @param {string} [params.currency] - Future Option currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.expiryDate=9999-12-31] - Expiry date (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Future Option
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} params.settlementType - Settlement Type __(required)__<br />
   * Available options:
   * <li>Cash</li>
   * <li>Physical</li>
   * @param {number} params.contractSize - Contract Size __(required)__
   * @param {number} [params.pointValue] - Future point value. Stored as a Decimal instance
   * @param {number} params.tickSize - Future tick size. Stored as a Decimal instance __(required)__
   * @param {string} [params.quoteUnit] - Future quote unit
   * @param {string} params.underlyingAssetId - ID of the underlying Asset __(required)__
   * @param {string} params.optionType - Option type __(required)__<br />
   * Available options:
   * <li>Put</li>
   * <li>Call</li>
   * @param {string} params.optionStyle - Option style __(required)__<br />
   * Available options:
   * <li>American</li>
   * <li>Bermudan</li>
   * <li>European</li>
   * @param {number} params.strike - Strike price __(required)__
   * @param {object} [params.comments] - Object of Comments attached to the Future Option
   * @param {object} [params.links] - Object of array of Links attached to the Future Option
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Future Option
   * @param {string} [params.createdBy] - ID of the user that created the Future Option
   * @param {string} [params.updatedBy] - ID of the user that updated the Future Option
   * @param {date} [params.createdTime] - Time that the Future Option was created
   * @param {date} [params.updatedTime] - Time that the Future Option was updated
   * @param {number} [params.version] - Version number
  */
  function FutureOption(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        assetIssuerId = _ref.assetIssuerId,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        currency = _ref.currency,
        issueDate = _ref.issueDate,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        clientId = _ref.clientId,
        settlementType = _ref.settlementType,
        contractSize = _ref.contractSize,
        pointValue = _ref.pointValue,
        tickSize = _ref.tickSize,
        quoteUnit = _ref.quoteUnit,
        underlyingAssetId = _ref.underlyingAssetId,
        expiryDate = _ref.expiryDate,
        optionType = _ref.optionType,
        optionStyle = _ref.optionStyle,
        strike = _ref.strike,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, FutureOption);

    var _this = _possibleConstructorReturn(this, (FutureOption.__proto__ || Object.getPrototypeOf(FutureOption)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
      issueDate: issueDate,
      description: description,
      clientId: clientId,
      settlementType: settlementType,
      contractSize: contractSize,
      pointValue: pointValue,
      tickSize: tickSize,
      quoteUnit: quoteUnit,
      underlyingAssetId: underlyingAssetId,
      expiryDate: expiryDate,
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
      }
    });
    _this.optionType = optionType;
    _this.optionStyle = optionStyle;
    _this.strike = strike;
    return _this;
  }

  return FutureOption;
}(_future2.default);

exports.default = FutureOption;