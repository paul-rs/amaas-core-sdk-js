import { AMaaSModel, Reference } from '../../../core'
import Asset from '../../Asset/asset.js'

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
  constructor({
    assetManagerId,
    fungible,
    assetIssuerId,
    assetId,
    assetClass='Bond',
    assetType='Bond',
    assetStatus='Active',
    countryId,
    venueId,
    maturityDate,
    description='',
    clientId,
    issueDate,
    coupon,
    par,
    references={},
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      assetManagerId,
      fungible,
      assetIssuerId,
      assetId,
      assetClass,
      assetType,
      assetStatus,
      countryId,
      venueId,
      maturityDate,
      description,
      clientId,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _cooupon: { writable: true, enumerable: false },
      coupon: {
        get: function() { return this._coupon },
        set: function(newCoupon) {
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
        }, enumerable: true
      },
      _par: { writable: true, enumerable: false },
      par: {
        get: function() { return this._par },
        set: function(newPar) {
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
        }, enumerable: true
      },
      _defaulted: { writable: true, enumerable: false },
      defaulted: {
        get: function() { return this._defaulted },
        set: function(newDefaulted) {
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
        }, enumerable: true
      }
    })
    this.issueDate = issueDate
    this.coupon = coupon
    this.par = par
  }

  // set coupon(newCoupon) {
  //   switch (newCoupon) {
  //     case 0:
  //       this._coupon = new Decimal(0)
  //       break
  //     case undefined:
  //       this._coupoon = undefined
  //       break
  //     default:
  //       this._coupon = new Decimal(newCoupon)
  //   }
  // }
  //
  // get coupon() {
  //   return this._coupon
  // }

  // set par(newPar) {
  //   switch (newPar) {
  //     case 0:
  //       this._par = new Decimal(0)
  //       break
  //     case undefined:
  //       this._par = undefined
  //       break
  //     default:
  //       this._par = new Decimal(newPar)
  //   }
  // }
  //
  // get par() {
  //   return this._par
  // }
  //
  // set defaulted(newDefaulted) {
  //   switch (newDefaulted) {
  //     case false:
  //       this._defaulted = false
  //       break
  //     case undefined:
  //       this._defaulted = undefined
  //       break
  //     default:
  //       this._defaulted = newDefaulted
  //   }
  // }
  //
  // get defaulted() {
  //   return this._defaulted
  // }


  // toJSON() {
  //   return Object.assign({}, {
  //     par: this.par,
  //     coupon: this.coupon,
  //     defaulted: this.defaulted
  //   }, this)
    // return {
    //   asset_manager_id: this.assetManagerId,
    //   fungible: this.fungible,
    //   asset_issuer_id: this.assetIssuerId,
    //   asset_id: this.assetId,
    //   asset_class: this.assetClass,
    //   asset_type: this.assetType,
    //   asset_status: this.assetStatus,
    //   country_id: this.countryId,
    //   venue_id: this.venueId,
    //   maturity_date: this.maturityDate,
    //   description: this.description,
    //   client_id: this.clientId,
    //   issue_date: this.issueDate,
    //   coupon: this.coupon,
    //   par: this.par,
    //   references: this.references,
    //   created_by: this.createdBy,
    //   updated_by: this.updatedBy,
    //   created_time: this.createdTime,
    //   updated_time: this.updatedTime,
    //   version: this.version
    // }
  // }

}

export default BondBase
