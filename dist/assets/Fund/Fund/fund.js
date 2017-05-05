'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decimal = require('decimal.js');

var _decimal2 = _interopRequireDefault(_decimal);

var _asset = require('../../Asset/asset');

var _asset2 = _interopRequireDefault(_asset);

var _enums = require('../../enums.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Fund
 * @memberof module:assets
 * @extends module:assets.Asset
 */
var Fund = function (_Asset) {
  _inherits(Fund, _Asset);

  /**
   * Construct a new Fund instance
   * @param {object} params - Fund creation options:
   * @param {number} params.assetManagerId - ID of Fund's Asset Manager. Asset Manager refers to AMaaS user, NOT an asset manager in the Fund. __(required)__
   * @param {number} params.assetId - ID of the Fund __(required)__
   * @param {string} [params.assetClass=Fund] - Class of the Fund (a subclass of Fund may define its own assetClass)
   * @param {string} [params.assetType] - Type of the Fund. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` for Fund __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Fund's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Fund
   * @param {string} [params.countryId] - ID of Fund's country
   * @param {string} [params.venueId] - ID of Fund's venue if applicable
   * @param {string} [params.currency] - Fund currency (e.g. USD, SGD)
   * @param {string} [params.description] - Description of the Fund
   * @param {string} [params.displayName] - Display name of the Fund
   * @param {boolean} [params.rollPrice=true] - Whether to roll the price for the Fund
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} params.fundType - Type of Fund __(required)__<br />
   * Available options:
   * <li>Open</li>
   * <li>Closed</li>
   * <li>ETF</li>
   * @param {string} [params.creationDate=0001-01-01] - Fund's creation date (YYYY-MM-DD)
   * @param {number} [params.nav] - Fund's Net Asset Value. Stored as a Decimal instance
   * @param {number} [params.expenseRatio] - Fund's expense ratio. Stored as a Decimal instance
   * @param {number} [params.netAssets] - Fund's net assets. Stored as a Decimal instance
   * @param {object} [params.comments] - Object of Comments attached to the Fund
   * @param {object} [params.links] - Object of array of Links attached to the Fund
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Fund. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Fund
   * @param {string} [params.updatedBy] - ID of the user that updated the Fund
   * @param {date} [params.createdTime] - Time that the Fund was created
   * @param {date} [params.updatedTime] - Time that the Fund was updated
   * @param {number} [params.version] - Version number
  */
  function Fund(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Fund' : _ref$assetClass,
        fungible = _ref.fungible,
        assetIssuerId = _ref.assetIssuerId,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        currency = _ref.currency,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        displayName = _ref.displayName,
        rollPrice = _ref.rollPrice,
        clientId = _ref.clientId,
        fundType = _ref.fundType,
        creationDate = _ref.creationDate,
        nav = _ref.nav,
        expenseRatio = _ref.expenseRatio,
        netAssets = _ref.netAssets,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Fund);

    var _this = _possibleConstructorReturn(this, (Fund.__proto__ || Object.getPrototypeOf(Fund)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: assetClass,
      fungible: true,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
      description: description,
      displayName: displayName,
      rollPrice: rollPrice,
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
      _creationDate: { writable: true, enumerable: false },
      creationDate: {
        get: function get() {
          return _this._creationDate;
        },
        set: function set(newCreationDate) {
          if (newCreationDate) {
            _this._creationDate = newCreationDate;
          } else {
            _this._creationDate = '0001-01-01';
          }
        },
        enumerable: true
      },
      _fundType: { writable: true, enumerable: false },
      fundType: {
        get: function get() {
          return _this._fundType;
        },
        set: function set(newFundType) {
          if (newFundType) {
            if (_enums.FUND_TYPES.indexOf(newFundType) === -1) {
              throw new Error('Invalid Fund Type: ' + newFundType);
            }
            _this._fundType = fundType;
          }
        },
        enumerable: true
      },
      _expenseRatio: { writable: true, enumerable: false },
      expenseRatio: {
        get: function get() {
          return _this._expenseRatio;
        },
        set: function set(newExpenseRatio) {
          if (!newExpenseRatio) {
            _this._expenseRatio = new _decimal2.default(0);
          } else {
            _this._expenseRatio = new _decimal2.default(newExpenseRatio);
          }
        },
        enumerable: true
      },
      _nav: { writable: true, enumerable: false },
      nav: {
        get: function get() {
          return _this._nav;
        },
        set: function set(newNav) {
          if (!newNav) {
            _this._nav = new _decimal2.default(0);
          } else {
            _this._nav = new _decimal2.default(newNav);
          }
        },
        enumerable: true
      }
    });
    _this.fundType = fundType;
    _this.creationDate = creationDate;
    _this.nav = nav;
    _this.expenseRatio = expenseRatio;
    _this.netAssets = netAssets;
    return _this;
  }

  return Fund;
}(_asset2.default);

exports.default = Fund;