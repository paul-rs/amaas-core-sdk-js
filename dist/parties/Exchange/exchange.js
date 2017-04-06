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
 * Class representing an Exchange
 * @extends Company
 */
var Exchange = function (_Company) {
  _inherits(Exchange, _Company);

  /**
   * Construct a new Exchange object
   * @param {object} params - Exchange creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Exchange
   * @param {string} params.partyId - Party ID of the Exchange
   * @param {string} params.partyStatus=Active - Status of the Exchange (e.g. 'Active')
   * @param {string} params.partyClass=Company - Class of the Exchange
   * @param {string} params.partyType=Exchange - Class of the Exchange
   * @param {string} params.description - Description of the Exchange
   * @param {object} params.addresses - Object of Addresses associated with this Exchange
   * @param (object) params.emails - Object of Emails associated with this Exchange
   * @param {object} params.references - Object of References associated with this Exchange
   * @param {string} params.createdBy - ID of the user that created the Exchange (required if creating a new Exchange)
   * @param {string} params.updatedBy - ID of the user that updated the Exchange (use if amending existing Exchange)
   * @param {date} params.createdTime - Time that the Exchange was created (required if creating new Exchange)
   * @param {date} params.updatedTime - Time that the Exchange was updated (required if amending existing Exchange)
   * @param {number} params.version - Version number of the Exchange
   */
  function Exchange(_ref) {
    var assetManagerId = _ref.assetManagerId,
        partyId = _ref.partyId,
        _ref$partyStatus = _ref.partyStatus,
        partyStatus = _ref$partyStatus === undefined ? 'Active' : _ref$partyStatus,
        _ref$partyClass = _ref.partyClass,
        partyClass = _ref$partyClass === undefined ? 'Company' : _ref$partyClass,
        _ref$partyType = _ref.partyType,
        partyType = _ref$partyType === undefined ? 'Exchange' : _ref$partyType,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        _ref$addresses = _ref.addresses,
        addresses = _ref$addresses === undefined ? {} : _ref$addresses,
        _ref$emails = _ref.emails,
        emails = _ref$emails === undefined ? {} : _ref$emails,
        _ref$references = _ref.references,
        references = _ref$references === undefined ? {} : _ref$references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Exchange);

    return _possibleConstructorReturn(this, (Exchange.__proto__ || Object.getPrototypeOf(Exchange)).call(this, {
      assetManagerId: assetManagerId,
      partyId: partyId,
      partyStatus: partyStatus,
      partyClass: partyClass,
      partyType: partyType,
      description: description,
      addresses: addresses,
      emails: emails,
      references: references,
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));
  }

  /*
  toJSON() {
    return {
      asset_manager_id: this.assetManagerId,
      party_id: this.partyId,
      party_status: this.partyStatus,
      party_class: this.partyClass,
      party_type: this.partyType,
      description: this.description,
      addresses: this.addresses,
      emails: this.emails,
      references: this.references,
      created_by: this.createdBy,
      updated_by: this.updatedBy,
      created_time: this.createdTime,
      updated_time: this.updatedTime,
      version: this.version
    }
  }
  */


  return Exchange;
}(_company2.default);

exports.default = Exchange;