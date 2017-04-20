import { Decimal } from 'decimal.js'

import Future from '../Future/future'

/**
 * Class representing a Bond Future
 * @memberof module:Assets
 * @extends module:Assets.Future
 */
class BondFuture extends Future {
  /**
   * Construct a new Bond Future instance
   * @param {object} params - Asset creation options
   * @param {integer} params.assetManagerId - ID of Asset's Asset Manager (required)
   * @param {integer} params.assetId - ID of the Asset (required)
   * @param {string} params.assetClass - Class of the Asset
   * @param {bool} params.fungible - Whether this Asset is fungible (required)
   * @param {string} params.assetIssuerId - ID of the Asset's issuer
   * @param {string} params.assetStatus - Status of the Asset (e.g. 'Active')
   * @param {string} params.countryId - ID of Asset's country
   * @param {string} params.venueId - ID of Asset's venue if applicable
   * @param {string} params.currency - Asset currency (e.g. USD, SGD)
   * @param {string} params.issueDate - Issue date if applicable (YYYY-MM-DD)
   * @param {string} params.maturityDate - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} params.description - Description of the Asset
   * @param {string} params.clientId - ID of the client to which the Asset belongs
   * @param {string} params.settlementType - Settlement Type (Physical, Cash)
   * @param {number} params.contractSize - Contract Size
   * @param {number} params.pointValue - ???
   * @param {number} params.tickSize -???
   * @param {number} params.quoteUnit - ???
   * @param {string} params.underlyingAssetId - ID of the underlying Asset
   * @param {string} params.expiryDate - Date of the contract's expiry (YYYY-MM-DD)
   * @param {string} params.cheapestToDeliverId - ???
   * @param {string} params.underlyingBondTenor - ???
   * @param {number} params.underlyingBondCoupon - Coupon of the underlying Bond
   * @param {object} params.comments - Object of Comments attached to the Asset
   * @param {object} params.links - Object of array of Links attached to the Asset
   * @param {object} params.references - Object of References associated with this Asset
   * @param {string} params.createdBy - ID of the user that created the Bond Future
   * @param {string} params.updatedBy - ID of the user that updated the Bond Future
   * @param {date} params.createdTime - Time that the Bond Future was created
   * @param {date} params.updatedTime - Time that the Bond Future was updated
   * @param {number} params.version - Version number of the Bond Future
  */
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
