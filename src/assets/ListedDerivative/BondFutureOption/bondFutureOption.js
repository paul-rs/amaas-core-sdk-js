import Decimal from 'decimal.js'

import FutureOption from '../FutureOption/futureOption'

/**
 * Class representing a Bond Future Option
 * @memberof module:assets
 * @extends module:assets.Future
 */
class BondFutureOption extends FutureOption {
  /**
   * Construct a new Bond Future Option instance
   * @param {object} params - Bond Future Option creation options:
   * @param {number} params.assetManagerId - ID of Bond Future Option's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Bond Future Option __(required)__
   * @param {string} [params.assetClass=Future] - Auto-set to `Future` __(read-only)__
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Bond Future Option's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Bond Future Option
   * @param {string} [params.countryId] - ID of Bond Future Option's country
   * @param {string} [params.venueId] - ID of Bond Future Option's venue if applicable
   * @param {string} [params.currency] - Bond Future Option currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.expiryDate=9999-12-31] - Date of the contract's expiry (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Bond Future Option
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} params.settlementType - Settlement Type __(required)__<br />
   * <li>Cash</li>
   * <li>Physical</li>
   * @param {number} params.contractSize - Contract Size __(required)__
   * @param {number} [params.pointValue] - Future point value. Stored as a Decimal instance
   * @param {number} params.tickSize - Future tick size. Stored as a Decimal instance __(required)__
   * @param {string} [params.quoteUnit] - Future quote unit
   * @param {string} params.underlyingAssetId - ID of the underlying Asset __(required)__
   * @param {string} params.optionType - Option type __(required)__<br />
   * Available options:
   * <li>Put</li>
   * <li>Call</li>
   * @param {string} params.optionStyle - Option style __(required)__<br />
   * Available options:
   * <li>American</li>
   * <li>Bermudan</li>
   * <li>European</li>
   * @param {number} params.strike - Strike price. Stored as a Decimal instance __(required)__
   * @param {object} [params.comments] - Object of Comments attached to the Bond Future Option
   * @param {object} [params.links] - Object of array of Links attached to the Bond Future Option
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Bond Future Option. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Bond Future Option
   * @param {string} [params.updatedBy] - ID of the user that updated the Bond Future Option
   * @param {date} [params.createdTime] - Time that the Bond Future Option was created
   * @param {date} [params.updatedTime] - Time that the Bond Future Option was updated
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
    optionType,
    optionStyle,
    strike,
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
      optionType,
      strike,
      optionStyle,
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

export default BondFutureOption
