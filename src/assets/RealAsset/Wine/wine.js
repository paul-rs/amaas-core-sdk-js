import RealAsset from '../RealAsset/realAsset'

class Wine extends RealAsset {
  constructor({
    assetManagerId,
    assetId,
    assetClass='Wine',
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

    year,
    producer,
    region,
    appellation,
    classification,
    color,
    bottleSize,
    bottleInCellar,
    bottleLocation,
    storageCost,
    ratingType,
    ratingValue,
    packingType,
    toDrinkStart,
    toDrinkEnd,

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
    // TODO: Write the getter and setters once decided how the dates will be represented
    this.year = year
    this.producer = producer
    this.region = region
    this.appellation = appellation
    this.classification = classification
    this.color = color
    this.bottleSize = bottleSize
    this.bottleInCellar = bottleInCellar
    this.bottleLocation = bottleLocation
    this.storageCost = storageCost
    this.ratingType = ratingType
    this.ratingValue = ratingValue
    this.packingType = packingType
    this.toDrinkStart = toDrinkStart
    this.toDrinkEnd = toDrinkEnd
  }
}

export default Wine
