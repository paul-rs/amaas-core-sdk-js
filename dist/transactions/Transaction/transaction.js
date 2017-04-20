'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decimal = require('decimal.js');

var _core = require('../../core');

var _children = require('../../children');

var _enums = require('../enums');

var types = _interopRequireWildcard(_enums);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
   * @param {string} params.transactionAction - Transaction action e.g. BUY, SELL etc.
   * @param {string} params.assetId - ID of the asset being transacted
   * @param {number} params.quantity - Quantity being transacted
   * @param {date} params.transactionDate - Date of transactionDate
   * @param {date} params.settlementDate - Date of settlement e.g. T+2 where T = transactionDate
   * @param {decimal} params.price - price of Asset being transacted
   * @param {string} params.transactionCurrency - Currency that the Transaction takes place in
   * @param {string} params.settlementCurrency - Currency that the Transaction is settled in
   * @param {*} params.asset - *
   * @param {date} params.executionTime - Time that the Transaction was executed
   * @param {Asset} params.transactionType - Type of Transaction e.g. Trade, Allocation
   * @param {string} params.transactionId - ID of the Transaction
   * @param {*} params.transactionStatus - *
   * @param {object} params.charges - Object of all charges (Charge class)
   * @param {object} params.codes - Object of all codes (Code class)
   * @param {object} params.comments - Object of all comments (Comment class)
   * @param {object} params.links - Object of all links (Link class)
   * @param {object} params.parties - Object of all parties as a Transaction child (PartyChild class)
   * @param {object} params.references - *
   * @param {*} params.postings - *
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
        executionTime = _ref.executionTime,
        _ref$transactionType = _ref.transactionType,
        transactionType = _ref$transactionType === undefined ? 'Trade' : _ref$transactionType,
        transactionId = _ref.transactionId,
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
        references = _ref.references,
        postings = _ref.postings,
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

          _this._quantity = new _decimal.Decimal(newQuantity);
        }, enumerable: true
      },
      _price: { writable: true, enumerable: false },
      price: {
        get: function get() {
          return _this._price;
        },
        set: function set() {
          var newPrice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          _this._price = new _decimal.Decimal(newPrice);
        }, enumerable: true
      },
      _grossSettlement: { writable: true, enumerable: false },
      grossSettlement: {
        get: function get() {
          return _this._grossSettlement ? _this._grossSettlement : _this.price.times(_this.quantity);
        },
        set: function set() {
          var newGrossSettlement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          _this._grossSettlement = new _decimal.Decimal(newGrossSettlement);
        }, enumerable: true
      },
      _netSettlement: { writable: true, enumerable: false },
      netSettlement: {
        get: function get() {
          return _this._netSettlement ? _this._netSettlement : _this.grossSettlement.minus(_this.chargesNetEffect());
        },
        set: function set() {
          var newNetSettlement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          _this._netSettlement = new _decimal.Decimal(newNetSettlement);
        }, enumerable: true
      },
      _transactionAction: { writable: true, enumerable: false },
      transactionAction: {
        get: function get() {
          return _this._transactionAction;
        },
        set: function set(newTransactionAction) {
          if (newTransactionAction) {
            if (types.TRANSACTION_ACTIONS.indexOf(newTransactionAction) === -1) {
              throw new Error('Invalid Transaction Action: ' + newTransactionAction);
            }
            _this._transactionAction = newTransactionAction;
          }
        },
        enumerable: true
      },
      _transactionStatus: { writable: true, enumerable: false },
      transactionStatus: {
        get: function get() {
          return _this._transactionStatus;
        },
        set: function set(newTransactionStatus) {
          if (newTransactionStatus) {
            if (types.TRANSACTION_STATUSES.indexOf(newTransactionStatus) === -1) {
              throw new Error('Invalid Transaction Status: ' + newTransactionStatus);
            }
            _this._transactionStatus = newTransactionStatus;
          }
        },
        enumerable: true
      },
      _transactionType: { writable: true, enumerable: false },
      transactionType: {
        get: function get() {
          return _this._transactionType;
        },
        set: function set(newTransactionType) {
          if (newTransactionType) {
            if (types.TRANSACTION_TYPES.indexOf(newTransactionType) === -1) {
              throw new Error('Invalid Transaction Type: ' + newTransactionType);
            }
            _this._transactionType = newTransactionType;
          }
        },
        enumerable: true
      },
      _references: { writable: true, enumerable: false },
      references: {
        get: function get() {
          return _this._references;
        },
        set: function set(newReferences) {
          var AMaaSRef = { AMaaS: new _children.Reference({ referenceValue: _this.transactionId }) };
          if (!newReferences) {
            _this._references = AMaaSRef;
          } else {
            var newRefs = {};
            for (var ref in newReferences) {
              if (newReferences.hasOwnProperty(ref)) {
                newRefs[ref] = new _children.Reference(Object.assign({}, newReferences[ref]));
              }
            }
            _this._references = _extends({
              AMaaS: new _children.Reference({ referenceValue: _this.transactionId })
            }, newRefs);
          }
        },
        enumerable: true
      },
      _charges: { writable: true, enumerable: false },
      charges: {
        get: function get() {
          return _this._charges;
        },
        set: function set(newCharges) {
          if (newCharges) {
            var _charges = {};
            for (var ref in newCharges) {
              if (newCharges.hasOwnProperty(ref)) {
                _charges[ref] = new _children.Charge(Object.assign({}, newCharges[ref]));
              }
            }
            _this._charges = _charges;
          }
        },
        enumerable: true
      },
      _codes: { writable: true, enumerable: false },
      codes: {
        get: function get() {
          return _this._codes;
        },
        set: function set(newCodes) {
          if (newCodes) {
            var _codes = {};
            for (var ref in newCodes) {
              if (newCodes.hasOwnProperty(ref)) {
                _codes[ref] = new _children.Code(Object.assign({}, newCodes[ref]));
              }
            }
            _this._codes = _codes;
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
            for (var name in newLinks) {
              // TODO: Remove this when the API returns Arrays for all Links
              if (newLinks[name] instanceof Array) {
                _links[name] = newLinks[name].map(function (link) {
                  return new _children.Link(link);
                });
              } else {
                console.warn('All Links should be Arrays: if you are seeing this message then a non-Array link has been encountered and it will be skipped for now');
              }
            }
            _this._links = _links;
          }
        },
        enumerable: true
      },
      _parties: { writable: true, enumerable: false },
      parties: {
        get: function get() {
          return _this._parties;
        },
        set: function set(newParties) {
          if (newParties) {
            var _parties = {};
            for (var ref in newParties) {
              if (newParties.hasOwnProperty(ref)) {
                _parties[ref] = new _children.Party(Object.assign({}, newParties[ref]));
              }
            }
            _this._parties = _parties;
          }
        },
        enumerable: true
      }
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
    _this.postings = [];
    _this.asset = asset;
    return _this;
  }

  _createClass(Transaction, [{
    key: 'chargesNetEffect',
    value: function chargesNetEffect() {
      if (Object.keys(this.charges).length == 0) {
        return new _decimal.Decimal(0);
      }
      var netCharges = new _decimal.Decimal(0);
      for (var chargeType in this.charges) {
        if (this.charges[chargeType].active && this.charges[chargeType].netAffecting) {
          netCharges = netCharges.plus(this.charges[chargeType].chargeValue);
        }
      }
      return netCharges;
    }
  }, {
    key: 'upsertCode',
    value: function upsertCode(type, code) {
      this.codes[type] = new _children.Code(Object.assign({}, code));
    }
  }, {
    key: 'upsertLinkSet',
    value: function upsertLinkSet(type, links) {
      if (links) {
        var classLinks = links.map(function (link) {
          return new _children.Link(Object.assign({}, link));
        });
        this.links[type] = classLinks;
      }
    }
  }, {
    key: 'addLink',
    value: function addLink(type, link) {
      if (link) {
        this.links[type].push(new _children.Link(Object.assign({}, link)));
      }
    }
  }, {
    key: 'removeLink',
    value: function removeLink(type, linkedId) {
      if (!this.links[type]) {
        throw new Error('Link Key Not Found: ' + type);
      }
      var existingLinkCount = this.links[type].length;
      if (linkedId) {
        var filtered = this.links[type].filter(function (link) {
          return link.linkedId !== linkedId;
        });
        if (filtered.length === existingLinkCount) {
          throw new Error('Linked Transaction ID Not Found: ' + linkedId);
        }
        this.links[type] = filtered;
      }
    }
  }]);

  return Transaction;
}(_core.AMaaSModel);

exports.default = Transaction;