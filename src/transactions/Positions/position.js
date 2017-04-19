import Decimal from 'decimal.js'
import { AMaaSModel } from '../../core'

class Position extends AMaaSModel {

  constructor({
    assetManagerId,
    bookId,
    assetId,
    quantity,
    validFrom,
    internalId,
    validTo,
    clientId,
    accountingType,
    accountId,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version,
  }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _quantity: { writable: true, enumerable: false },
      quantity: {
        get: () => this._quantity,
        set: (newQuantity=0) => {
            this._quantity = new Decimal(newQuantity)
        }, enumerable: true
      }
    })
    this.assetManagerId = assetManagerId
    this.bookId = bookId
    this.assetId = assetId
    this.quantity = quantity
    this.validFrom = validFrom
    this.internalId = internalId
    this.validTo = validTo
    this.clientId = clientId
    this.accountingType = accountingType
    this.accountId = accountId
  }
}

export default Position
