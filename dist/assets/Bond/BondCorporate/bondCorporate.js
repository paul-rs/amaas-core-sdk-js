'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bond = require('../BondBase/bond.js');

var _bond2 = _interopRequireDefault(_bond);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Corporate Bond
 * @memberof module:Assets.Class
 * @extends module:Assets.Class.BondBase
 */
var BondCorporate = function (_BondBase) {
  _inherits(BondCorporate, _BondBase);

  /**
   * Construct new Corporate Bond instance
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
   * @param {string} params.payFrequency - ???
   * @param {boolean} params.defaulted - Whether the issuer has defaulted
   * @param {object} params.comments - Object of comments for the Bond. { name: string: comment: Comment }
   * @param {object} params.links - Object of links for the Bond. { name: string: link: Link[] }
   * @param {object} params.references - Object of references for the Bond
   * @param {string} params.createdBy - ID of the user that created the Bond
   * @param {string} params.updatedBy - ID of the user that updated the Bond
   * @param {date} params.createdTime - Time that the Bond was created
   * @param {date} params.updatedTime - Time that the Bond was updated
   * @param {number} params.version - Version number of the Bond
  */
  function BondCorporate(_ref) {
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

    _classCallCheck(this, BondCorporate);

    return _possibleConstructorReturn(this, (BondCorporate.__proto__ || Object.getPrototypeOf(BondCorporate)).call(this, {
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
      coupon: coupon,
      par: par,
      payFrequency: payFrequency,
      defaulted: defaulted,
      comments: comments,
      links: links,
      references: references,
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));
  }

  return BondCorporate;
}(_bond2.default);

exports.default = BondCorporate;