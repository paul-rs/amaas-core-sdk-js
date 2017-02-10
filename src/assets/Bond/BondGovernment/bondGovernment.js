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
}

export default BondGovernment
