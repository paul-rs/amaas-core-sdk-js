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
}

export default BondOption
