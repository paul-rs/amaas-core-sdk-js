import { AMaaSModel } from '../core/index.js'
const Decimal = require('decimal.js')

/** @class */
class Transaction extends AMaaSModel {
  /**
   * Constructs new Transaction object
   * @param {object} transactionData: creation options
   * @param {string} transactionData.assetManagerId: ID of the Transaction's Asset Manager
   * @param {string} transactionData.assetBookId: ID of the Transaction's book
   * @param {string} transactionData.counterpartyBookId: ID of the counterparty to this Transaction
   * @param {string} transactionData.transactionAction: Transaction action e.g. BUY/SELL
   * @param {string} transactionData.assetId: ID of the asset being transacted
   * @param {number} transactionData.quantity: Quantity being transacted
   * @param {date} transactionData.transactionDate: Date of transactionDate
   * @param {date} transactionData.settlementDate: Date of settlement e.g. T+2 where T = transactionDate
   * @param {decimal} transactionData.price: price of Asset being transacted
   * @param {string} transactionData.transactionCurrency: Currency that the Transaction takes place in
   * @param {string} transactionData.settlementCurrency: Currency that the Transaction is settled in
   * @param {Asset} transactionData.transactionType: Type of Transaction e.g. Trade, Allocation
   * @param {*} transactionData.transactionStatus: *
   * @param {*} transactionData.version: *
   * @param {date} transactionData.executionTime: Time that the Transaction was executed
   * @param {string} transactionData.transactionId: ID of the Transaction
   * @param {object} transactionData.charges: *
   * @param {object} transactionData.codes: *
   * @param {object} transactionData.references: *
   * @param {*} transactionData.postings: *
   * @param {*} asset: *
   * @param {object} transactionData.coreData: AMaaSModel constructor options
  */
  constructor(transactionData, coreData) {
    super(coreData)
    Object.assign(this, {
      transactionType: 'Trade',
      transactionStatus: 'New',
      version: 1,
      charges: {},
      codes: {},
      references: {}
    }, transactionData)
  }

  set quantity(newQuantity) {
    this.quantity = new Decimal(newQuantity)
  }

  set price(newPrice) {
    this.price = new Decimal(newPrice)
  }

  set grossSettlement(newGrossSettlement) {
    this.grossSettlement = new Decimal(newGrossSettlement)
  }

  get grossSettlement() {
    return this.grossSettlement ? this.grossSettlement : this.price.times(this.quantity)
  }

  set netSettlement(newNetSettlement) {
    this.netSettlement = new Decimal(newNetSettlement)
  }

  get netSettlement() {
    return this.netSettlement ? this.netSettlement : this.grossSettlement.minus(this.chargesNetEffect)
  }
}

export default Transaction
