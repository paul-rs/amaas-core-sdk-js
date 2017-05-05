'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listedDerivative = require('../ListedDerivative/listedDerivative');

var _listedDerivative2 = _interopRequireDefault(_listedDerivative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Listed CFD
 * @memberof module:assets
 * @extends module:assets.ListedDerivative
 */
var ListedContractForDifference = function (_ListedDerivative) {
  _inherits(ListedContractForDifference, _ListedDerivative);

  /**
   * Construct a new Listed CFD instance
   * @param {object} params - ListedContractForDifference creation options:
   * @param {number} params.assetManagerId - ID of Listed CFD's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Listed CFD __(required)__
   * @param {string} [params.assetClass=ListedDerivative] - Auto-set to `ListedDerivative` __(read-only)__
   * @param {string} [params.assetType] - Type of the Listed CFD. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Listed CFD's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Listed CFD
   * @param {string} [params.countryId] - ID of Listed CFD's country
   * @param {string} [params.venueId] - ID of Listed CFD's venue if applicable
   * @param {string} [params.currency] - Listed CFD currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Listed CFD
   * @param {string} [params.displayName] - Display name of the Listed CFD
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Listed CFD
   * @param {object} [params.links] - Object of array of Links attached to the Listed CFD
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Listed CFD. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Listed CFD
   * @param {string} [params.updatedBy] - ID of the user that updated the Listed CFD
   * @param {date} [params.createdTime] - Time that the Listed CFD was created
   * @param {date} [params.updatedTime] - Time that the Listed CFD was updated
   * @param {number} [params.version] - Version number
  */
  function ListedContractForDifference(_ref) {
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
        displayName = _ref.displayName,
        clientId = _ref.clientId,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, ListedContractForDifference);

    return _possibleConstructorReturn(this, (ListedContractForDifference.__proto__ || Object.getPrototypeOf(ListedContractForDifference)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
      issueDate: issueDate,
      maturityDate: maturityDate,
      description: description,
      displayName: displayName,
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

  return ListedContractForDifference;
}(_listedDerivative2.default);

exports.default = ListedContractForDifference;