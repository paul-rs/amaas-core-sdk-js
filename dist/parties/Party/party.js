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
    key: '_readTypes',


    // Read the types of newContacts values and assign helper variables
    value: function _readTypes(type, newContacts) {
      var inputTypes = void 0;
      var inputPrimary = void 0;
      switch (type) {
        case 'address':
          this._checkTypes(type, newContacts, _Children.Address);
          inputTypes = 'addresses';
          inputPrimary = 'addressPrimary';
          break;
        case 'email':
          this._checkTypes(type, newContacts, _Children.Email);
          inputTypes = 'emails';
          inputPrimary = 'emailPrimary';
          // Check that every Email has a valid email in the email field
          for (var contact in newContacts) {
            this._checkEmail(newContacts[contact].email);
          }
          break;
        default:
          this._checkTypes(type, newContacts, _Children.Address);
          inputTypes = 'addresses';
          inputPrimary = 'addressPrimary';
      }
      return { inputTypes: inputTypes, inputPrimary: inputPrimary };
    }

    // Check that every value in the object has the correct type

  }, {
    key: '_checkTypes',
    value: function _checkTypes(type, contacts, classType) {
      for (var contact in contacts) {
        if (!(contacts[contact] instanceof classType)) {
          throw new Error('Found ' + type + ' with wrong class');
        }
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
  }, {
    key: '_validatePrimary',
    value: function _validatePrimary(type, newContacts) {
      var readResult = this._readTypes(type, newContacts);
      var inputTypes = readResult.inputTypes;
      var inputPrimary = readResult.inputPrimary;

      // If there are no existing contacts, set the existing contacts to {}
      var existingContacts = this[inputTypes];
      if (!existingContacts) {
        existingContacts = {};
      }

      // Count the number of primary contacts in newContacts
      var primaryInNew = 0;
      for (var contact in newContacts) {
        if (newContacts[contact][inputPrimary]) {
          primaryInNew++;
        }
      }
      // If there are no existing contacts, then there needs to be exactly 1
      // primary contact in newContacts
      if (Object.keys(existingContacts).length == 0) {
        if (primaryInNew != 1) {
          throw new Error('Exactly 1 primary address is allowed');
        } else {
          // existingContacts = existingContacts.concat(newContacts)
          Object.assign(existingContacts, newContacts);
        }
        // If there are existing contacts, then there needs to be exactly 0
        // primary contacts in newContacts (because existence of existing contacts
        // implies existence of exactly 1 primary contact)
      } else {
        if (primaryInNew != 0) {
          throw new Error('Primary Address is already set for this Party');
        } else {
          // existingContacts = existingContacts.concat(newContacts)
          Object.assign(existingContacts, newContacts);
        }
      }
      return existingContacts;
    }
  }, {
    key: '_addAddresses',
    value: function _addAddresses(newAddresses) {
      var validated = this._validatePrimary('address', newAddresses);
      if (validated) {
        this._addresses = validated;
      }
    }
  }, {
    key: '_addEmails',
    value: function _addEmails(newEmails) {
      var validated = this._validatePrimary('email', newEmails);
      if (validated) {
        this._emails = validated;
      }
    }
  }, {
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
  }, {
    key: 'addresses',
    set: function set(newAddresses) {
      if (Object.keys(newAddresses).length > 0) {
        this._addAddresses(newAddresses);
      } else if (!this.addresses) {
        this._addresses = newAddresses;
      } else {
        this._addresses = this.addresses;
      }
    },
    get: function get() {
      return this._addresses;
    }
  }, {
    key: 'emails',
    set: function set(newEmails) {
      if (Object.keys(newEmails).length > 0) {
        this._addEmails(newEmails);
      } else if (!this.emails) {
        this._emails = newEmails;
      } else {
        this._emails = this.emails;
      }
    },
    get: function get() {
      return this._emails;
    }
  }]);

  return Party;
}(_core.AMaaSModel);

exports.default = Party;