'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TRANSACTION_TYPES = exports.TRANSACTION_TYPES = ['Allocation', 'Block', 'Cashflow', 'Coupon', 'Dividend', 'Exercise', 'Expiry', 'Payment', 'Journal', 'Maturity', 'Net', 'Novation', 'Split', 'Trade', 'Transfer'];
var TRANSACTION_INVESTOR_ACTIONS = exports.TRANSACTION_INVESTOR_ACTIONS = ['Subscription', 'Redemption'];
var TRANSACTION_LIFECYCLE_ACTIONS = exports.TRANSACTION_LIFECYCLE_ACTIONS = ['Acquire', 'Remove'];
var TRANSACTION_ACTIONS = exports.TRANSACTION_ACTIONS = ['Buy', 'Sell', 'Short Sell', 'Deliver', 'Receive'].concat(TRANSACTION_INVESTOR_ACTIONS, TRANSACTION_LIFECYCLE_ACTIONS);
var TRANSACTION_CANCEL_STATUSES = exports.TRANSACTION_CANCEL_STATUSES = ['Cancelled', 'Netted', 'Novated'];
var TRANSACTION_STATUSES = exports.TRANSACTION_STATUSES = ['New', 'Amended', 'Superseded'].concat(TRANSACTION_CANCEL_STATUSES);