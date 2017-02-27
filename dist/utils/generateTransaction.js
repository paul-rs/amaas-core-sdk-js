'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateCommon = generateCommon;
exports.generateTransaction = generateTransaction;

var _transactions = require('../transactions');

var _Code = require('../transactions/Code/Code.js');

var _Code2 = _interopRequireDefault(_Code);

var _Charge = require('../transactions/Charge/Charge.js');

var _Charge2 = _interopRequireDefault(_Charge);

var _core = require('../core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Decimal = require('decimal.js');

var CHARGE_TYPES = ['TAX', 'COMMISSION'];
var CODE_TYPES = ['Settle Code', 'Client Classifier'];
var REFERENCE_TYPES = ['External'];

var randInt = function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var addDays = function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// export const generateCommon = (data) => {
function generateCommon(data) {
  var common = void 0;

  if (!data.price || data.price === 0) {
    data.price = new Decimal(0);
  } else {
    data.price = new Decimal(data.price);
  }

  if (!data.quantity || data.quantity === 0) {
    data.quantity = new Decimal(0);
  } else {
    data.quantity = new Decimal(data.quantity);
  }

  var defaults = {
    assetManagerId: randInt(1, 1000),
    assetBookId: randInt(1, 1000),
    counterpartyBookId: randInt(1, 1000),
    assetId: randInt(1, 1000).toString(),
    transactionDate: new Date(),
    transactionCurrency: 'SGD',
    settlementCurrency: 'SGD'
  };

  common = Object.assign({}, defaults, data);
  Object.assign(common, { settlementDate: addDays(common.transactionDate, 2) });

  if (common.quantity.toFixed(5) >= 0) {
    Object.assign(common, { transactionAction: 'Buy' });
  } else {
    Object.assign(common, { transactionAction: 'Short Sell' });
  }

  return common;
}

function generateTransaction(data) {
  var commonForTrans = {
    assetManagerId: data.assetManagerId,
    assetBookId: data.assetBookId,
    counterpartyBookId: data.counterpartyBookId,
    assetId: data.assetId,
    quantity: data.quantity,
    price: data.price,
    transactionDate: data.transactionDate,
    transactionId: data.transactionId,
    netAffecting: data.netAffecting === false ? false : true
  };
  var common = generateCommon(commonForTrans);
  Object.assign(common, data);
  var transaction = new _transactions.Transaction(common, null, {});
  var charges = {};
  var codes = {};
  var references = {};
  CHARGE_TYPES.forEach(function (type) {
    charges[type] = { chargeValue: new Decimal(randInt(1, 1000)), currency: 'SGD', netAffecting: common.netAffecting };
  });
  CODE_TYPES.forEach(function (type) {
    codes[type] = new _Code2.default({ codeValue: 'randomCode' }, null, {});
  });
  REFERENCE_TYPES.forEach(function (type) {
    references[type] = new _core2.default({ referenceValue: 'randomRef' }, null, {});
  });
  Object.assign(transaction.charges, charges);
  Object.assign(transaction.codes, codes);
  Object.assign(transaction.references, references);
  return transaction;
}