'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('../../core');

var _Children = require('../Children');

var _network = require('../../utils/network');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Party
 * @extends AMaaSModel
 */
var Party = function (_AMaaSModel) {
  _inherits(Party, _AMaaSModel);

  /**
   * Construct a new Party object
   * @param {object} params - Party creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Party
   * @param {string} params.partyId - Party ID of the Party
   * @param {string} params.partyStatus=Active - Status of the Party (e.g. 'Active')
   * @param {string} params.partyClass=Party - Class of the Party
   * @param {string} params.partyType=Party - Type of the Party
   * @param {string} params.description - Description of the Party
   * @param {object} params.addresses - Object of Addresses associated with this Party
   * @param (object) params.emails - Object of Emails associated with this Party
   * @param {object} params.references - Object of References associated with this Party
   * @param {string} params.createdBy - ID of the user that created the Party (required if creating a new Party)
   * @param {string} params.updatedBy - ID of the user that updated the Party (use if amending existing Party)
   * @param {date} params.createdTime - Time that the Party was created (required if creating new Party)
   * @param {date} params.updatedTime - Time that the Party was updated (required if amending existing Party)
   * @param {number} params.version - Version number of the Party
   */
  function Party(_ref) {
    var assetManagerId = _ref.assetManagerId,
        partyId = _ref.partyId,
        _ref$partyStatus = _ref.partyStatus,
        partyStatus = _ref$partyStatus === undefined ? 'Active' : _ref$partyStatus,
        _ref$partyClass = _ref.partyClass,
        partyClass = _ref$partyClass === undefined ? 'Party' : _ref$partyClass,
        _ref$partyType = _ref.partyType,
        partyType = _ref$partyType === undefined ? 'Party' : _ref$partyType,
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

    _classCallCheck(this, Party);

    var _this = _possibleConstructorReturn(this, (Party.__proto__ || Object.getPrototypeOf(Party)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    _this.assetManagerId = assetManagerId;
    _this.partyId = partyId;
    _this.partyStatus = partyStatus;
    _this.partyClass = partyClass;
    _this.partyType = partyType;
    _this.description = description;
    _this.addresses = addresses;
    _this.emails = emails;
    _this.references = references;
    return _this;
  }

  _createClass(Party, [{
    key: 'upsertAddress',


    /**
     * Upsert an Address
     * @param {string} type - Type of Address (e.g. 'Registered', 'Legal')
     * @param {Address} address - new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??)
     */
    value: function upsertAddress(type, address) {
      var addresses = Object.assign({}, this.addresses);
      if (address.addressPrimary) {
        for (var ref in addresses) {
          if (addresses.hasOwnProperty(ref)) {
            addresses[ref].addressPrimary = false;
          }
        }
      }
      addresses[type] = address;
      this.addresses = addresses;
    }
  }, {
    key: 'upsertEmail',


    /**
     * Upsert an Email
     * @param {string} type - Type of Email (e.g. 'Work', 'Support')
     * @param {Emails} email - new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??)
     */
    value: function upsertEmail(type, email) {
      var emails = Object.assign({}, this.emails);
      if (email.emailPrimary) {
        for (var ref in emails) {
          if (emails.hasOwnProperty(ref)) {
            emails[ref].emailPrimary = false;
          }
        }
      }
      emails[type] = email;
      this.emails = emails;
    }

    // Check that the object has the correct type

  }, {
    key: '_checkTypes',
    value: function _checkTypes(type, contact, classType) {
      if (!(contact instanceof classType)) {
        throw new Error('Found ' + type + ' with wrong class');
      }
    }

    // Check if input is a valid email string

  }, {
    key: '_checkEmail',
    value: function _checkEmail(email) {
      var regex = new RegExp('^.+@.+\..+$');
      if (!regex.test(email)) {
        throw new Error('Not a valid email');
      }
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

  }, {
    key: 'addresses',
    set: function set(newAddresses) {
      if (Object.keys(newAddresses).length > 0) {
        var primaryAdd = 0;
        for (var type in newAddresses) {
          if (newAddresses.hasOwnProperty(type)) {
            this._checkTypes('address', newAddresses[type], _Children.Address);
            if (newAddresses[type].addressPrimary) {
              primaryAdd++;
            }
          }
        }
        if (primaryAdd == 0) {
          throw new Error('At least 1 primary address must be supplied');
        }
        this._addresses = newAddresses;
      } else {
        this._addresses = {};
      }
    },
    get: function get() {
      return this._addresses;
    }
  }, {
    key: 'emails',
    set: function set(newEmails) {
      if (Object.keys(newEmails).length > 0) {
        var primaryEmail = 0;
        for (var type in newEmails) {
          if (newEmails.hasOwnProperty(type)) {
            this._checkTypes('email', newEmails[type], _Children.Email);
            this._checkEmail(newEmails[type].email);
            if (newEmails[type].emailPrimary) {
              primaryEmail++;
            }
          }
        }
        if (primaryEmail == 0) {
          throw new Error('At least 1 primary email must be supplied');
        }
        this._emails = newEmails;
      } else {
        this._emails = {};
      }
    },
    get: function get() {
      return this._emails;
    }
  }]);

  return Party;
}(_core.AMaaSModel);

exports.default = Party;