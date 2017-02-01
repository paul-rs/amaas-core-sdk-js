import { AMaaSModel, Reference } from '../../core'

/** @class */
class Asset extends AMaaSModel {
  /**
   * @param {object} anonymous: creation options
   * @param {object} additionalDict: *
   * @param {integer} assetManagerId: ID of Asset's Asset Manager
   * @param {string} assetId: ID of this asset
   * @param {string} assetClass: *
   * @param {string} assetType: *
   * @param {bool} fungible: Whether the asset is fungible
   * @param {string} assetIssuerId: ID of the asset issuer
   * @param {string} assetStatus: Status of the asset (e.g. ???)
   * @param {string} countryId: ID of the asset's country
   * @param {string} venueId: ID of the asset's venue
   * @param {date} maturityDate: date of the asset's maturity
   * @param {string} description: Description of the asset
   * @param {object} references: *
   * @param {object} references.AMaaS: Internal reference
  */
  constructor({ assetManagerId, fungible, assetIssuerId, assetId, assetClass, assetStatus='Active', countryId, venueId, maturityDate, description='', references={} }, args, coreData) {
    super(coreData, args)
    this.assetManagerId = assetManagerId
    this.assetId = assetId
    this.assetClass = assetClass || 'Asset'
    this.assetType = this.name
    this.fungible = fungible
    this.assetIssuerId = assetIssuerId
    this.assetStatus = assetStatus
    this.countryId = countryId
    this.venueId = venueId
    this.maturityDate = maturityDate
    this.description = description
    this.references = references
    this.references.AMaaS = new Reference({ referenceValue: assetId }, null, {})
  }
}

export default Asset
