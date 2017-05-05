import Synthetic from '../Synthetic/synthetic.js'

/**
 * Class representing a Synthetic From Book
 * @memberof module:assets
 * @extends module:assets.Synthetic
 */
class SyntheticFromBook extends Synthetic {
  /**
   * Construct a new Synthetic From Book instance (an Asset whose value is based on the value of the assets in a referenced Book)
   * @param {object} params - SyntheticFromBook creation options:
   * @param {number} params.assetManagerId - ID of Synthetic's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Synthetic __(required)__
   * @param {string} [params.assetClass=Synthetic] - Auto-set to `Synthetic` __(read-only)__
   * @param {boolean} params.fungible=true - Whether this Synthetic is fungible __(required)__
   * @param {string} [params.assetIssuerId] - ID of the Synthetic's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Synthetic
   * @param {string} [params.countryId] - ID of Synthetic's country
   * @param {string} [params.venueId] - ID of Synthetic's venue if applicable
   * @param {string} [params.currency] - Synthetic currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Asset
   * @param {string} params.bookId - Underlying Book ID __(required)__
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Synthetic
   * @param {object} [params.links] - Object of array of Links attached to the Synthetic
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Synthetic. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Synthetic
   * @param {string} [params.updatedBy] - ID of the user that updated the Synthetic
   * @param {date} [params.createdTime] - Time that the Synthetic was created
   * @param {date} [params.updatedTime] - Time that the Synthetic was updated
   * @param {number} [params.version] - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    fungible,
    assetIssuerId,
    assetStatus='Active',
    countryId,
    venueId,
    currency,
    issueDate,
    maturityDate,
    description='',
    bookId,
    clientId,
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
    this.bookId = bookId
  }
}

export default SyntheticFromBook
