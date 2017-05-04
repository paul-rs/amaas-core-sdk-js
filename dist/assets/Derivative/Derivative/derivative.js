'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decimal = require('decimal.js');

var _decimal2 = _interopRequireDefault(_decimal);

var _asset = require('../../Asset/asset.js');

var _asset2 = _interopRequireDefault(_asset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an Derivative
 * @memberof module:assets
 * @extends module:assets.Asset
 */
var Derivative = function (_Asset) {
  _inherits(Derivative, _Asset);

  /**
   * Construct a new Derivative instance
   * @param {object} params - Derivative creation options:
   * @param {integer} params.assetManagerId - ID of Derivative's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Derivative __(required)__
   * @param {string} [params.assetClass=Derivative] - Class of the Derivative (a subclass of Derivative may define its own assetClass)
   * @param {boolean} [params.fungible=false] - Auto-set to `false` for Derivative __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Derivative's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Derivative
   * @param {string} [params.countryId] - ID of Derivative's country
   * @param {string} [params.venueId] - ID of Derivative's venue if applicable
   * @param {string} params.currency - Derivative currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Derivative
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Derivative
   * @param {object} [params.links] - Object of array of Links attached to the Derivative
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Derivative. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Derivative
   * @param {string} [params.updatedBy] - ID of the user that updated the Derivative
   * @param {date} [params.createdTime] - Time that the Derivative was created
   * @param {date} [params.updatedTime] - Time that the Derivative was updated
   * @param {number} [params.version] - Version number of the Derivative
  */
  function Derivative(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Derivative' : _ref$assetClass,
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

    _classCallCheck(this, Derivative);

    return _possibleConstructorReturn(this, (Derivative.__proto__ || Object.getPrototypeOf(Derivative)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: assetClass,
      fungible: false,
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

  return Derivative;
}(_asset2.default);

exports.default = Derivative;