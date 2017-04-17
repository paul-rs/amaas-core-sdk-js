import Derivative from '../Derivative/derivative.js'

class BondOption extends Derivative {
  constructor({
    assetManagerId,
    assetId,
    assetClass='Derivative',
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
    premium,
    optionType,
    strike,
    underlyingAssetId,
    optionStyle,
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
      premium,
      comments,
      links,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.optionType = optionType
    this.strike = strike
    this.underlyingAssetId = underlyingAssetId
    this.optionStyle = optionStyle
  }
}

export default BondOption
