'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decimal = require('decimal.js');

var _decimal2 = _interopRequireDefault(_decimal);

var _listedDerivative = require('../ListedDerivative/listedDerivative');

var _listedDerivative2 = _interopRequireDefault(_listedDerivative);

var _enums = require('../../enums.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Future
 * @memberof module:assets
 * @extends module:assets.ListedDerivative
 */
var Future = function (_ListedDerivative) {
  _inherits(Future, _ListedDerivative);

  /**
   * Construct a new Future instance
   * @param {object} params - Future creation options:
   * @param {number} params.assetManagerId - ID of Future's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Future __(required)__
   * @param {string} [params.assetClass=Future] - Class of the Future (a subclass of Future may define its own assetClass)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Future's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Future
   * @param {string} [params.countryId] - ID of Future's country
   * @param {string} [params.venueId] - ID of Future's venue if applicable
   * @param {string} [params.currency] - Asset currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Future
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
   * @param {string} [params.expiryDate] - Date of the Future's expiry (YYYY-MM-DD)
   * @param {object} [params.comments] - Object of Comments attached to the Future
   * @param {object} [params.links] - Object of array of Links attached to the Future
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Future. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Future
   * @param {string} [params.updatedBy] - ID of the user that updated the Future
   * @param {date} [params.createdTime] - Time that the Future was created
   * @param {date} [params.updatedTime] - Time that the Future was updated
   * @param {number} [params.version] - Version number
  */
  function Future(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Future' : _ref$assetClass,
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
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Future);

    var _this = _possibleConstructorReturn(this, (Future.__proto__ || Object.getPrototypeOf(Future)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: assetClass,
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
      _settlementType: { writable: true, enumerable: false },
      settlementType: {
        get: function get() {
          return _this._settlementType;
        },
        set: function set(newSettlementType) {
          if (settlementType) {
            if (_enums.FUTURE_SETTLEMENT_TYPES.indexOf(newSettlementType) === -1) {
              throw new Error('Invalid Settlement Type: ' + newSettlementType);
            }
            _this._settlementType = newSettlementType;
          }
        },
        enumerable: true
      },
      _pointValue: { writable: true, enumerable: false },
      pointValue: {
        get: function get() {
          return _this._pointValue;
        },
        set: function set(newPointValue) {
          // TODO: This should be replaced with a calculation
          if (newPointValue) {
            _this._pointValue = new _decimal2.default(newPointValue);
          } else {
            _this._pointValue = new _decimal2.default(0);
          }
        },
        enumerable: true
      },
      _tickSize: { writable: true, enumerable: false },
      tickSize: {
        get: function get() {
          return _this._tickSize;
        },
        set: function set(newTickSize) {
          if (!newTickSize) {
            _this._tickSize = new _decimal2.default(0);
          } else {
            _this._tickSize = new _decimal2.default(newTickSize);
          }
        },
        enumerable: true
      },
      _contractSize: { writable: true, enumerable: false },
      contractSize: {
        get: function get() {
          return _this._contractSize;
        },
        set: function set(newContractSize) {
          if (!newContractSize) {
            _this._contractSize = new _decimal2.default(0);
          } else {
            _this._contractSize = new _decimal2.default(newContractSize);
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
    _this.settlementType = settlementType;
    _this.contractSize = contractSize;
    _this.pointValue = pointValue;
    _this.tickSize = tickSize;
    _this.quoteUnit = quoteUnit;
    _this.underlyingAssetId = underlyingAssetId;
    _this.expiryDate = expiryDate;
    return _this;
  }

  _createClass(Future, [{
    key: 'getTickValue',
    value: function getTickValue() {
      return this.tickSize.times(this.contractSize);
    }
  }]);

  return Future;
}(_listedDerivative2.default);

exports.default = Future;