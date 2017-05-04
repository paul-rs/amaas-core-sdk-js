'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _future = require('../Future/future');

var _future2 = _interopRequireDefault(_future);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an Index Future
 * @memberof module:assets
 * @extends module:assets.Future
 */
var IndexFuture = function (_Future) {
  _inherits(IndexFuture, _Future);

  /**
   * Construct a new Index Future instance
   * @param {object} params - IndexFuture creation options:
   * @param {number} params.assetManagerId - ID of Index Future's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Index Future __(required)__
   * @param {string} [params.assetClass=Future] - Auto-set to `Future` __(read-only)__
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Index Future's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Index Future
   * @param {string} [params.countryId] - ID of Index Future's country
   * @param {string} [params.venueId] - ID of Index Future's venue if applicable
   * @param {string} [params.currency] - Index Future currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.expiryDate=9999-12-31] - Date of the contract's expiry (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Index Future
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} params.settlementType - Settlement Type __(required)__<br />
   * Available options:
   * <li>Cash</li>
   * <li>Physical</li>
   * @param {number} params.contractSize - Contract Size __(required)__
   * @param {number} [params.pointValue] - Future point value. Stored as a Decimal instance
   * @param {number} params.tickSize - Future tick size. Stored as a Decimal instance __(required)__
   * @param {string} [params.quoteUnit] - Future quote unit
   * @param {string} params.underlyingAssetId - ID of the underlying Asset __(required)__
   * @param {object} [params.comments] - Object of Comments attached to the Index Future
   * @param {object} [params.links] - Object of array of Links attached to the Index Future
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Index Future. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Index Future
   * @param {string} [params.updatedBy] - ID of the user that updated the Index Future
   * @param {date} [params.createdTime] - Time that the Index Future was created
   * @param {date} [params.updatedTime] - Time that the Index Future was updated
   * @param {number} [params.version] - Version number
  */
  function IndexFuture(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
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
        settlementType = _ref.settlementType,
        contractSize = _ref.contractSize,
        pointValue = _ref.pointValue,
        tickSize = _ref.tickSize,
        quoteUnit = _ref.quoteUnit,
        underlyingAssetId = _ref.underlyingAssetId,
        expiryDate = _ref.expiryDate,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, IndexFuture);

    return _possibleConstructorReturn(this, (IndexFuture.__proto__ || Object.getPrototypeOf(IndexFuture)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
      issueDate: issueDate,
      description: description,
      clientId: clientId,
      settlementType: settlementType,
      contractSize: contractSize,
      pointValue: pointValue,
      tickSize: tickSize,
      quoteUnit: quoteUnit,
      underlyingAssetId: underlyingAssetId,
      expiryDate: expiryDate,
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

  return IndexFuture;
}(_future2.default);

exports.default = IndexFuture;