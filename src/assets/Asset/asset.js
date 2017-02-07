import { AMaaSModel, Reference } from '../../core'

/**
 * Class representing an Asset
 * @extends AMaaSModel
 */
class Asset extends AMaaSModel {
  /**
   * Construct a new Asset object
   * @param {object} params - Asset creation options
   * @param {integer} params.assetManagerId - ID of Asset's Asset Manager
   * @param {bool} params.fungible - Whether this asset is fungible
   * @param {string} params.assetIssuerId - ID of the Asset's issuer
   * @param {integer} params.assetId - ID of the Asset
   * @param {string} params.assetClass - Class of the Asset
   * @param {string} params.assetStatus - Status of the Asset (e.g. 'Active')
   * @param {string} params.countryId - ID of Asset's country
   * @param {string} params.venueId - ID of Asset's venue (if applicable)
   * @param {date} params.maturityDate - Date of the Asset's maturity (if applicable)
   * @param {string} params.description - Description of the asset
   * @param {object} params.references - Object of References associated with this Asset
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new Link)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing Link)
   * @param {date} params.createdTime - Time that the Link was created (required if creating new Link)
   * @param {date} params.updatedTime - Time that the Link was updated (required if amending existing Link)
   * @param {number} params.version - Version number of the Link
  */
  constructor({ assetManagerId, fungible, assetIssuerId, assetId, assetClass='Asset', assetType='Asset', assetStatus='Active', countryId, venueId, maturityDate, description='', references={} }, createdBy, updatedBy, createdTime, updatedTime, version) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.assetManagerId = assetManagerId
    this.assetId = assetId
    this.assetClass = assetClass
    this.assetType = assetType
    this.fungible = fungible
    this.assetIssuerId = assetIssuerId
    this.assetStatus = assetStatus
    this.countryId = countryId
    this.venueId = venueId
    this.maturityDate = maturityDate
    this.description = description
    this.references = references
    this.references.AMaaS = new Reference({ referenceValue: assetId })
  }
}

export default Asset
