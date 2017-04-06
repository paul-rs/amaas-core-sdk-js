import Derivative from '../Derivative/derivative.js'

class BondOption extends Derivative {
  constructor({
    assetManagerId,
    fungible,
    assetIssuerId,
    assetId,
    assetClass='Derivative',
    assetType='BondOption',
    assetStatus='Active',
    countryId,
    venueId,
    maturityDate,
    description='',
    clientId,
    issueDate,
    putCall,
    strike,
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
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.putCall = putCall
    this.strike = strike
  }

  /*
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
      put_call: this.putCall,
      strike: this.strike,
      references: this.references,
      created_by: this.createdBy,
      updated_by: this.updatedBy,
      created_time: this.createdTime,
      updated_time: this.updatedTime,
      version: this.version
    }
  }
  */
}

export default BondOption
