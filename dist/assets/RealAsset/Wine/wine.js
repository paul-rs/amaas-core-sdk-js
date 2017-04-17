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

var Wine = function (_RealAsset) {
  _inherits(Wine, _RealAsset);

  function Wine(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Wine' : _ref$assetClass,
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

    // TODO: Write the getter and setters once decided how the dates will be represented
    var _this = _possibleConstructorReturn(this, (Wine.__proto__ || Object.getPrototypeOf(Wine)).call(this, {
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