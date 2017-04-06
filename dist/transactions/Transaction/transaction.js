'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('../../core');

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Decimal = require('decimal.js');

/**
 * Class representing a Transaction
 * @extends AMaaSModel
 */

var Transaction = function (_AMaaSModel) {
  _inherits(Transaction, _AMaaSModel);

  /**
   * Construct a new Transaction object
   * @param {object} params - Transaction creation options
   * @param {string} params.assetManagerId - ID of the Transaction's Asset Manager
   * @param {string} params.assetBookId - ID of the Transaction's book
   * @param {string} params.counterpartyBookId - ID of the counterparty to this Transaction
   * @param {string} params.transactionAction - Transaction action e.g. BUY/SELL
   * @param {string} params.assetId - ID of the asset being transacted
   * @param {number} params.quantity - Quantity being transacted
   * @param {date} params.transactionDate - Date of transactionDate
   * @param {date} params.settlementDate - Date of settlement e.g. T+2 where T = transactionDate
   * @param {decimal} params.price - price of Asset being transacted
   * @param {string} params.transactionCurrency - Currency that the Transaction takes place in
   * @param {string} params.settlementCurrency - Currency that the Transaction is settled in
   * @param {Asset} params.transactionType - Type of Transaction e.g. Trade, Allocation
   * @param {*} params.transactionStatus - *
   * @param {date} params.executionTime - Time that the Transaction was executed
   * @param {string} params.transactionId - ID of the Transaction
   * @param {object} params.charges - Object of all charges (Charge class)
   * @param {object} params.codes - Object of all codes (Code class)
   * @param {object} params.references - *
   * @param {*} params.postings - *
   * @param {*} params.asset - *
  */
  function Transaction(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetBookId = _ref.assetBookId,
        counterpartyBookId = _ref.counterpartyBookId,
        transactionAction = _ref.transactionAction,
        assetId = _ref.assetId,
        quantity = _ref.quantity,
        transactionDate = _ref.transactionDate,
        settlementDate = _ref.settlementDate,
        price = _ref.price,
        transactionCurrency = _ref.transactionCurrency,
        settlementCurrency = _ref.settlementCurrency,
        asset = _ref.asset,
        _ref$executionTime = _ref.executionTime,
        executionTime = _ref$executionTime === undefined ? new Date() : _ref$executionTime,
        _ref$transactionType = _ref.transactionType,
        transactionType = _ref$transactionType === undefined ? 'Trade' : _ref$transactionType,
        _ref$transactionId = _ref.transactionId,
        transactionId = _ref$transactionId === undefined ? (0, _uuid2.default)() : _ref$transactionId,
        _ref$transactionStatu = _ref.transactionStatus,
        transactionStatus = _ref$transactionStatu === undefined ? 'New' : _ref$transactionStatu,
        _ref$charges = _ref.charges,
        charges = _ref$charges === undefined ? {} : _ref$charges,
        _ref$codes = _ref.codes,
        codes = _ref$codes === undefined ? {} : _ref$codes,
        _ref$comments = _ref.comments,
        comments = _ref$comments === undefined ? {} : _ref$comments,
        _ref$links = _ref.links,
        links = _ref$links === undefined ? {} : _ref$links,
        _ref$parties = _ref.parties,
        parties = _ref$parties === undefined ? {} : _ref$parties,
        _ref$references = _ref.references,
        references = _ref$references === undefined ? {} : _ref$references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Transaction);

    var _this = _possibleConstructorReturn(this, (Transaction.__proto__ || Object.getPrototypeOf(Transaction)).call(this, {
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

          _this._quantity = new Decimal(newQuantity);
        }, enumerable: true
      },
      _price: { writable: true, enumerable: false },
      price: {
        get: function get() {
          return _this._price;
        },
        set: function set() {
          var newPrice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          _this._price = new Decimal(newPrice);
        }, enumerable: true
      },
      _grossSettlement: { writable: true, enumerable: false },
      grossSettlement: {
        get: function get() {
          return _this._grossSettlement ? _this._grossSettlement : _this.price.times(_this.quantity);
        },
        set: function set() {
          var newGrossSettlement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          _this._grossSettlement = new Decimal(newGrossSettlement);
        }, enumerable: true
      },
      _netSettlement: { writable: true, enumerable: false },
      netSettlement: {
        get: function get() {
          return _this._netSettlement ? _this._netSettlement : _this.grossSettlement.minus(_this.chargesNetEffect());
        },
        set: function set() {
          var newNetSettlement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          _this._netSettlement = new Decimal(newNetSettlement);
        }, enumerable: true
      }
      // chargesNetEffect: {
      //   value: () => {
      //     if (Object.keys(this.charges).length == 0) {
      //       return new Decimal(0)
      //     }
      //     let netCharges = new Decimal(0);
      //     for (let chargeType in this.charges) {
      //       if (this.charges[chargeType].active && this.charges[chargeType].netAffecting) {
      //         netCharges = netCharges.plus(this.charges[chargeType].chargeValue)
      //       }
      //     }
      //     return netCharges
      //   },
      //   writable: false,
      //   enumerable: false
      // }
    });
    _this.assetManagerId = assetManagerId;
    _this.assetBookId = assetBookId;
    _this.counterpartyBookId = counterpartyBookId;
    _this.transactionAction = transactionAction;
    _this.assetId = assetId;
    _this.quantity = quantity;
    _this.transactionDate = transactionDate;
    _this.settlementDate = settlementDate;
    _this.price = price;
    _this.transactionCurrency = transactionCurrency;
    _this.settlementCurrency = settlementCurrency;
    _this.transactionType = transactionType;
    _this.transactionStatus = transactionStatus;
    _this.executionTime = executionTime;
    _this.transactionId = transactionId;
    _this.charges = charges;
    _this.codes = codes;
    _this.comments = comments;
    _this.links = links;
    _this.parties = parties;
    _this.references = references;
    _this.references.AMaaS = new _core.Reference({ referenceValue: _this.transactionId });
    _this.postings = [];
    _this.asset = asset;
    return _this;
  }

  // set quantity(newQuantity=0) {
  //   this._quantity = new Decimal(newQuantity)
  // }
  //
  // get quantity() {
  //   return this._quantity
  // }
  //
  // set price(newPrice=0) {
  //   this._price = new Decimal(newPrice)
  // }
  //
  // get price() {
  //   return this._price
  // }
  //
  // set grossSettlement(newGrossSettlement=0) {
  //   this._grossSettlement = new Decimal(newGrossSettlement)
  // }
  //
  // get grossSettlement() {
  //   return this._grossSettlement ? this._grossSettlement : this.price.times(this.quantity)
  // }
  //
  // set netSettlement(newNetSettlement=0) {
  //   this._netSettlement = new Decimal(newNetSettlement)
  // }
  //
  // get netSettlement() {
  //   return this._netSettlement ? this._netSettlement : this.grossSettlement.minus(this.chargesNetEffect)
  // }

  _createClass(Transaction, [{
    key: 'chargesNetEffect',
    value: function chargesNetEffect() {
      if (Object.keys(this.charges).length == 0) {
        return new Decimal(0);
      }
      var netCharges = new Decimal(0);
      for (var chargeType in this.charges) {
        if (this.charges[chargeType].active && this.charges[chargeType].netAffecting) {
          netCharges = netCharges.plus(this.charges[chargeType].chargeValue);
        }
      }
      return netCharges;
    }

    // toJSON() {
    //   return Object.assign({}, {
    //     quantity: this.quantity,
    //     price: this.price,
    //     grossSettlement: this.grossSettlement,
    //     netSettlement: this.netSettlement
    //   }, this)
    // return {
    //   asset_manager_id: this.assetManagerId,
    //   asset_book_id: this.assetBookId,
    //   counterparty_book_id: this.counterpartyBookId,
    //   transaction_action: this.transactionAction,
    //   asset_id: this.assetId,
    //   quantity: this.quantity,
    //   transaction_date: this.transactionDate,
    //   settlement_date: this.settlementDate,
    //   price: this.price,
    //   transaction_currency: this.transactionCurrency,
    //   settlement_currency: this.settlementCurrency,
    //   asset: this.asset,
    //   execution_time: this.executionTime,
    //   transaction_type: this.transactionType,
    //   transaction_id: this.transactionId,
    //   transaction_status: this.transactionStatus,
    //   charges: this.charges,
    //   codes: this.codes,
    //   comments: this.comments,
    //   links: this.links,
    //   parties: this.parties,
    //   references: this.references,
    //   created_by: this.createdBy,
    //   updated_by: this.updatedBy,
    //   created_time: this.createdTime,
    //   updated_time: this.updatedTime,
    //   version: this.version
    // }
    // }

  }]);

  return Transaction;
}(_core.AMaaSModel);

exports.default = Transaction;