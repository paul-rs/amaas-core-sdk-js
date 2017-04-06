import Decimal from 'decimal.js'
import { AMaaSModel } from '../../core'

class Position extends AMaaSModel {

  constructor({
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version,
    assetManagerId,
    assetBookId,
    assetId,
    quantity,
    validFrom,
    internalId,
    validTo,
    clientId,
    accountingType,
    accountId
  }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.assetManagerId = assetManagerId
    this.assetBookId = assetBookId
    this.assetId = assetId
    this.quantity = quantity
    this.validFrom = validFrom
    this.internalId = internalId
    this.validTo = validTo
    this.clientId = clientId
    this.accountingType = accountingType
    this.accountId = accountId
  }

  set quantity(newQuantity) {
    this._quantity = new Decimal(newQuantity)
  }

  get quantity() {
    return this._quantity
  }

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
}

export default Position
