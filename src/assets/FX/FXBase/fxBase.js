import Asset from '../../Asset/asset.js'

class FXBase extends Asset {
  constructor({
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
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
  }
}

export default FXBase
