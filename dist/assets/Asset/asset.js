'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../../core');

var _Comment = require('../../children/Comment');

var _Comment2 = _interopRequireDefault(_Comment);

var _Link = require('../../children/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an Asset
 * @extends AMaaSModel
 */
var Asset = function (_AMaaSModel) {
  _inherits(Asset, _AMaaSModel);

  /**
   * Construct a new Asset object
   * @param {object} params - Asset creation options
   * @param {integer} params.assetManagerId - ID of Asset's Asset Manager (required)
   * @param {bool} params.fungible - Whether this asset is fungible (required)
   * @param {string} params.assetIssuerId - ID of the Asset's issuer
   * @param {integer} params.assetId - ID of the Asset (required)
   * @param {string} params.assetClass - Class of the Asset
   * @param {string} params.assetStatus - Status of the Asset (e.g. 'Active')
   * @param {string} params.countryId - ID of Asset's country
   * @param {string} params.venueId - ID of Asset's venue (if applicable)
   * @param {date} params.maturityDate - Date of the Asset's maturity (if applicable)
   * @param {string} params.description - Description of the asset
   * @param {object} params.references - Object of References associated with this Asset
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new Link)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing Link)
   * @param {date} params.createdTime - Time that the Link was created (required if creating new Link)
   * @param {date} params.updatedTime - Time that the Link was updated (required if amending existing Link)
   * @param {number} params.version - Version number of the Link
  */
  function Asset(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Asset' : _ref$assetClass,
        fungible = _ref.fungible,
        assetIssuerId = _ref.assetIssuerId,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        currency = _ref.currency,
        issueDate = _ref.issueDate,
        maturityDate = _ref.maturityDate,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        clientId = _ref.clientId,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version,
        clientAdditional = _objectWithoutProperties(_ref, ['assetManagerId', 'assetId', 'assetClass', 'fungible', 'assetIssuerId', 'assetStatus', 'countryId', 'venueId', 'currency', 'issueDate', 'maturityDate', 'description', 'clientId', 'comments', 'links', 'references', 'createdBy', 'updatedBy', 'createdTime', 'updatedTime', 'version']);

    _classCallCheck(this, Asset);

    var _this = _possibleConstructorReturn(this, (Asset.__proto__ || Object.getPrototypeOf(Asset)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    Object.defineProperties(_this, {
      _issueDate: { writable: true, enumerable: false },
      issueDate: {
        get: function get() {
          return _this._issueDate;
        },
        set: function set(newIssueDate) {
          // Accepts string 'yyyy-mm-dd'
          if (newIssueDate) {
            var dArray = newIssueDate.split('-');
            var date = new Date(dArray[0], dArray[1] - 1, dArray[2]);
            _this._issueDate = date;
          }
        },
        enumerable: true
      },
      _maturityDate: { writable: true, enumerable: false },
      maturityDate: {
        get: function get() {
          return _this._maturityDate;
        },
        set: function set(newMaturityDate) {
          // Accepts string 'yyyy-mm-dd'
          if (newMaturityDate) {
            var dArray = newMaturityDate.split('-');
            var date = new Date(dArray[0], dArray[1] - 1, dArray[2]);
            _this._maturityDate = date;
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
            var commentsClass = {};
            for (var name in newComments) {
              if (newComments.hasOwnProperty(name)) {
                commentsClass[name] = new _Comment2.default(newComments[name]);
              }
            }
            _this._comments = commentsClass;
          } else {
            _this._comments = {};
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
            var linksClass = {};
            for (var name in newLinks) {
              if (newLinks.hasOwnProperty(name)) {
                linksClass[name] = newLinks[name].map(function (link) {
                  return new _Link2.default(link);
                });
              }
            }
            _this._links = linksClass;
          } else {
            _this._links = {};
          }
        }
      },
      _references: { writable: true, enumerable: false },
      references: {
        get: function get() {
          return _this._references;
        },
        set: function set(newReferences) {
          if (newReferences) {
            var refClass = {
              AMaaS: new _core.Reference({ referenceValue: assetId })
            };
            for (var name in newReferences) {
              if (newReferences.hasOwnProperty(name)) {
                refClass[name] = new _core.Reference(newReferences[name]);
              }
            }
            _this._references = refClass;
          } else {
            _this._references = {
              AMaaS: new _core.Reference({ referenceValue: assetId })
            };
          }
        }, enumerable: true
      }
    });

    _this.assetManagerId = assetManagerId;
    _this.assetId = assetId;
    _this.assetClass = assetClass;
    _this.assetType = _this.constructor.name;
    _this.fungible = fungible;
    _this.assetIssuerId = assetIssuerId;
    _this.assetStatus = assetStatus;
    _this.countryId = countryId;
    _this.venueId = venueId;
    _this.currency = currency;
    _this.issueDate = issueDate;
    _this.maturityDate = maturityDate;
    _this.description = description;
    _this.clientId = clientId;
    _this.comments = comments;
    _this.links = links;
    _this.references = references;
    return _this;
  }

  return Asset;
}(_core.AMaaSModel);

exports.default = Asset;