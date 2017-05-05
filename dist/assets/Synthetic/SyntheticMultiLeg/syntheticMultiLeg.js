'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _synthetic = require('../Synthetic/synthetic.js');

var _synthetic2 = _interopRequireDefault(_synthetic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Multi-Leg Synthetic. This is an Asset which takes multiple assets as 'legs'. The value of the entire structure is equal to the sum of the legs
 * @memberof module:assets
 * @extends module:assets.Synthetic
 */
var SyntheticMultiLeg = function (_Synthetic) {
  _inherits(SyntheticMultiLeg, _Synthetic);

  /**
   * Construct a new Multi-Leg Synthetic instance
   * @param {object} params - SyntheticMultiLeg creation options:
   * @param {number} params.assetManagerId - ID of Synthetic's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Synthetic __(required)__
   * @param {string} [params.assetClass=Synthetic] - Auto-set to `Synthetic` __(read-only)__
   * @param {string} [params.assetType] - Type of the Synthetic. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Whether this Asset is fungible __(required)__
   * @param {string} [params.assetIssuerId] - ID of the Synthetic's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Synthetic
   * @param {string} [params.countryId] - ID of Synthetic's country
   * @param {string} [params.venueId] - ID of Synthetic's venue if applicable
   * @param {string} [params.currency] - Synthetic currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Synthetic
   * @param {string} [params.displayName] - Display name of the Synthetic
   * @param {boolean} [params.rollPrice=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.clientId] - ID of the associated client
   * @param {array} params.legs - Legs of the Synthetic. Array of objects of the form { assetId: `string`, quantity: `Decimal` } __(required)__
   * @param {object} [params.comments] - Object of Comments attached to the Synthetic
   * @param {object} [params.links] - Object of array of Links attached to the Synthetic
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Synthetic
   * @param {string} [params.createdBy] - ID of the user that created the Synthetic
   * @param {string} [params.updatedBy] - ID of the user that updated the Synthetic
   * @param {date} [params.createdTime] - Time that the Synthetic was created
   * @param {date} [params.updatedTime] - Time that the Synthetic was updated
   * @param {number} [params.version] - Version number
  */
  function SyntheticMultiLeg(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Synthetic' : _ref$assetClass,
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
        displayName = _ref.displayName,
        clientId = _ref.clientId,
        legs = _ref.legs,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, SyntheticMultiLeg);

    var _this = _possibleConstructorReturn(this, (SyntheticMultiLeg.__proto__ || Object.getPrototypeOf(SyntheticMultiLeg)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: assetClass,
      fungible: fungible,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
      issueDate: issueDate,
      maturityDate: maturityDate,
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

    Object.defineProperties(_this, {
      _legs: { writable: true, enumerable: false },
      legs: {
        get: function get() {
          return _this._legs;
        },
        set: function set(newLegs) {
          if (newLegs) {
            if (!Array.isArray(newLegs)) {
              throw new Error('Invalid leg type: ' + (typeof newLegs === 'undefined' ? 'undefined' : _typeof(newLegs)) + '. Legs must be an array');
            }
            _this._legs = newLegs;
          }
        },
        enumerable: true
      }
    });
    _this.legs = legs;
    return _this;
  }

  return SyntheticMultiLeg;
}(_synthetic2.default);

exports.default = SyntheticMultiLeg;