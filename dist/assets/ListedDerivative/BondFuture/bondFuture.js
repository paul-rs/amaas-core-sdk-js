'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decimal = require('decimal.js');

var _decimal2 = _interopRequireDefault(_decimal);

var _future = require('../Future/future');

var _future2 = _interopRequireDefault(_future);

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
   * @param {string} params.settlementType - Settlement Type (Physical, Cash)
   * @param {number} params.contractSize - Contract Size
   * @param {number} params.pointValue - ???
   * @param {number} params.tickSize -???
   * @param {number} params.quoteUnit - ???
   * @param {string} params.underlyingAssetId - ID of the underlying Asset
   * @param {string} params.expiryDate - Date of the contract's expiry (YYYY-MM-DD)
   * @param {string} params.cheapestToDeliverId - ???
   * @param {string} params.underlyingBondTenor - ???
   * @param {number} params.underlyingBondCoupon - Coupon of the underlying Bond
   * @param {object} params.comments - Object of Comments attached to the Asset
   * @param {object} params.links - Object of array of Links attached to the Asset
   * @param {object} params.references - Object of References associated with this Asset
   * @param {string} params.createdBy - ID of the user that created the Bond Future
   * @param {string} params.updatedBy - ID of the user that updated the Bond Future
   * @param {date} params.createdTime - Time that the Bond Future was created
   * @param {date} params.updatedTime - Time that the Bond Future was updated
   * @param {number} params.version - Version number of the Bond Future
  */
  function BondFuture(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'BondFuture' : _ref$assetClass,
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