'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _company = require('../Company/company.js');

var _company2 = _interopRequireDefault(_company);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Fund
 * @extends Company
 */
var Fund = function (_Company) {
  _inherits(Fund, _Company);

  /**
   * Construct a new Fund object
   * @param {object} params - Fund creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Fund
   * @param {string} params.partyId - Party ID of the Fund
   * @param {string} params.partyStatus=Active - Status of the Fund (e.g. 'Active')
   * @param {string} params.partyClass=Company - Class of the Fund
   * @param {string} params.partyType=Fund - Type of the Fund
   * @param {string} params.description - Description of the Fund
   * @param {object} params.addresses - Object of Addresses associated with this Fund
   * @param (object) params.emails - Object of Emails associated with this Fund
   * @param {object} params.references - Object of References associated with this Fund
   * @param {string} params.createdBy - ID of the user that created the Fund (required if creating a new Fund)
   * @param {string} params.updatedBy - ID of the user that updated the Fund (use if amending existing Fund)
   * @param {date} params.createdTime - Time that the Fund was created (required if creating new Fund)
   * @param {date} params.updatedTime - Time that the Fund was updated (required if amending existing Fund)
   * @param {number} params.version - Version number of the Fund
   */
  function Fund(_ref) {
    var assetManagerId = _ref.assetManagerId,
        partyId = _ref.partyId,
        _ref$partyStatus = _ref.partyStatus,
        partyStatus = _ref$partyStatus === undefined ? 'Active' : _ref$partyStatus,
        _ref$partyClass = _ref.partyClass,
        partyClass = _ref$partyClass === undefined ? 'Company' : _ref$partyClass,
        _ref$partyType = _ref.partyType,
        partyType = _ref$partyType === undefined ? 'Fund' : _ref$partyType,
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

    _classCallCheck(this, Fund);

    return _possibleConstructorReturn(this, (Fund.__proto__ || Object.getPrototypeOf(Fund)).call(this, {
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

  _createClass(Fund, [{
    key: 'toJSON',
    value: function toJSON() {
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
      };
    }
  }]);

  return Fund;
}(_company2.default);

exports.default = Fund;