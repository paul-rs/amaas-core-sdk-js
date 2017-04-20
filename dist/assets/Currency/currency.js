'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asset = require('../Asset/asset.js');

var _asset2 = _interopRequireDefault(_asset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an Currency
 * @memberof module:Assets.class
 * @extends module:Assets.class.Asset
 */
var Currency = function (_Asset) {
  _inherits(Currency, _Asset);

  /**
   * Construct a new Currency instance
   * @param {object} params - Currency creation options
   * @param {integer} params.assetManagerId - ID of Currency's Asset Manager (required)
   * @param {integer} params.assetId - ID of the Currency (required)
   * @param {string} params.assetClass - Class of the Currency
   * @param {bool} params.fungible - Whether this Currency is fungible (required)
   * @param {string} params.assetIssuerId - ID of the Currency's issuer
   * @param {string} params.assetStatus - Status of the Currency (e.g. 'Active')
   * @param {string} params.countryId - ID of Currency's country
   * @param {string} params.venueId - ID of Currency's venue if applicable
   * @param {string} params.currency - Currency currency (e.g. USD, SGD)
   * @param {string} params.issueDate - Issue date if applicable (YYYY-MM-DD)
   * @param {string} params.maturityDate - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} params.description - Description of the Currency
   * @param {string} params.clientId - ID of the client to which the Currency belongs
   * @param {boolean} params.deliverable - Whether the Currency is deliverable
   * @param {number} params.minorUnitPlaces - Decimal precision of Currency (e.g. 4 for JPY, 2 for USD)
   * @param {object} params.comments - Object of Comments attached to the Currency
   * @param {object} params.links - Object of array of Links attached to the Currency
   * @param {object} params.references - Object of References associated with this Currency
   * @param {string} params.createdBy - ID of the user that created the Asset
   * @param {string} params.updatedBy - ID of the user that updated the Asset
   * @param {date} params.createdTime - Time that the Asset was created
   * @param {date} params.updatedTime - Time that the Asset was updated
   * @param {number} params.version - Version number of the Asset
  */
  function Currency(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Currency' : _ref$assetClass,
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
        deliverable = _ref.deliverable,
        minorUnitPlaces = _ref.minorUnitPlaces,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Currency);

    var _this = _possibleConstructorReturn(this, (Currency.__proto__ || Object.getPrototypeOf(Currency)).call(this, {
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

    _this.deliverable = deliverable === false ? false : true; // Default to true
    _this.minorUnitPlaces = minorUnitPlaces;
    return _this;
  }

  return Currency;
}(_asset2.default);

exports.default = Currency;