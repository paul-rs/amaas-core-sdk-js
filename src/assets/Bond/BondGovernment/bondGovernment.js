import BondBase from '../BondBase/bond.js'

class BondGovernment extends BondBase {
  constructor({
    assetManagerId,
    fungible,
    assetIssuerId,
    assetId,
    assetClass='Bond',
    assetType='BondGovernment',
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
      issueDate,
      coupon,
      par,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
  }

  toJSON() {
    return {
      asset_manager_id: this.assetManagerId,
      fungible: this.fungible,
      asset_issuer_id: this.assetIssuerId,
      asset_id: this.assetId,
      asset_class: this.assetClass,
      asset_type: this.assetType,
      asset_status: this.assetStatus,
      country_id: this.countryId,
      venue_id: this.venueId,
      maturity_date: this.maturityDate,
      description: this.description,
      client_id: this.clientId,
      issue_date: this.issueDate,
      coupon: this.coupon,
      par: this.par,
      references: this.references,
      created_by: this.createdBy,
      updated_by: this.updatedBy,
      created_time: this.createdTime,
      updated_time: this.updatedTime,
      version: this.version
    }
  }
}

export default BondGovernment
