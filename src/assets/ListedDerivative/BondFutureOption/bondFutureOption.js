import { Decimal } from 'decimal.js'

import Future from '../Future/future'
import { OPTION_STYLES, OPTION_TYPES } from '../../enums.js'

class BondFutureOption extends Future {
  constructor({
    assetManagerId,
    assetId,
    assetClass='BondFutureOption',
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
    optionType,
    optionStyle,
    strike,
    // premium??
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
    })
    Object.defineProperties(this, {
      _optionType: { writable: true, enumerable: false },
      optionType: {
        get: () => this._optionType,
        set: (newOptionType) => {
          if (newOptionType) {
            if (OPTION_TYPES.indexOf(newOptionType) === -1) {
              throw new Error(`Invalid Option Type: ${newOptionType}`)
            }
            this._optionType = newOptionType
          }
        },
        enumerable: true
      },
      _optionStyle: { writable: true, enumerable: false },
      optionStyle: {
        get: () => this._optionStyle,
        set: (newOptionStyle) => {
          if (newOptionStyle) {
            if (OPTION_STYLES.indexOf(newOptionStyle) === -1) {
              throw new Error(`Invalid Option Style: ${newOptionStyle}`)
            }
            this._optionStyle = newOptionStyle
          }
        },
        enumerable: true
      },
      _strike: { writable: true, enumerable: false },
      strike: {
        get: () => this._strike,
        set: (newStrike) => {
          if (!newStrike) {
            this._strike = new Decimal(0)
          } else {
            this._strike = new Decimal(newStrike)
          }
        },
        enumerable: true
      }
    })
    this.optionType = optionType
    this.strike = strike
    this.optionStyle = optionStyle
    // Should this have a premium?
  }
}

export default BondFutureOption
