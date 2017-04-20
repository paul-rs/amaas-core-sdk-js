import { Decimal } from 'decimal.js'

import ListedDerivative from '../ListedDerivative/listedDerivative'
import { FUTURE_SETTLEMENT_TYPES }  from '../../enums.js'

/**
 * Class representing a Future
 * @memberof module:Assets.Class
 * @extends module:Assets.Class.ListedDerivative
 */
class Future extends ListedDerivative {
  /**
   * Construct a new Future instance
   * @param {object} params - Asset creation options
   * @param {integer} params.assetManagerId - ID of Asset's Asset Manager (required)
   * @param {integer} params.assetId - ID of the Asset (required)
   * @param {string} params.assetClass - Class of the Asset
   * @param {bool} params.fungible - Whether this Asset is fungible (required)
   * @param {string} params.assetIssuerId - ID of the Asset's issuer
   * @param {string} params.assetStatus - Status of the Asset (e.g. 'Active')
   * @param {string} params.countryId - ID of Asset's country
   * @param {string} params.venueId - ID of Asset's venue if applicable
   * @param {string} params.currency - Asset currency (e.g. USD, SGD)
   * @param {string} params.issueDate - Issue date if applicable (YYYY-MM-DD)
   * @param {string} params.maturityDate - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} params.description - Description of the Asset
   * @param {string} params.clientId - ID of the client to which the Asset belongs
   * @param {string} params.settlementType - Settlement Type (Physical, Cash)
   * @param {number} params.contractSize - Contract Size
   * @param {number} params.pointValue - ???
   * @param {number} params.tickSize -???
   * @param {number} params.quoteUnit - ???
   * @param {string} params.underlyingAssetId - ID of the underlying Asset
   * @param {string} params.expiryDate - Date of the contract's expiry (YYYY-MM-DD)
   * @param {object} params.comments - Object of Comments attached to the Asset
   * @param {object} params.links - Object of array of Links attached to the Asset
   * @param {object} params.references - Object of References associated with this Asset
   * @param {string} params.createdBy - ID of the user that created the Asset
   * @param {string} params.updatedBy - ID of the user that updated the Asset
   * @param {date} params.createdTime - Time that the Asset was created
   * @param {date} params.updatedTime - Time that the Asset was updated
   * @param {number} params.version - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='Future',
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
      comments,
      links,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _settlementType: { writable: true, enumerable: false },
      settlementType: {
        get: () => this._settlementType,
        set: (newSettlementType) => {
          if (settlementType) {
            if (FUTURE_SETTLEMENT_TYPES.indexOf(newSettlementType) === -1) {
              throw new Error(`Invalid Settlement Type: ${newSettlementType}`)
            }
            this._settlementType = newSettlementType
          }
        },
        enumerable: true
      },
      _pointValue: { writable: true, enumerable: false },
      pointValue: {
        get: () => this._pointValue,
        set: (newPointValue) => {
          // TODO: This should be replaced with a calculation
          if (newPointValue) {
            this._pointValue = newPointValue
          }
        },
        enumerable: true
      },
      _tickSize: { writable: true, enumerable: false },
      tickSize: {
        get: () => this._tickSize,
        set: (newTickSize) => {
          if (!newTickSize) {
             this._tickSize = new Decimal(0)
          } else {
            this._tickSize = new Decimal(newTickSize)
          }
        },
        enumerable: true
      },
      _contractSize: { writable: true, enumerable: false },
      contractSize: {
        get: () => this._contractSize,
        set: (newContractSize) => {
          if (!newContractSize) {
             this._contractSize = new Decimal(0)
          } else {
            this._contractSize = new Decimal(newContractSize)
          }
        },
        enumerable: true
      },
      _expiryDate: { writable: true, enumerable: false },
      expiryDate: {
        get: () => this._expiryDate,
        set: (newExpiryDate) => {
          if (newExpiryDate) {
            const dArray = newExpiryDate.split('-')
            const date = new Date(dArray[0], dArray[1]-1, dArray[2])
            this._expiryDate = date
          }
        },
        enumerable: true
      }
    })
    this.settlementType = settlementType
    this.contractSize = contractSize
    this.pointValue = pointValue
    this.tickSize = tickSize
    this.quoteUnit = quoteUnit
    this.underlyingAssetId = underlyingAssetId
    this.expiryDate = expiryDate
  }

  getTickValue() {
    return this.tickSize.times(this.contractSize)
  }
}

export default Future
