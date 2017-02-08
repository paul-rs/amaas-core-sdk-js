import { AMaaSModel, Reference } from '../../core'
import { Asset } from '../'

import Decimal from 'decimal.js'

/**
 * Class representing a Base Bond
 * @extends Asset
 */
class BondBase extends Asset {
  /**
   * Construct new Base Bond class
   * @param {object} params - BondBase creation options
   * @param {string} params.assetManagerId - ID of Bond's Asset Manager
   * @param {string} params.assetId - ID of asset
   * @param {date} params.maturityDate - Date of Bond's maturity
   * @param {decimal} params.coupon - The Bond's coupon (represented as a fraction of 1 i.e. 0.05 = 5%)
   * @param {decimal} params.par - The Bond's par
   * @param {string} params.assetIssuerId - ID of the Bond Issuer
   * @param {string} params.assetStatus - Status of the Bond
   * @param {string} params.description - Description of the Bond
   * @param {string} params.countryId - ID of the Bond's origin country
   * @param {string} params.venueId - ID of the Bond's venue
   * @param {string} params.clientId - ID of the client
   * @param {date} params.issueDate - Date of Bond issue
   * @param {object} params.references - Object of references for the Bond
  */
  constructor({ assetManagerId, fungible, assetIssuerId, assetId, assetClass='Bond', assetStatus, countryId, venueId, maturityDate, description='', references={}, coupon, par, clientId, issueDate, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      assetManagerId,
      fungible,
      assetIssuerId,
      assetId,
      assetClass,
      assetStatus,
      countryId,
      venueId,
      maturityDate,
      description,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.clientId = clientId
    this.issueDate = issueDate
    this.coupon = coupon
    this.par = par
  }

  set coupon(newCoupon) {
    switch (newCoupon) {
      case 0:
        this._coupon = new Decimal(0)
        break
      case undefined:
        this._coupoon = undefined
        break
      default:
        this._coupon = new Decimal(newCoupon)
    }
  }

  get coupon() {
    return this._coupon
  }

  set par(newPar) {
    switch (newPar) {
      case 0:
        this._par = new Decimal(0)
        break
      case undefined:
        this._par = undefined
        break
      default:
        this._par = new Decimal(newPar)
    }
  }

  get par() {
    return this._par
  }

  set defaulted(newDefaulted) {
    switch (newDefaulted) {
      case false:
        this._defaulted = false
        break
      case undefined:
        this._defaulted = undefined
        break
      default:
        this._defaulted = newDefaulted
    }
  }

  get defaulted() {
    return this._defaulted
  }
}

export default BondBase
