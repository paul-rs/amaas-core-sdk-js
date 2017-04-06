'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decimal = require('decimal.js');

var _decimal2 = _interopRequireDefault(_decimal);

var _core = require('../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Position = function (_AMaaSModel) {
  _inherits(Position, _AMaaSModel);

  function Position(_ref) {
    var createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version,
        assetManagerId = _ref.assetManagerId,
        assetBookId = _ref.assetBookId,
        assetId = _ref.assetId,
        quantity = _ref.quantity,
        validFrom = _ref.validFrom,
        internalId = _ref.internalId,
        validTo = _ref.validTo,
        clientId = _ref.clientId,
        accountingType = _ref.accountingType,
        accountId = _ref.accountId;

    _classCallCheck(this, Position);

    var _this = _possibleConstructorReturn(this, (Position.__proto__ || Object.getPrototypeOf(Position)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    Object.defineProperties(_this, {
      _quantity: { writable: true, enumerable: false },
      quantity: {
        get: function get() {
          return _this._quantity;
        },
        set: function set() {
          var newQuantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          _this._quantity = new _decimal2.default(newQuantity);
        }, enumerable: true
      }
    });
    _this.assetManagerId = assetManagerId;
    _this.assetBookId = assetBookId;
    _this.assetId = assetId;
    _this.quantity = quantity;
    _this.validFrom = validFrom;
    _this.internalId = internalId;
    _this.validTo = validTo;
    _this.clientId = clientId;
    _this.accountingType = accountingType;
    _this.accountId = accountId;
    return _this;
  }

  // set quantity(newQuantity) {
  //   this._quantity = new Decimal(newQuantity)
  // }
  //
  // get quantity() {
  //   return this._quantity
  // }

  /*
  toJSON() {
    return {
      asset_manager_id: this.assetManagerId,
      asset_book_id: this.assetBookId,
      asset_id: this.assetId,
      quantity: this.quantity,
      valid_from: this.validFrom,
      internal_id: this.internalId,
      valid_to: this.validTo,
      client_id: this.clientId,
      accounting_type: this.accountingType,
      account_id: this.accountId,
      created_by: this.createdBy,
      updated_by: this.updatedBy,
      created_time: this.createdTime,
      updated_time: this.updatedTime
    }
  }
  */
  // toJSON() {
  //   return Object.assign({}, {
  //     quantity: this.quantity
  //   }, this)
  // }


  return Position;
}(_core.AMaaSModel);

exports.default = Position;