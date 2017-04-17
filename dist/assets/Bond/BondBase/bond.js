'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../../../core');

var _asset = require('../../Asset/asset.js');

var _asset2 = _interopRequireDefault(_asset);

var _decimal = require('decimal.js');

var _decimal2 = _interopRequireDefault(_decimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Base Bond
 * @extends Asset
 */
var BondBase = function (_Asset) {
  _inherits(BondBase, _Asset);

  /**
   * Construct new Base Bond class
   * @param {object} params - BondBase creation options
   * @param {string} params.assetManagerId - ID of Bond's Asset Manager
   * @param {string} params.assetId - ID of asset
   * @param {string} params.assetClass - Class of Asset. This should always be 'Bond'
   * @param {boolean} params.fungible - Whether this Bond is fungible
   * @param {string} params.assetIssuerId - ID of the Bond Issuer
   * @param {string} params.assetStatus - Status of the Bond
   * @param {string} params.countryId - ID of the Bond's origin country
   * @param {string} params.venueId - ID of the Bond's venue
   * @param {string} params.currency - Currency denomination of the Bond
   * @param {string} params.issueDate - The date that the Bond was issued
   * @param {string} params.maturityDate - Date of Bond's maturity
   * @param {string} params.description - Description of the Bond
   * @param {string} params.clientId - ID of the client
   * @param {decimal} params.coupon - The Bond's coupon (represented as a fraction of 1 i.e. 0.05 = 5%)
   * @param {decimal} params.par - The Bond's par
   * @param {???} payFrequency - ???
   * @param {object} params.comments - Object of comments for the Bond. { name: string: comment: Comment }
   * @param {object} params.links - Object of links for the Bond. { name: string: link: Link[] }
   * @param {object} params.references - Object of references for the Bond
  */
  function BondBase(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Bond' : _ref$assetClass,
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
        coupon = _ref.coupon,
        par = _ref.par,
        payFrequency = _ref.payFrequency,
        defaulted = _ref.defaulted,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, BondBase);

    var _this = _possibleConstructorReturn(this, (BondBase.__proto__ || Object.getPrototypeOf(BondBase)).call(this, {
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
      _coupon: { writable: true, enumerable: false },
      coupon: {
        get: function get() {
          return _this._coupon;
        },
        set: function set(newCoupon) {
          _this._coupon = newCoupon ? new _decimal2.default(newCoupon) : new _decimal2.default(0);
        }, enumerable: true
      },
      _par: { writable: true, enumerable: false },
      par: {
        get: function get() {
          return _this._par;
        },
        set: function set(newPar) {
          _this._par = newPar ? new _decimal2.default(newPar) : new _decimal2.default(0);
        }, enumerable: true
      }
    });
    _this.defaulted = defaulted === true ? true : false; // Default to false
    _this.coupon = coupon;
    _this.par = par;
    _this.payFrequency = payFrequency;
    return _this;
  }

  return BondBase;
}(_asset2.default);

exports.default = BondBase;