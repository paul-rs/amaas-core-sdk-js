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
 * Class representing a Sukuk
 * @memberof module:assets
 * @extends module:assets.Asset
 */
var Sukuk = function (_Asset) {
  _inherits(Sukuk, _Asset);

  /**
   * Construct a new Sukuk instance
   * @param {object} params - Sukuk creation options:
   * @param {number} params.assetManagerId - ID of Sukuk's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Sukuk __(required)__
   * @param {string} [params.assetClass=Sukuk] - Class of the Sukuk (a subclass of Sukuk may define its own assetClass)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Sukuk's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Sukuk
   * @param {string} [params.countryId] - ID of Sukuk's country
   * @param {string} [params.venueId] - ID of Sukuk's venue if applicable
   * @param {string} [params.currency] - Sukuk currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Sukuk
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Sukuk
   * @param {object} [params.links] - Object of array of Links attached to the Sukuk
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Sukuk. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Sukuk
   * @param {string} [params.updatedBy] - ID of the user that updated the Sukuk
   * @param {date} [params.createdTime] - Time that the Sukuk was created
   * @param {date} [params.updatedTime] - Time that the Sukuk was updated
   * @param {number} [params.version] - Version number
  */
  function Sukuk(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Sukuk' : _ref$assetClass,
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
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Sukuk);

    return _possibleConstructorReturn(this, (Sukuk.__proto__ || Object.getPrototypeOf(Sukuk)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: assetClass,
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
  }

  return Sukuk;
}(_asset2.default);

exports.default = Sukuk;