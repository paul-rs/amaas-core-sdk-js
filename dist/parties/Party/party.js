'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('../../core');

var _Children = require('../Children');

var _children = require('../../children');

var _enums = require('../enums');

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

    _classCallCheck(this, Party);

    var _this = _possibleConstructorReturn(this, (Party.__proto__ || Object.getPrototypeOf(Party)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    Object.defineProperties(_this, {
      _emails: { writable: true, enumerable: false },
      emails: {
        get: function get() {
          return _this._emails;
        },
        set: function set(newEmails) {
          if (Object.keys(newEmails).length > 0) {
            var _emails = {};
            var primaryEmail = 0;
            for (var type in newEmails) {
              if (newEmails.hasOwnProperty(type)) {
                _emails[type] = new _Children.Email(Object.assign({}, newEmails[type]));
                _this._checkEmail(newEmails[type].email);
                if (newEmails[type].emailPrimary) {
                  primaryEmail++;
                }
              }
            }
            if (primaryEmail == 0) {
              throw new Error('At least 1 primary email must be supplied');
            }
            _this._emails = _emails;
          } else {
            _this._emails = {};
          }
        },
        enumerable: true
      },
      _addresses: { writable: true, enumerable: false },
      addresses: {
        get: function get() {
          return _this._addresses;
        },
        set: function set(newAddresses) {
          if (newAddresses && Object.keys(newAddresses).length > 0) {
            var _addresses = {};
            var primaryAdd = 0;
            for (var type in newAddresses) {
              if (newAddresses.hasOwnProperty(type)) {
                _addresses[type] = new _Children.Address(Object.assign({}, newAddresses[type]));
                if (newAddresses[type].addressPrimary) {
                  primaryAdd++;
                }
              }
            }
            if (primaryAdd == 0) {
              throw new Error('At least 1 primary address must be supplied');
            }
            _this._addresses = _addresses;
          } else {
            _this._addresses = {};
          }
        }, enumerable: true
      },
      _references: { writable: true, enumerable: false },
      references: {
        get: function get() {
          return _this._references;
        },
        set: function set(newReferences) {
          if (newReferences) {
            var _references = {};
            for (var ref in newReferences) {
              if (newReferences.hasOwnProperty(ref)) {
                _references[ref] = new _core.Reference(Object.assign({}, newReferences[ref]));
              }
            }
            _this._references = _references;
          }
        },
        enumerable: true
      },
      _comments: { writable: true, enumerable: false },
      comments: {
        get: function get() {
          return _this._comments;
        },
        set: function set(newComments) {
          if (newComments) {
            var _comments = {};
            for (var ref in newComments) {
              if (newComments.hasOwnProperty(ref)) {
                _comments[ref] = new _children.Comment(Object.assign({}, newComments[ref]));
              }
            }
            _this._comments = _comments;
          }
        },
        enumerable: true
      },
      _links: { writable: true, enumerable: false },
      links: {
        get: function get() {
          return _this._links;
        },
        set: function set(newLinks) {
          if (newLinks) {
            var _links = {};
            for (var ref in newLinks) {
              if (newLinks.hasOwnProperty(ref)) {
                _links[ref] = newLinks[ref].map(function (link) {
                  return new _children.Link(Object.assign({}, link));
                });
              }
            }
            _this._links = _links;
          }
        },
        enumerable: true
      },
      _partyStatus: { writable: true, enumerable: false },
      partyStatus: {
        get: function get() {
          return _this._partyStatus;
        },
        set: function set(newPartyStatus) {
          if (newPartyStatus) {
            if (_enums.PARTY_STATUSES.indexOf(newPartyStatus) === -1) {
              throw new Error('Invalid Party Status: ' + newPartyStatus);
            }
            _this._partyStatus = newPartyStatus;
          }
        },
        enumerable: true
      }
    });
    _this.assetManagerId = assetManagerId;
    _this.partyId = partyId;
    _this.partyStatus = partyStatus;
    _this.partyClass = partyClass;
    _this.partyType = _this.constructor.name;
    _this.baseCurrency = baseCurrency;
    _this.description = description;
    _this.addresses = addresses;
    _this.emails = emails;
    _this.references = references;
    _this.comments = comments;
    _this.links = links;
    return _this;
  }

  /**
   * Upsert an Address
   * @param {string} type - Type of Address (e.g. 'Registered', 'Legal')
   * @param {Address} address - new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??)
   */


  _createClass(Party, [{
    key: 'upsertAddress',
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

    /**
     * Upsert an Email
     * @param {string} type - Type of Email (e.g. 'Work', 'Support')
     * @param {Emails} email - new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??)
     */

  }, {
    key: 'upsertEmail',
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

    // Check if input is a valid email string

  }, {
    key: '_checkEmail',
    value: function _checkEmail(email) {
      var regex = new RegExp('^.+@.+\..+$');
      if (!regex.test(email)) {
        throw new Error('Not a valid email');
      }
    }
  }]);

  return Party;
}(_core.AMaaSModel);

exports.default = Party;