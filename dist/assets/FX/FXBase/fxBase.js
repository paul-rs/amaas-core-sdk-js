'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _asset = require('../../Asset/asset.js');

var _asset2 = _interopRequireDefault(_asset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing FX (this should never be instantiated directly, use the appropriate subclass instead).
 * Note that creating and editing FXBase subclasses and other public subclasses is a restricted action.
 * @memberof module:assets
 * @extends module:assets.Asset
 */
var ForeignExchangeBase = function (_Asset) {
  _inherits(ForeignExchangeBase, _Asset);

  /**
   * Construct a new ForeignExchangeBase instance
   * @param {object} params - ForeignExchangeBase creation options:
   * @param {number} [params.assetManagerId=0] - Auto-set to `0`. All FX classes and subclasses are treated as public Assets
   * @param {number} params.assetId - ID of the ForeignExchangeBase __(required)__
   * @param {string} [params.assetClass=ForeignExchange] - Auto-set to `ForeignExchange` __(read-only)__
   * @param {string} [params.assetType] - Type of the ForeignExchangeBase. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` for ForeignExchangeBase __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the ForeignExchangeBase's issuer
   * @param {string} [params.assetStatus=Active] - Status of the ForeignExchangeBase
   * @param {string} [params.description] - Description of the ForeignExchangeBase
   * @param {string} [params.displayName] - Display name of the ForeignExchangeBase
   * @param {boolean} [params.rollPrice=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the ForeignExchangeBase
   * @param {object} [params.links] - Object of array of Links attached to the ForeignExchangeBase
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the ForeignExchangeBase. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the ForeignExchangeBase
   * @param {string} [params.updatedBy] - ID of the user that updated the ForeignExchangeBase
   * @param {date} [params.createdTime] - Time that the ForeignExchangeBase was created
   * @param {date} [params.updatedTime] - Time that the ForeignExchangeBase was updated
   * @param {number} params.version - Version number
  */
  function ForeignExchangeBase(_ref) {
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

    _classCallCheck(this, ForeignExchangeBase);

    return _possibleConstructorReturn(this, (ForeignExchangeBase.__proto__ || Object.getPrototypeOf(ForeignExchangeBase)).call(this, {
      assetManagerId: 0,
      assetId: assetId,
      assetClass: 'ForeignExchange',
      fungible: true,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      description: description,
      displayName: displayName,
      rollPrice: false,
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

  _createClass(ForeignExchangeBase, [{
    key: 'getBaseCurrency',
    value: function getBaseCurrency() {
      return this.assetId.slice(0, 3);
    }
  }, {
    key: 'getCounterCurrency',
    value: function getCounterCurrency() {
      return this.assetId.slice(3, 6);
    }
  }]);

  return ForeignExchangeBase;
}(_asset2.default);

exports.default = ForeignExchangeBase;