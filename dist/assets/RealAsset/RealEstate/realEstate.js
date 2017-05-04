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
 * Class representing Real Estate
 * @memberof module:assets
 * @extends module:assets.RealAsset
 */
var RealEstate = function (_RealAsset) {
  _inherits(RealEstate, _RealAsset);

  /**
   * Construct a new Real Estate instance
   * @param {object} params - RealEstate creation options:
   * @param {number} params.assetManagerId - ID of Real Estate's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Real Estate __(required)__
   * @param {string} [params.assetClass=RealAsset] - Auto-set to `RealEstate` __(read-only)__
   * @param {boolean} [params.fungible=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Real Estate's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Real Estate
   * @param {string} [params.countryId] - ID of Real Estate's country
   * @param {string} [params.venueId] - ID of Real Estate's venue if applicable
   * @param {string} [params.currency] - Real Estate currency (e.g. USD, SGD)
   * @param {string} [params.description] - Description of the Real Estate
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Real Estate
   * @param {object} [params.links] - Object of array of Links attached to the Real Estate
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Real Estate. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Real Estate
   * @param {string} [params.updatedBy] - ID of the user that updated the Real Estate
   * @param {date} [params.createdTime] - Time that the Real Estate was created
   * @param {date} [params.updatedTime] - Time that the Real Estate was updated
   * @param {number} [params.version] - Version number
  */
  function RealEstate(_ref) {
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
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, RealEstate);

    return _possibleConstructorReturn(this, (RealEstate.__proto__ || Object.getPrototypeOf(RealEstate)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: 'RealEstate',
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

  return RealEstate;
}(_realAsset2.default);

exports.default = RealEstate;