import Asset from '../../Asset/asset.js'

class Derivative extends Asset {
  constructor({
    assetManagerId,
    fungible,
    assetIssuerId,
    assetId,
    assetClass='Derivative',
    assetType='Derivative',
    assetStatus='Active',
    countryId,
    venueId,
    maturityDate,
    description='',
    clientId,
    issueDate,
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
      assetClass='ForeignExchange',
      assetType='ForeignExchange',
      assetStatus='Active',
      countryId,
      venueId,
      maturityDate,
      description='',
      clientId,
      references={},
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.issueDate = issueDate
  }
}

export default Derivative
