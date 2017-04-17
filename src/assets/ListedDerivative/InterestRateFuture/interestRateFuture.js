import Future from '../Future/future'

class InterestRateFuture extends Future {
  constructor({
    assetManagerId,
    assetId,
    assetClass='InterestRateFuture',
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
    settlementType,
    contractSize,
    pointValue,
    tickSize,
    quoteUnit,
    underlyingAssetId,
    expiryDate,
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
      settlementType,
      contractSize,
      pointValue,
      tickSize,
      quoteUnit,
      underlyingAssetId,
      expiryDate,
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

export default InterestRateFuture
