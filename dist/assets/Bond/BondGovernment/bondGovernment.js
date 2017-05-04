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
 * Class representing a Government Bond
 * @memberof module:assets
 * @extends module:assets.BondBase
 */
var BondGovernment = function (_BondBase) {
  _inherits(BondGovernment, _BondBase);

  /**
   * Construct new Government Bond instance
   * @param {object} params - BondGovernment creation options:
   * @param {string} params.assetManagerId - ID of Bond's Asset Manager __(required)__
   * @param {string} params.assetId - ID of the Bond __(required)__
   * @param {string} [params.assetClass=Bond] - Auto-set to `Bond` __(read-only)__
   * @param {string} [params.assetType] - Type of the Asset. Auto-set based on the class or subclass constructor
   * @param {boolean} [params.fungible=true] - Auto-set `true` for Bonds __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Bond Issuer
   * @param {string} [params.assetStatus=Active] - Status of the Bond
   * @param {string} [params.countryId] - ID of the Bond's country
   * @param {string} [params.venueId] - ID of the Bond's venue
   * @param {string} [params.currency] - Bond currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Bond issue date (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Bond maturity date (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Bond
   * @param {string} [params.clientId] - ID of the associated client
   * @param {number} params.coupon - The Bond's coupon represented as a fraction of 1 i.e. 0.05 = 5%. Stored as a Decimal instance __(required)__
   * @param {number} params.par - The Bond's par value. Stored as a Decimal instance __(required)__
   * @param {string} params.payFrequency - Frequency of coupon payment __(required)__
   * @param {boolean} [params.defaulted=false] - Whether the issuer has defaulted
   * @param {object} [params.comments] - Object of Comments attached to the Bond
   * @param {object} [params.links] - Object of array of Links attached to the Bond
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References attached to the Bond. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Bond
   * @param {string} [params.updatedBy] - ID of the user that updated the Bond
   * @param {date} [params.createdTime] - Time that the Bond was created
   * @param {date} [params.updatedTime] - Time that the Bond was updated
   * @param {number} [params.version] - Version number of the Bond
  */
  function BondGovernment(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
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

    _classCallCheck(this, BondGovernment);

    return _possibleConstructorReturn(this, (BondGovernment.__proto__ || Object.getPrototypeOf(BondGovernment)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: 'Bond',
      fungible: true,
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

  return BondGovernment;
}(_bond2.default);

exports.default = BondGovernment;