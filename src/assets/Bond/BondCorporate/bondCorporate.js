import BondBase from '../Bondbase/bond.js'

class BondCorporate extends BondBase {
  constructor({
    assetManagerId,
    fungible,
    assetIssuerId,
    assetId,
    assetClass='Bond',
    assetType='BondCorporate',
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

export default BondCorporate
