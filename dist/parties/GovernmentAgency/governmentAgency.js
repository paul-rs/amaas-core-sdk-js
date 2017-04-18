'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _organisation = require('../Organisation/organisation.js');

var _organisation2 = _interopRequireDefault(_organisation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Government Agency
 * @extends Organisation
 */
var GovernmentAgency = function (_Organisation) {
  _inherits(GovernmentAgency, _Organisation);

  /**
   * Construct a new GovernmentAgency object
   * @param {object} params - GovernmentAgency creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Government Agency
   * @param {string} params.partyId - Party ID of the Government Agency
   * @param {string} params.partyStatus=Active - Status of the Government Agency (e.g. 'Active')
   * @param {string} params.partyClass=Organisation - Class of the Government Agency
   * @param {string} params.partyType=GovernmentAgency - Type of the Government Agency
   * @param {string} params.description - Description of the Government Agency
   * @param {object} params.addresses - Object of Addresses associated with this Government Agency
   * @param (object) params.emails - Object of Emails associated with this Government Agency
   * @param {object} params.references - Object of References associated with this Government Agency
   * @param {string} params.createdBy - ID of the user that created the Government Agency (required if creating a new Government Agency)
   * @param {string} params.updatedBy - ID of the user that updated the Government Agency (use if amending existing Government Agency)
   * @param {date} params.createdTime - Time that the Government Agency was created (required if creating new Government Agency)
   * @param {date} params.updatedTime - Time that the Government Agency was updated (required if amending existing Government Agency)
   * @param {number} params.version - Version number of the Government Agency
   */
  function GovernmentAgency(_ref) {
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

    _classCallCheck(this, GovernmentAgency);

    return _possibleConstructorReturn(this, (GovernmentAgency.__proto__ || Object.getPrototypeOf(GovernmentAgency)).call(this, {
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

  // toJSON() {
  //   return Object.assign({}, {
  //     addresses: this.addresses,
  //     emails: this.emails,
  //     references: this.references
  //   }, this)
  // return {
  //   asset_manager_id: this.assetManagerId,
  //   party_id: this.partyId,
  //   party_status: this.partyStatus,
  //   party_class: this.partyClass,
  //   party_type: this.partyType,
  //   description: this.description,
  //   addresses: this.addresses,
  //   emails: this.emails,
  //   references: this.references,
  //   created_by: this.createdBy,
  //   updated_by: this.updatedBy,
  //   created_time: this.createdTime,
  //   updated_time: this.updatedTime,
  //   version: this.version
  // }
  // }

  return GovernmentAgency;
}(_organisation2.default);

exports.default = GovernmentAgency;