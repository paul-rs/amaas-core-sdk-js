import { Decimal } from 'decimal.js'

import ListedDerivative from '../ListedDerivative/listedDerivative'
import { FUTURE_SETTLEMENT_TYPES }  from '../../enums.js'

class Future extends ListedDerivative {
  constructor({
    assetManagerId,
    assetId,
    assetClass='Future',
    fungible,
    assetIssuerId,
    assetStatus='Active',
    countryId,
    venueId,
    currency,
    issueDate,
    maturityDate,
    description='',
    clientId,
    settlementType,
    contractSize,
    pointValue,
    tickSize,
    quoteUnit,
    underlyingAssetId,
    expiryDate,
    comments,
    links,
    references,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      assetManagerId,
      assetId,
      assetClass,
      fungible,
      assetIssuerId,
      assetStatus,
      countryId,
      venueId,
      currency,
      issueDate,
      maturityDate,
      description,
      clientId,
      comments,
      links,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _settlementType: { writable: true, enumerable: false },
      settlementType: {
        get: () => this._settlementType,
        set: (newSettlementType) => {
          if (settlementType) {
            if (FUTURE_SETTLEMENT_TYPES.indexOf(newSettlementType) === -1) {
              throw new Error(`Invalid Settlement Type: ${newSettlementType}`)
            }
            this._settlementType = newSettlementType
          }
        },
        enumerable: true
      },
      _pointValue: { writable: true, enumerable: false },
      pointValue: {
        get: () => this._pointValue,
        set: (newPointValue) => {
          // TODO: This should be replaced with a calculation
          if (newPointValue) {
            this._pointValue = newPointValue
          }
        },
        enumerable: true
      },
      _tickSize: { writable: true, enumerable: false },
      tickSize: {
        get: () => this._tickSize,
        set: (newTickSize) => {
          if (!newTickSize) {
             this._tickSize = new Decimal(0)
          } else {
            this._tickSize = new Decimal(newTickSize)
          }
        },
        enumerable: true
      },
      _contractSize: { writable: true, enumerable: false },
      contractSize: {
        get: () => this._contractSize,
        set: (newContractSize) => {
          if (!newContractSize) {
             this._contractSize = new Decimal(0)
          } else {
            this._contractSize = new Decimal(newContractSize)
          }
        },
        enumerable: true
      },
      _expiryDate: { writable: true, enumerable: false },
      expiryDate: {
        get: () => this._expiryDate,
        set: (newExpiryDate) => {
          if (newExpiryDate) {
            const dArray = newExpiryDate.split('-')
            const date = new Date(dArray[0], dArray[1]-1, dArray[2])
            this._expiryDate = date
          }
        },
        enumerable: true
      }
    })
    this.settlementType = settlementType
    this.contractSize = contractSize
    this.pointValue = pointValue
    this.tickSize = tickSize
    this.quoteUnit = quoteUnit
    this.underlyingAssetId = underlyingAssetId
    this.expiryDate = expiryDate
  }

  getTickValue() {
    return this.tickSize.times(this.contractSize)
  }
}

export default Future
