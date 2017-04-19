import BondBase from '../BondBase/bond.js'

/**
 * @module Assets
 */

/**
 * Class representing a Mortgage Bond
 * @extends BondBase
 */
class BondMortgage extends BondBase {
  /**
   * Construct new Bond instance
   * @param {object} params - BondBase creation options
   * @param {string} params.assetManagerId - ID of Bond's Asset Manager
   * @param {string} params.assetId - ID of asset
   * @param {string} params.assetClass - Class of Asset. This should always be 'Bond'
   * @param {boolean} params.fungible - Whether this Bond is fungible
   * @param {string} params.assetIssuerId - ID of the Bond Issuer
   * @param {string} params.assetStatus - Status of the Bond
   * @param {string} params.countryId - ID of the Bond's origin country
   * @param {string} params.venueId - ID of the Bond's venue
   * @param {string} params.currency - Currency denomination of the Bond
   * @param {string} params.issueDate - The date that the Bond was issued
   * @param {string} params.maturityDate - Date of Bond's maturity
   * @param {string} params.description - Description of the Bond
   * @param {string} params.clientId - ID of the client
   * @param {decimal} params.coupon - The Bond's coupon (represented as a fraction of 1 i.e. 0.05 = 5%)
   * @param {decimal} params.par - The Bond's par
   * @param {string} params.payFrequency - ???
   * @param {boolean} params.defaulted - Whether the issuer has defaulted
   * @param {object} params.comments - Object of comments for the Bond. { name: string: comment: Comment }
   * @param {object} params.links - Object of links for the Bond. { name: string: link: Link[] }
   * @param {object} params.references - Object of references for the Bond
   * @param {string} params.createdBy - ID of the user that created this object
   * @param {string} params.updatedBy - ID of the user that updated this object
   * @param {date} params.createdTime - Time that the Bond was created
   * @param {date} params.updatedTime - Time that the Bond was updated
   * @param {number} params.version - Version number of the Bond
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='Bond',
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
    coupon,
    par,
    payFrequency,
    defaulted,
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
      coupon,
      par,
      payFrequency,
      defaulted,
      comments,
      links,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
  }
}

export default BondMortgage
