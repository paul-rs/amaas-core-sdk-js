'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../../core');

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
        fungible = _ref.fungible,
        assetIssuerId = _ref.assetIssuerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Asset' : _ref$assetClass,
        _ref$assetType = _ref.assetType,
        assetType = _ref$assetType === undefined ? 'Asset' : _ref$assetType,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        maturityDate = _ref.maturityDate,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        clientId = _ref.clientId,
        _ref$references = _ref.references,
        references = _ref$references === undefined ? {} : _ref$references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Asset);

    var _this = _possibleConstructorReturn(this, (Asset.__proto__ || Object.getPrototypeOf(Asset)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    _this.assetManagerId = assetManagerId;
    _this.assetId = assetId;
    _this.assetClass = assetClass;
    _this.assetType = assetType;
    _this.fungible = fungible;
    _this.assetIssuerId = assetIssuerId;
    _this.assetStatus = assetStatus;
    _this.countryId = countryId;
    _this.venueId = venueId;
    _this.maturityDate = maturityDate;
    _this.description = description;
    _this.clientId = clientId;
    _this.references = references;
    _this.references.AMaaS = new _core.Reference({ referenceValue: assetId });
    return _this;
  }

  /*
  toJSON() {
    return {
      asset_manager_id: this.assetManagerId,
      fungible: this.fungible,
      asset_issuer_id: this.assetIssuerId,
      asset_id: this.assetId,
      asset_class: this.assetClass,
      asset_type: this.assetType,
      asset_status: this.assetStatus,
      country_id: this.countryId,
      venue_id: this.venueId,
      maturity_date: this.maturityDate,
      description: this.description,
      client_id: this.clientId,
      references: this.references,
      created_by: this.createdBy,
      updated_by: this.updatedBy,
      created_time: this.createdTime,
      updated_time: this.updatedTime,
      version: this.version
    }
  }
  */


  return Asset;
}(_core.AMaaSModel);

exports.default = Asset;