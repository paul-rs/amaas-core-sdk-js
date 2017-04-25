'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decimal = require('decimal.js');

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
   * @param {string} params.fundType - Type of Fund (Open, Closed, ETF)
   * @param {string} params.creationDate - Fund's creation date (YYYY-MM-DD)
   * @param {number} params.nav - Fund's Net Asset Value
   * @param {number} params.expenseRatio - Fund's expense ratio
   * @param {number} params.netAssets - ???
   * @param {object} params.comments - Object of Comments attached to the Asset
   * @param {object} params.links - Object of array of Links attached to the Asset
   * @param {object} params.references - Object of References associated with this Asset
   * @param {string} params.createdBy - ID of the user that created the Asset
   * @param {string} params.updatedBy - ID of the user that updated the Asset
   * @param {date} params.createdTime - Time that the Asset was created
   * @param {date} params.updatedTime - Time that the Asset was updated
   * @param {number} params.version - Version number
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
        issueDate = _ref.issueDate,
        maturityDate = _ref.maturityDate,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
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
      _creationDate: { writable: true, enumerable: false },
      creationDate: {
        get: function get() {
          return _this._creationDate;
        },
        set: function set(newCreationDate) {
          if (newCreationDate) {
            var dArray = newCreationDate.split('-');
            var date = new Date(dArray[0], dArray[1] - 1, dArray[2]);
            _this._creationDate = date;
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
            _this._expenseRatio = new _decimal.Decimal(0);
          } else {
            _this._expenseRatio = new _decimal.Decimal(newExpenseRatio);
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
            _this._nav = new _decimal.Decimal(0);
          } else {
            _this._nav = new _decimal.Decimal(newNav);
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