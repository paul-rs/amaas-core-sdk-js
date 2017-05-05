'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fxBase = require('../FXBase/fxBase.js');

var _fxBase2 = _interopRequireDefault(_fxBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing FX
 * @memberof module:assets
 * @extends module:assets.ForeignExchangeBase
 */
var ForeignExchange = function (_ForeignExchangeBase) {
  _inherits(ForeignExchange, _ForeignExchangeBase);

  /**
   * Construct a new Foreign Exchange instance
   * @param {object} params - ForeignExchange creation options:
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} params.assetClass - Auto-set to `ForeignExchange` __(read-only)__
   * @param {string} [params.assetType] - Type of the ForeignExchange. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Foreign Exchange's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Foreign Exchange
   * @param {string} [params.description] - Description of the Foreign Exchange
   * @param {string} [params.displayName] - Display name of the ForeignExchange
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Foreign Exchange
   * @param {object} [params.links] - Object of array of Links attached to the Foreign Exchange
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Foreign Exchange. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Foreign Exchange
   * @param {string} [params.updatedBy] - ID of the user that updated the Foreign Exchange
   * @param {date} [params.createdTime] - Time that the Foreign Exchange was created
   * @param {date} [params.updatedTime] - Time that the Foreign Exchange was updated
   * @param {number} [params.version] - Version number
  */
  function ForeignExchange(_ref) {
    var assetId = _ref.assetId,
        assetIssuerId = _ref.assetIssuerId,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
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

    _classCallCheck(this, ForeignExchange);

    return _possibleConstructorReturn(this, (ForeignExchange.__proto__ || Object.getPrototypeOf(ForeignExchange)).call(this, {
      assetId: assetId,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
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

  return ForeignExchange;
}(_fxBase2.default);

exports.default = ForeignExchange;