import ForeignExchangeBase from '../FXBase/fxBase.js'

/**
 * Class representing FX
 * @memberof module:assets
 * @extends module:assets.ForeignExchangeBase
 */
class NonDeliverableForward extends ForeignExchangeBase {
  /**
   * Construct a new Non Deliverable Forward instance
   * @param {object} params - NonDeliverableForward creation options:
   * @param {number} params.assetId - ID of the Non Deliverable Forward __(required)__
   * @param {string} [params.assetClass=ForeignExchange] - Auto-set to `ForeignExchange` __(read-only)__
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Non Deliverable Forward's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Asset
   * @param {string} [params.description] - Description of the Non Deliverable Forward
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Non Deliverable Forward
   * @param {object} [params.links] - Object of array of Links attached to the Non Deliverable Forward
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Non Deliverable Forward
   * @param {string} [params.updatedBy] - ID of the user that updated the Non Deliverable Forward
   * @param {date} [params.createdTime] - Time that the Non Deliverable Forward was created
   * @param {date} [params.updatedTime] - Time that the Non Deliverable Forward was updated
   * @param {number} [params.version] - Version number
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
      assetId,
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
}

export default NonDeliverableForward
