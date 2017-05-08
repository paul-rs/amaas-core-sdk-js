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
 * Class representing a Mortgage Bond
 * @memberof module:assets
 * @extends module:assets.BondBase
 */
var BondMortgage = function (_BondBase) {
  _inherits(BondMortgage, _BondBase);

  /**
   * Construct new Mortgage Bond instance
   * @param {object} params - BondMortgage creation options:
   * @param {string} params.assetManagerId - ID of Bond's Asset Manager __(required)__
   * @param {string} params.assetId - ID of the Bond __(required)__
   * @param {string} [params.assetClass=Bond] - Auto-set to `Bond` __(read-only)__
   * @param {string} [params.assetType] - Type of the Bond. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set `true` for Bonds __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Bond Issuer
   * @param {string} [params.assetStatus=Active] - Status of the Bond
   * @param {string} [params.countryId] - ID of the Bond's country
   * @param {string} [params.venueId] - ID of the Bond's venue
   * @param {string} [params.currency] - Bond Currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Bond issue date (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Bond maturity date (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Bond
   * @param {string} [params.displayName] - Display name of the Bond
   * @param {boolean} [params.rollPrice=true] - Whether to roll the price for the Bond
   * @param {string} [params.clientId] - ID of the associated client
   * @param {number} params.coupon - The Bond's coupon represented as a fraction of 1 i.e. 0.05 = 5%. Stored as a Decimal instance __(required)__
   * @param {number} params.par - The Bond's par value. Stored as a Decimal instance __(required)__
   * @param {string} params.payFrequency - Frequency of the coupon payment __(required)__
   * @param {boolean} [params.defaulted=false] - Whether the issuer has defaulted
   * @param {object} [params.comments] - Object of Comments attached to the Bond
   * @param {object} [params.links] - Object of array of Links attached to the Bond
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References attached to the Bond
   * @param {string} [params.createdBy] - ID of the user that created the Bond
   * @param {string} [params.updatedBy] - ID of the user that updated the Bond
   * @param {date} [params.createdTime] - Time that the Bond was created
   * @param {date} [params.updatedTime] - Time that the Bond was updated
   * @param {number} [params.version] - Version number of the Bond
  */
  function BondMortgage(_ref) {
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
        displayName = _ref.displayName,
        rollPrice = _ref.rollPrice,
        clientId = _ref.clientId,
        coupon = _ref.coupon,
        par = _ref.par,
        payFrequency = _ref.payFrequency,
        _ref$defaulted = _ref.defaulted,
        defaulted = _ref$defaulted === undefined ? false : _ref$defaulted,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, BondMortgage);

    return _possibleConstructorReturn(this, (BondMortgage.__proto__ || Object.getPrototypeOf(BondMortgage)).call(this, {
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
      displayName: displayName,
      rollPrice: rollPrice,
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

  return BondMortgage;
}(_bond2.default);

exports.default = BondMortgage;