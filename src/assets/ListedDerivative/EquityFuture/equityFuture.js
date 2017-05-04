import Future from '../Future/future'

/**
 * Class representing a Future
 * @memberof module:assets
 * @extends module:assets.ListedDerivative
 */
class EquityFuture extends Future {
  /**
   * Construct a new Equity Future instance
   * @param {object} params - EquityFuture creation options:
   * @param {number} params.assetManagerId - ID of Equity Future's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Equity Future __(required)__
   * @param {string} [params.assetClass=Future] - Auto-set to `Future` __(read-only)__
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Equity Future's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Equity Future
   * @param {string} [params.countryId] - ID of Equity Future's country
   * @param {string} [params.venueId] - ID of Equity Future's venue if applicable
   * @param {string} [params.currency] - Equity Future currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.expiryDate=9999-12-31] - Date of the contract's expiry (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Equity Future
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} params.settlementType - Settlement Type __(required)__<br />
   * Available options:
   * <li>Cash</li>
   * <li>Physical</li>
   * @param {number} params.contractSize - Contract Size __(required)__
   * @param {number} [params.pointValue] - Future point value. Stored as a Decimal instance
   * @param {number} params.tickSize - Future tick size. Stored as a Decimal instance
   * @param {string} [params.quoteUnit] - Future quote unit
   * @param {string} params.underlyingAssetId - ID of the underlying Asset __(required)__
   * @param {object} [params.comments] - Object of Comments attached to the Equity Future
   * @param {object} [params.links] - Object of array of Links attached to the Equity Future
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Equity Future. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Equity Future
   * @param {string} [params.updatedBy] - ID of the user that updated the Equity Future
   * @param {date} [params.createdTime] - Time that the Equity Future was created
   * @param {date} [params.updatedTime] - Time that the Equity Future was updated
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

export default EquityFuture
