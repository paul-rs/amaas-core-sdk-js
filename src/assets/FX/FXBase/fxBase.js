import Asset from '../../Asset/asset.js'

class FXBase extends Asset {
  constructor({
    assetManagerId,
    assetId,
    assetClass='ForeignExchange',
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
    return this.assetId.slice(3,7)
  }
}

export default FXBase
