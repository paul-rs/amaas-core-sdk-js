'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _derivative = require('../Derivative/derivative');

var _derivative2 = _interopRequireDefault(_derivative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a CFD
 * @memberof module:assets
 * @extends module:assets.Derivative
 */
var CFD = function (_Derivative) {
  _inherits(CFD, _Derivative);

  /**
   * Construct a new CFD instance
   * @param {object} params - CFD creation options:
   * @param {number} params.assetManagerId - ID of Asset's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} [params.assetClass=Derivative] - Auto-set to `Derivative` __(read-only)__
   * @param {boolean} [params.fungible=false] - Auto-set to `false` for Derivative and its subclasses __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the CFD issuer
   * @param {string} [params.assetStatus=Active] - Status of the CFD
   * @param {string} [params.countryId] - ID of CFD's country
   * @param {string} [params.venueId] - ID of CFD's venue
   * @param {string} [params.currency] - CFD currency (e.g. USD, SGD)
   * @param {string} [params.issueDate] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.maturityDate] - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the CFD
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the CFD
   * @param {object} [params.links] - Object of array of Links attached to the CFD
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the CFD. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the CFD
   * @param {string} [params.updatedBy] - ID of the user that updated the CFD
   * @param {date} [params.createdTime] - Time that the CFD was created
   * @param {date} [params.updatedTime] - Time that the CFD was updated
   * @param {number} [params.version] - Version number of the CFD
  */
  function CFD(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
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

    _classCallCheck(this, CFD);

    return _possibleConstructorReturn(this, (CFD.__proto__ || Object.getPrototypeOf(CFD)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: 'Derivative',
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

  return CFD;
}(_derivative2.default);

exports.default = CFD;