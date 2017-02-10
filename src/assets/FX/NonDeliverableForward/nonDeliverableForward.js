import FXBase from '../FXBase/fxBase.js'

class NonDeliverableForward extends FXBase {
  constructor({
    assetManagerId,
    fungible,
    assetIssuerId,
    assetId,
    assetClass='ForeignExchange',
    assetType='NonDeliverableForward',
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

export default NonDeliverableForward
