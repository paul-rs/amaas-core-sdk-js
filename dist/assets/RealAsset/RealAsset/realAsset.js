'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asset = require('../../Asset/asset');

var _asset2 = _interopRequireDefault(_asset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Real Asset
 * @memberof module:assets
 * @extends module:assets.Asset
 */
var RealAsset = function (_Asset) {
  _inherits(RealAsset, _Asset);

  /**
   * Construct a new Real Asset instance
   * @param {object} params - RealAsset creation options
   * @param {number} params.assetManagerId - ID of Asset's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} [params.assetClass=RealAsset] - Class of the Asset (a subclass of RealAsset may define its own assetClass)
   * @param {string} [params.assetType] - Type of the Asset. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Real Asset's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Real Asset
   * @param {string} [params.countryId] - ID of Real Asset's country
   * @param {string} [params.venueId] - ID of Real Asset's venue if applicable
   * @param {string} [params.currency] - Real Asset currency (e.g. USD, SGD)
   * @param {string} [params.description] - Description of the Real Asset
   * @param {string} [params.displayName] - Display name of the Asset
   * @param {boolean} [params.rollPrice=true] - Whether to roll the price for the Asset
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Real Asset
   * @param {object} [params.links] - Object of array of Links attached to the Real Asset
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Real Asset. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Real Asset
   * @param {string} [params.updatedBy] - ID of the user that updated the Real Asset
   * @param {date} [params.createdTime] - Time that the Real Asset was created
   * @param {date} [params.updatedTime] - Time that the Real Asset was updated
   * @param {number} [params.version] - Version number
  */
  function RealAsset(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'RealAsset' : _ref$assetClass,
        assetIssuerId = _ref.assetIssuerId,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        currency = _ref.currency,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        displayName = _ref.displayName,
        rollPrice = _ref.rollPrice,
        clientId = _ref.clientId,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, RealAsset);

    return _possibleConstructorReturn(this, (RealAsset.__proto__ || Object.getPrototypeOf(RealAsset)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: assetClass,
      fungible: false,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
      description: description,
      displayName: displayName,
      rollPrice: rollPrice,
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
  }

  return RealAsset;
}(_asset2.default);

exports.default = RealAsset;