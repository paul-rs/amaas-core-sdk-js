'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decimal = require('decimal.js');

var _decimal2 = _interopRequireDefault(_decimal);

var _futureOption = require('../FutureOption/futureOption');

var _futureOption2 = _interopRequireDefault(_futureOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Bond Future Option
 * @memberof module:assets
 * @extends module:assets.Future
 */
var BondFutureOption = function (_FutureOption) {
  _inherits(BondFutureOption, _FutureOption);

  /**
   * Construct a new Bond Future Option instance
   * @param {object} params - Bond Future Option creation options:
   * @param {number} params.assetManagerId - ID of Bond Future Option's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Bond Future Option __(required)__
   * @param {string} [params.assetClass=Future] - Auto-set to `Future` __(read-only)__
   * @param {string} [params.assetType] - Type of the Bond Future Option. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Bond Future Option's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Bond Future Option
   * @param {string} [params.countryId] - ID of Bond Future Option's country
   * @param {string} [params.venueId] - ID of Bond Future Option's venue if applicable
   * @param {string} [params.currency] - Bond Future Option currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.expiryDate=9999-12-31] - Date of the contract's expiry (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Bond Future Option
   * @param {string} [params.displayName] - Display name of the Bond Future Option
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} params.settlementType - Settlement Type __(required)__<br />
   * <li>Cash</li>
   * <li>Physical</li>
   * @param {number} params.contractSize - Contract Size __(required)__
   * @param {number} [params.pointValue] - Future point value. Stored as a Decimal instance
   * @param {number} params.tickSize - Future tick size. Stored as a Decimal instance __(required)__
   * @param {string} [params.quoteUnit] - Future quote unit
   * @param {string} params.underlyingAssetId - ID of the underlying Asset __(required)__
   * @param {string} params.optionType - Option type __(required)__<br />
   * Available options:
   * <li>Put</li>
   * <li>Call</li>
   * @param {string} params.optionStyle - Option style __(required)__<br />
   * Available options:
   * <li>American</li>
   * <li>Bermudan</li>
   * <li>European</li>
   * @param {number} params.strike - Strike price. Stored as a Decimal instance __(required)__
   * @param {object} [params.comments] - Object of Comments attached to the Bond Future Option
   * @param {object} [params.links] - Object of array of Links attached to the Bond Future Option
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Bond Future Option. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Bond Future Option
   * @param {string} [params.updatedBy] - ID of the user that updated the Bond Future Option
   * @param {date} [params.createdTime] - Time that the Bond Future Option was created
   * @param {date} [params.updatedTime] - Time that the Bond Future Option was updated
   * @param {number} [params.version] - Version number
  */
  function BondFutureOption(_ref) {
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
        displayName = _ref.displayName,
        clientId = _ref.clientId,
        settlementType = _ref.settlementType,
        contractSize = _ref.contractSize,
        pointValue = _ref.pointValue,
        tickSize = _ref.tickSize,
        quoteUnit = _ref.quoteUnit,
        underlyingAssetId = _ref.underlyingAssetId,
        expiryDate = _ref.expiryDate,
        optionType = _ref.optionType,
        optionStyle = _ref.optionStyle,
        strike = _ref.strike,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, BondFutureOption);

    return _possibleConstructorReturn(this, (BondFutureOption.__proto__ || Object.getPrototypeOf(BondFutureOption)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
      issueDate: issueDate,
      optionType: optionType,
      strike: strike,
      optionStyle: optionStyle,
      description: description,
      displayName: displayName,
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

  return BondFutureOption;
}(_futureOption2.default);

exports.default = BondFutureOption;