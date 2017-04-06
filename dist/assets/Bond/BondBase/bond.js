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
   * @param {date} params.maturityDate - Date of Bond's maturity
   * @param {decimal} params.coupon - The Bond's coupon (represented as a fraction of 1 i.e. 0.05 = 5%)
   * @param {decimal} params.par - The Bond's par
   * @param {string} params.assetIssuerId - ID of the Bond Issuer
   * @param {string} params.assetStatus - Status of the Bond
   * @param {string} params.description - Description of the Bond
   * @param {string} params.countryId - ID of the Bond's origin country
   * @param {string} params.venueId - ID of the Bond's venue
   * @param {string} params.clientId - ID of the client
   * @param {date} params.issueDate - Date of Bond issue
   * @param {object} params.references - Object of references for the Bond
  */
  function BondBase(_ref) {
    var assetManagerId = _ref.assetManagerId,
        fungible = _ref.fungible,
        assetIssuerId = _ref.assetIssuerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Bond' : _ref$assetClass,
        _ref$assetType = _ref.assetType,
        assetType = _ref$assetType === undefined ? 'Bond' : _ref$assetType,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        maturityDate = _ref.maturityDate,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        clientId = _ref.clientId,
        issueDate = _ref.issueDate,
        coupon = _ref.coupon,
        par = _ref.par,
        _ref$references = _ref.references,
        references = _ref$references === undefined ? {} : _ref$references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, BondBase);

    var _this = _possibleConstructorReturn(this, (BondBase.__proto__ || Object.getPrototypeOf(BondBase)).call(this, {
      assetManagerId: assetManagerId,
      fungible: fungible,
      assetIssuerId: assetIssuerId,
      assetId: assetId,
      assetClass: assetClass,
      assetType: assetType,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      maturityDate: maturityDate,
      description: description,
      clientId: clientId,
      references: references,
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    Object.defineProperties(_this, {
      _cooupon: { writable: true, enumerable: false },
      coupon: {
        get: function get() {
          return this._coupon;
        },
        set: function set(newCoupon) {
          switch (newCoupon) {
            case 0:
              this._coupon = new _decimal2.default(0);
              break;
            case undefined:
              this._coupoon = undefined;
              break;
            default:
              this._coupon = new _decimal2.default(newCoupon);
          }
        }, enumerable: true
      },
      _par: { writable: true, enumerable: false },
      par: {
        get: function get() {
          return this._par;
        },
        set: function set(newPar) {
          switch (newPar) {
            case 0:
              this._par = new _decimal2.default(0);
              break;
            case undefined:
              this._par = undefined;
              break;
            default:
              this._par = new _decimal2.default(newPar);
          }
        }, enumerable: true
      },
      _defaulted: { writable: true, enumerable: false },
      defaulted: {
        get: function get() {
          return this._defaulted;
        },
        set: function set(newDefaulted) {
          switch (newDefaulted) {
            case false:
              this._defaulted = false;
              break;
            case undefined:
              this._defaulted = undefined;
              break;
            default:
              this._defaulted = newDefaulted;
          }
        }, enumerable: true
      }
    });
    _this.issueDate = issueDate;
    _this.coupon = coupon;
    _this.par = par;
    return _this;
  }

  // set coupon(newCoupon) {
  //   switch (newCoupon) {
  //     case 0:
  //       this._coupon = new Decimal(0)
  //       break
  //     case undefined:
  //       this._coupoon = undefined
  //       break
  //     default:
  //       this._coupon = new Decimal(newCoupon)
  //   }
  // }
  //
  // get coupon() {
  //   return this._coupon
  // }

  // set par(newPar) {
  //   switch (newPar) {
  //     case 0:
  //       this._par = new Decimal(0)
  //       break
  //     case undefined:
  //       this._par = undefined
  //       break
  //     default:
  //       this._par = new Decimal(newPar)
  //   }
  // }
  //
  // get par() {
  //   return this._par
  // }
  //
  // set defaulted(newDefaulted) {
  //   switch (newDefaulted) {
  //     case false:
  //       this._defaulted = false
  //       break
  //     case undefined:
  //       this._defaulted = undefined
  //       break
  //     default:
  //       this._defaulted = newDefaulted
  //   }
  // }
  //
  // get defaulted() {
  //   return this._defaulted
  // }


  // toJSON() {
  //   return Object.assign({}, {
  //     par: this.par,
  //     coupon: this.coupon,
  //     defaulted: this.defaulted
  //   }, this)
  // return {
  //   asset_manager_id: this.assetManagerId,
  //   fungible: this.fungible,
  //   asset_issuer_id: this.assetIssuerId,
  //   asset_id: this.assetId,
  //   asset_class: this.assetClass,
  //   asset_type: this.assetType,
  //   asset_status: this.assetStatus,
  //   country_id: this.countryId,
  //   venue_id: this.venueId,
  //   maturity_date: this.maturityDate,
  //   description: this.description,
  //   client_id: this.clientId,
  //   issue_date: this.issueDate,
  //   coupon: this.coupon,
  //   par: this.par,
  //   references: this.references,
  //   created_by: this.createdBy,
  //   updated_by: this.updatedBy,
  //   created_time: this.createdTime,
  //   updated_time: this.updatedTime,
  //   version: this.version
  // }
  // }

  return BondBase;
}(_asset2.default);

exports.default = BondBase;