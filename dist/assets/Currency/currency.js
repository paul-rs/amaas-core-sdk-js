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
 * @memberof module:assets
 * @extends module:assets.Asset
 */
var Currency = function (_Asset) {
  _inherits(Currency, _Asset);

  /**
   * Construct a new Currency instance
   * @param {object} params - Currency creation options:
   * @param {number} params.assetManagerId - ID of Currency's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Currency __(required)__
   * @param {string} [params.assetClass=Currency] - Auto-set to `Currency` __(read-only)__
   * @param {string} [params.assetType] - Type of the Currency. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` for Currency
   * @param {string} [params.assetIssuerId] - ID of the Currency issuer
   * @param {string} [params.assetStatus=Active] - Status of the Currency
   * @param {string} [params.countryId] - ID of Currency's country
   * @param {string} [params.venueId] - ID of Currency's venue if applicable
   * @param {string} [params.currency] - Auto-set to 'assetId' __(read-only)__
   * @param {string} [params.description] - Description of the Currency
   * @param {string} [params.displayName] - Display name of the Currency
   * @param {string} [params.clientId] - ID of associated client
   * @param {boolean} [params.deliverable=true] - Whether the Currency is deliverable
   * @param {number} [params.minorUnitPlaces] - Decimal precision of Currency (e.g. 4 for JPY, 2 for USD)
   * @param {object} [params.comments] - Object of Comments attached to the Currency
   * @param {object} [params.links] - Object of array of Links attached to the Currency
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References attached to the Currency. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Asset
   * @param {string} [params.updatedBy] - ID of the user that updated the Asset
   * @param {date} [params.createdTime] - Time that the Asset was created
   * @param {date} [params.updatedTime] - Time that the Asset was updated
   * @param {number} [params.version] - Version number of the Asset
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
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        displayName = _ref.displayName,
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
      assetClass: 'Currency',
      fungible: true,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: assetId,
      description: description,
      displayName: displayName,
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