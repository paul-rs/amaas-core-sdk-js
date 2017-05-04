import Future from '../Future/future'

/**
 * Class representing an Interest Rate Future
 * @memberof module:assets
 * @extends module:assets.Future
 */
class InterestRateFuture extends Future {
  /**
   * Construct a new Interest Rate Future instance
   * @param {object} params - InterestRateFuture creation options
   * @param {number} params.assetManagerId - ID of Interest Rate Future's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Interest Rate Future __(required)__
   * @param {string} [params.assetClass=Future] - Auto-set to `Future` __(read-only)__
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Interest Rate Future's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Interest Rate Future
   * @param {string} [params.countryId] - ID of Interest Rate Future's country
   * @param {string} [params.venueId] - ID of Interest Rate Future's venue if applicable
   * @param {string} [params.currency] - Interest Rate Future currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.expiryDate=9999-12-31] - Date of the contract's expiry (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Interest Rate Future
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} params.settlementType - Settlement Type __(required)__<br />
   * Available options:
   * <li>Cash</li>
   * <li>Physical</li>
   * @param {number} params.contractSize - Contract Size __(required)__
   * @param {number} [params.pointValue] - Future point value. Stored as Decimal instance
   * @param {number} params.tickSize - Future tick size. Stored as a Decimal instance __(required)__
   * @param {string} [params.quoteUnit] - Future quote unit
   * @param {string} params.underlyingAssetId - ID of the underlying Asset __(required)__
   * @param {object} [params.comments] - Object of Comments attached to the Interest Rate Future
   * @param {object} [params.links] - Object of array of Links attached to the Interest Rate Future
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Interest Rate Future. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Interest Rate Future
   * @param {string} [params.updatedBy] - ID of the user that updated the Interest Rate Future
   * @param {date} [params.createdTime] - Time that the Interest Rate Future was created
   * @param {date} [params.updatedTime] - Time that the Interest Rate Future was updated
   * @param {number} [params.version] - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    assetIssuerId,
    assetStatus='Active',
    countryId,
    venueId,
    currency,
    issueDate,
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
      assetIssuerId,
      assetStatus,
      countryId,
      venueId,
      currency,
      issueDate,
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
