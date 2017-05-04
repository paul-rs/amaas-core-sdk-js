import Asset from '../../Asset/asset.js'

/**
 * Class representing FX (this should never be instantiated directly, use the appropriate subclass instead).
 * Note that creating and editing FXBase subclasses and other public subclasses is a restricted action.
 * @memberof module:assets
 * @extends module:assets.Asset
 */
class FXBase extends Asset {
  /**
   * Construct a new FXBase instance
   * @param {object} params - FXBase creation options:
   * @param {number} [params.assetManagerId=0] - Auto-set to `0`. All FX classes and subclasses are treated as public Assets
   * @param {number} params.assetId - ID of the FXBase __(required)__
   * @param {string} [params.assetClass=ForeignExchange] - Auto-set to `ForeignExchange` __(read-only)__
   * @param {boolean} [params.fungible=true] - Auto-set to `true` for FXBase __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the FXBase's issuer
   * @param {string} [params.assetStatus=Active] - Status of the FXBase
   * @param {string} [params.description] - Description of the FXBase
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the FXBase
   * @param {object} [params.links] - Object of array of Links attached to the FXBase
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the FXBase. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the FXBase
   * @param {string} [params.updatedBy] - ID of the user that updated the FXBase
   * @param {date} [params.createdTime] - Time that the FXBase was created
   * @param {date} [params.updatedTime] - Time that the FXBase was updated
   * @param {number} params.version - Version number
  */
  constructor({
    assetId,
    assetIssuerId,
    assetStatus='Active',
    description='',
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
      assetManagerId: 0,
      assetId,
      assetClass: 'ForeignExchange',
      fungible: true,
      assetIssuerId,
      assetStatus,
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
  }

  getBaseCurrency() {
    return this.assetId.slice(0,3)
  }

  getCounterCurrency() {
    return this.assetId.slice(3,6)
  }
}

export default FXBase
