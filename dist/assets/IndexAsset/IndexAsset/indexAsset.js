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
 * Class representing an Index
 * @memberof module:assets
 * @extends module:assets.Asset
 */
var Index = function (_Asset) {
  _inherits(Index, _Asset);

  /**
   * Construct a new Index instance
   * @param {object} params - Index creation options:
   * @param {number} params.assetManagerId - ID of Index's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} [params.assetClass=Index] - Auto-set to `Index` __(read-only)__
   * @param {boolean} [params.fungible=true] - Auto-set to `true` for Index __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Index's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Index
   * @param {string} [params.countryId] - ID of Index's country
   * @param {string} [params.currency] - Index currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Index
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Index
   * @param {object} [params.links] - Object of array of Links attached to the Index
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Index. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Index
   * @param {string} [params.updatedBy] - ID of the user that updated the Index
   * @param {date} [params.createdTime] - Time that the Index was created
   * @param {date} [params.updatedTime] - Time that the Index was updated
   * @param {number} [params.version] - Version number
  */
  function Index(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        assetIssuerId = _ref.assetIssuerId,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        currency = _ref.currency,
        issueDate = _ref.issueDate,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        clientId = _ref.clientId,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: 'Index',
      fungible: true,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      currency: currency,
      issueDate: issueDate,
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
  }

  return Index;
}(_asset2.default);

exports.default = Index;