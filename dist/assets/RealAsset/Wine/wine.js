'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _realAsset = require('../RealAsset/realAsset');

var _realAsset2 = _interopRequireDefault(_realAsset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing Wine
 * @memberof module:assets
 * @extends module:assets.RealAsset
 */
var Wine = function (_RealAsset) {
  _inherits(Wine, _RealAsset);

  /**
   * Construct a new Wine instance
   * @param {object} params - Wine creation options:
   * @param {number} params.assetManagerId - ID of Wine's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Wine __(required)__
   * @param {string} [params.assetClass=RealAsset] - Auto-set to `RealAsset` __(read-only)__
   * @param {boolean} [params.fungible=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Wine's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Wine
   * @param {string} [params.countryId] - ID of Wine's country
   * @param {string} [params.venueId] - ID of Wine's venue if applicable
   * @param {string} [params.currency] - Wine currency (e.g. USD, SGD)
   * @param {string} [params.description] - Description of the Wine
   * @param {string} [params.clientId] - ID of the associated client
    * @param {string} [params.year] - Year of production
   * @param {string} [params.producer] - Name of the producer
   * @param {string} [params.region] - Region
   * @param {string} [params.appellation] - Appellation
   * @param {string} [params.classification] - Classification
   * @param {string} [params.color] - Color (e.g. red, white)
   * @param {string} [params.bottleSize] - Bottle size (e.g. Magnum)
   * @param {string} [params.bottleInCellar] - ???
   * @param {string} [params.bottleLocation] - Location of the bottle
   * @param {string} [params.storageCost] - Storage cost of the Wine
   * @param {string} [params.ratingType] - Rating Type
   * @param {string} [params.ratingValue] - Rating Value
   * @param {string} [params.packingType] - Packing Type
   * @param {string} [params.toDrinkStart] - Earliest date it is suitable to begin drinking (YYYY-MM-DD)
   * @param {string} [params.toDrinkEnd] - Latest date to drink (YYYY-MM-DD)
    * @param {object} [params.comments] - Object of Comments attached to the Wine
   * @param {object} [params.links] - Object of array of Links attached to the Wine
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Wine. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Wine
   * @param {string} [params.updatedBy] - ID of the user that updated the Wine
   * @param {date} [params.createdTime] - Time that the Wine created
   * @param {date} [params.updatedTime] - Time that the Wine was updated
   * @param {number} [params.version] - Version number
  */
  function Wine(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        assetIssuerId = _ref.assetIssuerId,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        currency = _ref.currency,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        clientId = _ref.clientId,
        year = _ref.year,
        producer = _ref.producer,
        region = _ref.region,
        appellation = _ref.appellation,
        classification = _ref.classification,
        color = _ref.color,
        bottleSize = _ref.bottleSize,
        bottleInCellar = _ref.bottleInCellar,
        bottleLocation = _ref.bottleLocation,
        storageCost = _ref.storageCost,
        ratingType = _ref.ratingType,
        ratingValue = _ref.ratingValue,
        packingType = _ref.packingType,
        toDrinkStart = _ref.toDrinkStart,
        toDrinkEnd = _ref.toDrinkEnd,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Wine);

    var _this = _possibleConstructorReturn(this, (Wine.__proto__ || Object.getPrototypeOf(Wine)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
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

    _this.year = year;
    _this.producer = producer;
    _this.region = region;
    _this.appellation = appellation;
    _this.classification = classification;
    _this.color = color;
    _this.bottleSize = bottleSize;
    _this.bottleInCellar = bottleInCellar;
    _this.bottleLocation = bottleLocation;
    _this.storageCost = storageCost;
    _this.ratingType = ratingType;
    _this.ratingValue = ratingValue;
    _this.packingType = packingType;
    _this.toDrinkStart = toDrinkStart;
    _this.toDrinkEnd = toDrinkEnd;
    return _this;
  }

  return Wine;
}(_realAsset2.default);

exports.default = Wine;