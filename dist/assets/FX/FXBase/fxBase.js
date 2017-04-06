'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _asset = require('../../Asset/asset.js');

var _asset2 = _interopRequireDefault(_asset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FXBase = function (_Asset) {
  _inherits(FXBase, _Asset);

  function FXBase(_ref) {
    var assetManagerId = _ref.assetManagerId,
        fungible = _ref.fungible,
        assetIssuerId = _ref.assetIssuerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'ForeignExchange' : _ref$assetClass,
        _ref$assetType = _ref.assetType,
        assetType = _ref$assetType === undefined ? 'ForeignExchange' : _ref$assetType,
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

    _classCallCheck(this, FXBase);

    return _possibleConstructorReturn(this, (FXBase.__proto__ || Object.getPrototypeOf(FXBase)).call(this, {
      assetManagerId: assetManagerId,
      fungible: fungible,
      assetIssuerId: assetIssuerId,
      assetId: assetId,
      assetClass: assetClass,
      assetType: assetType,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      maturityDate: maturityDate,
      description: description,
      clientId: clientId,
      references: references,
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));
  }

  _createClass(FXBase, [{
    key: 'getBaseCurrency',
    value: function getBaseCurrency() {
      return this.assetId.slice(0, 3);
    }
  }, {
    key: 'getCounterCurrency',
    value: function getCounterCurrency() {
      return this.assetId.slice(3, 7);
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

  }]);

  return FXBase;
}(_asset2.default);

exports.default = FXBase;