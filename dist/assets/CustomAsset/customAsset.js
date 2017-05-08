'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asset = require('../Asset/asset');

var _asset2 = _interopRequireDefault(_asset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an Custom Asset
 * @memberof module:assets
 * @extends module:assets.Asset
 */
var CustomAsset = function (_Asset) {
  _inherits(CustomAsset, _Asset);

  /**
   * Construct a new Custom Asset instance
   * @param {object} params - CustomAsset creation options:
   * @param {integer} params.assetManagerId - ID of Asset's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} [params.assetClass=Asset] - Auto-set to `Asset` __(read-only)__
   * @param {string} [params.assetType] - Type of the Asset. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} params.fungible - Whether this Asset is fungible __(required)__
   * @param {string} [params.assetIssuerId] - ID of the Asset issuer
   * @param {string} [params.assetStatus=Active] - Status of the Asset
   * @param {string} [params.countryId] - ID of Asset's country
   * @param {string} [params.venueId] - ID of Asset's venue if applicable
   * @param {string} [params.currency] - Asset currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Asset
   * @param {string} [params.displayName] - Display name of the Asset
   * @param {boolean} [params.rollPrice] - Whether to roll the price for the Asset
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Asset
   * @param {object} [params.links] - Object of array of Links attached to the Asset
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated
   * @param {object} [params.clientAdditional] - Object of custom properties for creating a Custom Asset (e.g. { size: 'Large', Flavour: 'Lime' })
   * @param {string} [params.createdBy] - ID of the user that created the Asset
   * @param {string} [params.updatedBy] - ID of the user that updated the Asset
   * @param {date} [params.createdTime] - Time that the Asset was created
   * @param {date} [params.updatedTime] - Time that the Asset was updated
   * @param {number} [params.version] - Version number
  */
  function CustomAsset(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Asset' : _ref$assetClass,
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
        version = _ref.version,
        clientAdditional = _objectWithoutProperties(_ref, ['assetManagerId', 'assetId', 'assetClass', 'fungible', 'assetIssuerId', 'assetStatus', 'countryId', 'venueId', 'currency', 'issueDate', 'maturityDate', 'description', 'displayName', 'rollPrice', 'clientId', 'comments', 'links', 'references', 'createdBy', 'updatedBy', 'createdTime', 'updatedTime', 'version']);

    _classCallCheck(this, CustomAsset);

    var _this = _possibleConstructorReturn(this, (CustomAsset.__proto__ || Object.getPrototypeOf(CustomAsset)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: 'Asset',
      fungible: fungible,
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
      clientAdditional: clientAdditional,
      comments: comments,
      links: links,
      references: references,
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    Object.assign(_this, clientAdditional);
    return _this;
  }

  return CustomAsset;
}(_asset2.default);

exports.default = CustomAsset;