import { AMaaSModel } from '../../core'
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
   * @param {object} transactionData.charges: Object of all charges (Charge class)
   * @param {object} transactionData.codes: Object of all codes (Code class)
   * @param {object} transactionData.references: *
   * @param {*} transactionData.postings: *
   * @param {*} asset: *
   * @param {object} transactionData.coreData: AMaaSModel constructor options
  */
  constructor(transactionData, coreData) {
    super(coreData)
    Object.assign(this, transactionData)
    this.transactionType = this.transactionType ? this.transactionType : 'Trade'
    this.transactionStatus = this.transactionStatus ? this.transactionStatus : 'New'
    this.version = this.version ? this.version : 1
  }

  set quantity(newQuantity) {
    this._quantity = new Decimal(newQuantity)
  }

  get quantity() {
    return this._quantity
  }

  set price(newPrice) {
    this._price = new Decimal(newPrice)
  }

  get price() {
    return this._price
  }

  set grossSettlement(newGrossSettlement) {
    this._grossSettlement = new Decimal(newGrossSettlement)
  }

  get grossSettlement() {
    return this._grossSettlement ? this._grossSettlement : this.price.times(this.quantity)
  }

  set netSettlement(newNetSettlement) {
    this._netSettlement = new Decimal(newNetSettlement)
  }

  get netSettlement() {
    return this._netSettlement ? this._netSettlement : this.grossSettlement.minus(this.chargesNetEffect)
  }

  chargesNetEffect() {
    let netCharges = new Decimal(0);
    for (let chargeType in this.charges) {
      if (this.charges[chargeType].active && this.charges[chargeType].netAffecting) {
        netCharges = netCharges.plus(this.charges[chargeType].chargeValue)
      }
    }
    return netCharges
  }
}

export default Transaction
