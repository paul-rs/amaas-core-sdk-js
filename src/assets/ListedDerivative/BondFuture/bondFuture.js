import { Decimal } from 'decimal.js'

import Future from '../Future/future'

class BondFuture extends Future {
  constructor({
    assetManagerId,
    assetId,
    assetClass='BondFuture',
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

    cheapestToDeliverId,
    underlyingBondTenor,
    underlyingBondCoupon,

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
      _underlyingBondCoupon: { writable: true, enumerable: false },
      underlyingBondCoupon: {
        get: () => this._underlyingBondCoupon,
        set: (newCoupon) => {
          if (!newCoupon) {
            this._underlyingBondCoupon = new Decimal(0)
          } else {
            this._underlyingBondCoupon = new Decimal(newCoupon)
          }
        },
        enumerable: true
      }
    })
    this.cheapestToDeliverId = cheapestToDeliverId
    this.underlyingBondTenor = underlyingBondTenor
    this.underlyingBondCoupon = underlyingBondCoupon
  }

  getUnderlyingAssetId() {
    return this.cheapestToDeliverId
  }
}

export default BondFuture
