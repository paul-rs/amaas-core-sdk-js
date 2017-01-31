import { AMaaSModel, Reference } from '../core'
import { Asset } from './'

import Decimal from 'decimal.js'

/** @class */
class BondBase extends Asset {
  /**
   * Constructs new Base Bond class
   * @param {object} anonymous: creation options
   * @param {string} assetManagerId: ID of Bond's Asset Manager
   * @param {string} assetId: ID of asset
   * @param {date} maturityDate: Date of Bond's maturity
   * @param {decimal} coupon: The Bond's coupon (represented as a fraction of 1 i.e. 0.05 = 5%)
   * @param {decimal} par: The Bond's par
   * @param {string} assetIssuerId: ID of the Bond Issuer
   * @param {string} assetStatus: Status of the Bond
   * @param {string} description: Description of the Bond
   * @param {string} countryId: ID of the Bond's origin country
   * @param {string} venueId: ID of the Bond's venue
   * @param {string} clientId: ID of the client
   * @param {date} issueDate: Date of Bond issue
   * @param {object} references: Object of references for the Bond
   * @param {object} args: Other misc arguments
   * @param {object} coreData: Asset constructor options
  */
  constructor({ assetManagerId, assetId, maturityDate, coupon, par, assetIssuerId, assetStatus, description, countryId, venueId, clientId, issueDate, references }, args, coreData) {
    const assetConstruct = Object.assign({}, {
      assetManagerId,
      assetId,
      fungible: true,
      assetIssuerId,
      assetStatus,
      description,
      countryId,
      venueId,
      maturityDate,
      references,
      clientId
    })
    super(assetConstruct, args, coreData)
    this.assetClass = 'Bond'
    this.issueDate = issueDate
    this.coupon = coupon
    this.par = par
  }

  set coupon(newCoupon) {
    if (newCoupon == 0) {
      this._coupon = new Decimal(0)
    } else if (!newCoupon) {
      this._coupon = undefined
    } else {
      this._coupon = new Decimal(newCoupon)
    }
  }

  get coupon() {
    return this._coupon
  }

  set par(newPar) {
    if (newPar == 0) {
      this._par = new Decimal(0)
    } else if (!newPar) {
      this._par = undefined
    } else {
      this._par = new Decimal(newPar)
    }
  }

  get par() {
    return this._par
  }

  set defaulted(newDefaulted) {
    if (newDefaulted == false) {
      this._defaulted = false
    } else if (!newDefaulted) {
      this._defaulted = undefined
    } else {
      this._defaulted = newDefaulted
    }
  }

  get defaulted() {
    return this._defaulted
  }
}

export default BondBase
