import Asset from '../Asset/asset.js'

/**
 * Class representing an Currency
 * @memberof module:Assets.Class
 * @extends module:Assets.Class.Asset
 */
class Currency extends Asset {
  /**
   * Construct a new Currency instance
   * @param {object} params - Currency creation options
   * @param {integer} params.assetManagerId - ID of Currency's Asset Manager (required)
   * @param {integer} params.assetId - ID of the Currency (required)
   * @param {string} params.assetClass - Class of the Currency
   * @param {bool} params.fungible - Whether this Currency is fungible (required)
   * @param {string} params.assetIssuerId - ID of the Currency's issuer
   * @param {string} params.assetStatus - Status of the Currency (e.g. 'Active')
   * @param {string} params.countryId - ID of Currency's country
   * @param {string} params.venueId - ID of Currency's venue if applicable
   * @param {string} params.currency - Currency currency (e.g. USD, SGD)
   * @param {string} params.issueDate - Issue date if applicable (YYYY-MM-DD)
   * @param {string} params.maturityDate - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} params.description - Description of the Currency
   * @param {string} params.clientId - ID of the client to which the Currency belongs
   * @param {boolean} params.deliverable - Whether the Currency is deliverable
   * @param {number} params.minorUnitPlaces - Decimal precision of Currency (e.g. 4 for JPY, 2 for USD)
   * @param {object} params.comments - Object of Comments attached to the Currency
   * @param {object} params.links - Object of array of Links attached to the Currency
   * @param {object} params.references - Object of References associated with this Currency
   * @param {string} params.createdBy - ID of the user that created the Asset
   * @param {string} params.updatedBy - ID of the user that updated the Asset
   * @param {date} params.createdTime - Time that the Asset was created
   * @param {date} params.updatedTime - Time that the Asset was updated
   * @param {number} params.version - Version number of the Asset
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='Currency',
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
    deliverable,
    minorUnitPlaces,
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
    this.deliverable = deliverable === false ? false : true // Default to true
    this.minorUnitPlaces = minorUnitPlaces
  }
}

export default Currency
