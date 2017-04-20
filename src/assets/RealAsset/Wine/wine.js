import RealAsset from '../RealAsset/realAsset'

/**
 * Class representing Wine
 * @memberof module:Assets.Class
 * @extends module:Assets.Class.RealAsset
 */
class Wine extends RealAsset {
  /**
   * Construct a new Wine instance
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
   * @param {object} params.comments - Object of Comments attached to the Asset
   * @param {object} params.links - Object of array of Links attached to the Asset
   * @param {object} params.references - Object of References associated with this Asset
   * @param {object} params.clientAdditional - Object of custom properties for creating a Custom Asset (set in the Custom Asset class)
   * @param {string} params.createdBy - ID of the user that created the Asset
   * @param {string} params.updatedBy - ID of the user that updated the Asset
   * @param {date} params.createdTime - Time that the Asset was created
   * @param {date} params.updatedTime - Time that the Asset was updated
   * @param {number} params.version - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='Wine',
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

    year,
    producer,
    region,
    appellation,
    classification,
    color,
    bottleSize,
    bottleInCellar,
    bottleLocation,
    storageCost,
    ratingType,
    ratingValue,
    packingType,
    toDrinkStart,
    toDrinkEnd,

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
    // TODO: Write the getter and setters once decided how the dates will be represented
    this.year = year
    this.producer = producer
    this.region = region
    this.appellation = appellation
    this.classification = classification
    this.color = color
    this.bottleSize = bottleSize
    this.bottleInCellar = bottleInCellar
    this.bottleLocation = bottleLocation
    this.storageCost = storageCost
    this.ratingType = ratingType
    this.ratingValue = ratingValue
    this.packingType = packingType
    this.toDrinkStart = toDrinkStart
    this.toDrinkEnd = toDrinkEnd
  }
}

export default Wine
