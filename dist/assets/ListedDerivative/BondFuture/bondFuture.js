'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decimal = require('decimal.js');

var _decimal2 = _interopRequireDefault(_decimal);

var _future = require('../Future/future');

var _future2 = _interopRequireDefault(_future);

var _enums = require('../../enums');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Bond Future
 * @memberof module:assets
 * @extends module:assets.Future
 */
var BondFuture = function (_Future) {
  _inherits(BondFuture, _Future);

  /**
   * Construct a new Bond Future instance
   * @param {object} params - Bond Future creation options:
   * @param {number} params.assetManagerId - ID of Bond Future's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Bond Future __(required)__
   * @param {string} [params.assetClass=Future] - Auto-set to `Future` __(read-only)__
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Bond Future's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Bond Future
   * @param {string} [params.countryId] - ID of Bond Future's country
   * @param {string} [params.venueId] - ID of Bond Future's venue if applicable
   * @param {string} [params.currency] - Bond Future currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.expiryDate=9999-12-31] - Date of the contract's expiry (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Bond Future
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} params.settlementType - Settlement Type __(required)__<br />
   * Available options:
   * <li>Cash</li>
   * <li>Physical</li>
   * @param {number} params.contractSize - Contract Size __(required)__
   * @param {number} [params.pointValue] - Future point value. Stored as a Decimal instance
   * @param {number} params.tickSize Future tick size. Stored as a Decimal instance __(required)__
   * @param {string} [params.quoteUnit] - Future quote unit
   * @param {string} params.underlyingAssetId - ID of the underlying Asset __(required)__
   * @param {string} [params.cheapestToDeliverId] - The cheapest Bond which can be delivered to the terms of the Future
   * @param {string} [params.underlyingBondTenor] - Tenor of the underlying Bond<br />
   * Available options:
   * <li>1M</li>
   * <li>3M</li>
   * <li>6M</li>
   * <li>9M</li>
   * <li>1Y</li>
   * <li>2Y</li>
   * <li>5Y</li>
   * <li>10Y</li>
   * <li>15Y</li>
   * <li>20Y</li>
   * <li>30Y</li>
   * <li>40Y</li>
   * <li>50Y</li>
   * @param {number} [params.underlyingBondCoupon] - Coupon of the underlying Bond
   * @param {object} [params.comments] - Object of Comments attached to the Bond Future
   * @param {object} [params.links] - Object of array of Links attached to the Bond Future
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Bond Future. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Bond Future
   * @param {string} [params.updatedBy] - ID of the user that updated the Bond Future
   * @param {date} [params.createdTime] - Time that the Bond Future was created
   * @param {date} [params.updatedTime] - Time that the Bond Future was updated
   * @param {number} [params.version] - Version number of the Bond Future
  */
  function BondFuture(_ref) {
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
        cheapestToDeliverId = _ref.cheapestToDeliverId,
        underlyingBondTenor = _ref.underlyingBondTenor,
        underlyingBondCoupon = _ref.underlyingBondCoupon,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, BondFuture);

    var _this = _possibleConstructorReturn(this, (BondFuture.__proto__ || Object.getPrototypeOf(BondFuture)).call(this, {
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
      _underlyingBondCoupon: { writable: true, enumerable: false },
      underlyingBondCoupon: {
        get: function get() {
          return _this._underlyingBondCoupon;
        },
        set: function set(newCoupon) {
          if (!newCoupon) {
            _this._underlyingBondCoupon = new _decimal2.default(0);
          } else {
            _this._underlyingBondCoupon = new _decimal2.default(newCoupon);
          }
        },
        enumerable: true
      },
      _underlyingBondTenor: { writable: true, enumerable: false },
      underlyingBondTenor: {
        get: function get() {
          return _this._underlyingBondTenor;
        },
        set: function set(newUBT) {
          if (newUBT) {
            if (_enums.TENORS.indexOf(newUBT) === -1) {
              throw new Error('Invalid tenor: ' + newUBT);
            }
            _this._underlyingBondTenor = newUBT;
          }
        },
        enumerable: true
      }
    });
    _this.cheapestToDeliverId = cheapestToDeliverId;
    _this.underlyingBondTenor = underlyingBondTenor;
    _this.underlyingBondCoupon = underlyingBondCoupon;
    return _this;
  }

  _createClass(BondFuture, [{
    key: 'getUnderlyingAssetId',
    value: function getUnderlyingAssetId() {
      return this.cheapestToDeliverId;
    }
  }]);

  return BondFuture;
}(_future2.default);

exports.default = BondFuture;