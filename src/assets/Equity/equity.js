import Asset from '../Asset/asset.js'

/**
 * Class representing an Equity
 * @memberof module:assets
 * @extends module:assets.Asset
 */
class Equity extends Asset {
  /**
   * Construct a new Equity instance
   * @param {object} params - Equity creation options:
   * @param {number} params.assetManagerId - ID of Equity's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Equity __(required)__
   * @param {string} [params.assetClass=Equity] - Class of the Equity (a subclass of Equity may define its own assetClass)
   * @param {string} [params.assetType] - Type of the Equity. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` for Equity __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Equity's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Equity
   * @param {string} [params.countryId] - ID of Equity's country
   * @param {string} [params.venueId] - ID of Equity's venue if applicable
   * @param {string} [params.currency] - Equity currency (e.g. USD, SGD)
   * @param {string} [params.issueDate] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Equity
   * @param {string} [params.displayName] - Display name of the Equity
   * @param {boolean} [params.rollPrice=true] - Whether to roll the price for the Equity
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} [params.shareClass=Common] - Share Class
   * @param {object} [params.comments] - Object of Comments attached to the Equity
   * @param {object} [params.links] - Object of array of Links attached to the Equity
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Equity. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Equity
   * @param {string} [params.updatedBy] - ID of the user that updated the Equity
   * @param {date} [params.createdTime] - Time that the Equity was created
   * @param {date} [params.updatedTime] - Time that the Equity was updated
   * @param {number} [params.version] - Version number of the Equity
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='Equity',
    fungible,
    assetIssuerId,
    assetStatus='Active',
    countryId,
    venueId,
    currency,
    issueDate,
    description='',
    displayName,
    rollPrice,
    clientId,
    shareClass='Common',
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
      fungible: true,
      assetIssuerId,
      assetStatus,
      countryId,
      venueId,
      currency,
      issueDate,
      description,
      displayName,
      rollPrice,
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
    this.shareClass = shareClass
  }
}

export default Equity
