'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _company = require('../Company/company');

var _company2 = _interopRequireDefault(_company);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an Asset Manager
 * @memberof module:parties
 * @extends module:parties.Company
 */
var AssetManager = function (_Company) {
  _inherits(AssetManager, _Company);

  /**
   * Construct a new Asset Manager instance
   * @param {object} params - Asset Manager creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Asset Manager
   * @param {string} params.partyId - Party ID of the Asset Manager
   * @param {string} params.partyStatus=Active - Status of the Asset Manager (e.g. 'Active')
   * @param {string} params.baseCurrency - Base Currency of the Asset Manager (e.g. SGD, USD)
   * @param {string} params.description - Description of the Asset Manager
   * @param {object} params.addresses - Object of Addresses associated with this Asset Manager
   * @param {object} params.emails - Object of Emails associated with this Asset Manager
   * @param {object} params.references - Object of References associated with this Asset Manager
   * @param {object} params.comments - Object of Comments associated with the Asset Manager
   * @param {object} params.links - Object of Links associated with the Asset Manager
   * @param {string} params.createdBy - ID of the user that created the Asset Manager
   * @param {string} params.updatedBy - ID of the user that updated the Asset Manager
   * @param {date} params.createdTime - Time that the Asset Manager was created
   * @param {date} params.updatedTime - Time that the Asset Manager was updated
   * @param {number} params.version - Version number of the Asset Manager
   */
  function AssetManager(_ref) {
    var assetManagerId = _ref.assetManagerId,
        partyId = _ref.partyId,
        _ref$partyStatus = _ref.partyStatus,
        partyStatus = _ref$partyStatus === undefined ? 'Active' : _ref$partyStatus,
        baseCurrency = _ref.baseCurrency,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        _ref$addresses = _ref.addresses,
        addresses = _ref$addresses === undefined ? {} : _ref$addresses,
        _ref$emails = _ref.emails,
        emails = _ref$emails === undefined ? {} : _ref$emails,
        _ref$references = _ref.references,
        references = _ref$references === undefined ? {} : _ref$references,
        _ref$comments = _ref.comments,
        comments = _ref$comments === undefined ? {} : _ref$comments,
        _ref$links = _ref.links,
        links = _ref$links === undefined ? {} : _ref$links,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, AssetManager);

    return _possibleConstructorReturn(this, (AssetManager.__proto__ || Object.getPrototypeOf(AssetManager)).call(this, {
      assetManagerId: assetManagerId,
      partyId: partyId,
      partyStatus: partyStatus,
      baseCurrency: baseCurrency,
      description: description,
      addresses: addresses,
      emails: emails,
      references: references,
      comments: comments,
      links: links,
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));
  }

  return AssetManager;
}(_company2.default);

exports.default = AssetManager;