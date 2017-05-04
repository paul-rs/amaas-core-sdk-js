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
 * Class representing an Equity
 * @memberof module:assets
 * @extends module:assets.Asset
 */
var Equity = function (_Asset) {
  _inherits(Equity, _Asset);

  /**
   * Construct a new Equity instance
   * @param {object} params - Equity creation options:
   * @param {number} params.assetManagerId - ID of Equity's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Equity __(required)__
   * @param {string} [params.assetClass=Equity] - Class of the Equity (a subclass of Equity may define its own assetClass)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` for Equity __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Equity's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Equity
   * @param {string} [params.countryId] - ID of Equity's country
   * @param {string} [params.venueId] - ID of Equity's venue if applicable
   * @param {string} [params.currency] - Equity currency (e.g. USD, SGD)
   * @param {string} [params.issueDate] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Equity
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} [params.shareClass=Common] - Share Class
   * @param {object} [params.comments] - Object of Comments attached to the Equity
   * @param {object} [params.links] - Object of array of Links attached to the Equity
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Equity. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Equity
   * @param {string} [params.updatedBy] - ID of the user that updated the Equity
   * @param {date} [params.createdTime] - Time that the Equity was created
   * @param {date} [params.updatedTime] - Time that the Equity was updated
   * @param {number} [params.version] - Version number of the Equity
  */
  function Equity(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Equity' : _ref$assetClass,
        fungible = _ref.fungible,
        assetIssuerId = _ref.assetIssuerId,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        currency = _ref.currency,
        issueDate = _ref.issueDate,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        clientId = _ref.clientId,
        _ref$shareClass = _ref.shareClass,
        shareClass = _ref$shareClass === undefined ? 'Common' : _ref$shareClass,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Equity);

    var _this = _possibleConstructorReturn(this, (Equity.__proto__ || Object.getPrototypeOf(Equity)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: assetClass,
      fungible: true,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
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

    _this.shareClass = shareClass;
    return _this;
  }

  return Equity;
}(_asset2.default);

exports.default = Equity;