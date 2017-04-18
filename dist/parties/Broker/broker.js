'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _company = require('../Company/company.js');

var _company2 = _interopRequireDefault(_company);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Broker
 * @extends Company
 */
var Broker = function (_Company) {
  _inherits(Broker, _Company);

  /**
   * @param {object} params - Broker creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Broker
   * @param {string} params.partyId - Party ID of the Broker
   * @param {string} params.partyStatus - Status of the Broker (e.g. 'Active')
   * @param {string} params.partyClass - Class of the Broker
   * @param {string} params.description - Description of the Broker
   * @param {object} params.addresses - Object of Addresses associated with this Broker
   * @param (object) params.emails - Object of Emails associated with this Broker
   * @param {object} params.references - Object of References associated with this Broker
   * @param {string} params.createdBy - ID of the user that created the Broker (required if creating a new Broker)
   * @param {string} params.updatedBy - ID of the user that updated the Broker (use if amending existing Broker)
   * @param {date} params.createdTime - Time that the Broker was created (required if creating new Broker)
   * @param {date} params.updatedTime - Time that the Broker was updated (required if amending existing Broker)
   * @param {number} params.version - Version number of the Broker
   */
  function Broker(_ref) {
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

    _classCallCheck(this, Broker);

    return _possibleConstructorReturn(this, (Broker.__proto__ || Object.getPrototypeOf(Broker)).call(this, {
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

  return Broker;
}(_company2.default);

exports.default = Broker;