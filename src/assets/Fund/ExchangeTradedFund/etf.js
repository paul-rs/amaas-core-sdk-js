import Fund from '../Fund/fund'

class ExchangeTradedFund extends Fund {
  constructor({
    assetManagerId,
    assetId,
    assetClass='Fund',
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
    fundType,
    creationDate,
    nav,
    expenseRatio,
    netAssets,
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
      fundType: 'ETF',
      creationDate,
      nav,
      expenseRatio,
      netAssets,
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
}

export default ExchangeTradedFund
