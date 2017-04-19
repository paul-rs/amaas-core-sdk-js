import { Decimal } from 'decimal.js'

import Asset from '../../Asset/asset'
import { FUND_TYPES } from '../../enums.js'

/**
 * @module Assets
 */

/**
 * Class representing a Fund
 * @extends Asset
 */
class Fund extends Asset {
  /**
   * Construct a new Asset object
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
   * @param {string} params.fundType - Type of Fund (Open, Closed, ETF)
   * @param {string} params.creationDate - Fund's creation date (YYYY-MM-DD)
   * @param {number} params.nav - Fund's Net Asset Value
   * @param {number} params.expenseRatio - Fund's expense ratio
   * @param {number} params.netAssets - ???
   * @param {object} params.comments - Object of Comments attached to the Asset
   * @param {object} params.links - Object of array of Links attached to the Asset
   * @param {object} params.references - Object of References associated with this Asset
   * @param {object} params.clientAdditional - Object of custom properties for creating a Custom Asset
   * @param {string} params.createdBy - ID of the user that created this object
   * @param {string} params.updatedBy - ID of the user that updated this object
   * @param {date} params.createdTime - Time that the Asset was created
   * @param {date} params.updatedTime - Time that the Asset was updated
   * @param {number} params.version - Version number
  */
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
      _creationDate: { writable: true, enumerable: false },
      creationDate: {
        get: () => this._creationDate,
        set: (newCreationDate) => {
          if (newCreationDate) {
            const dArray = newCreationDate.split('-')
            const date = new Date(dArray[0], dArray[1]-1, dArray[2])
            this._creationDate = date
          }
        },
        enumerable: true
      },
      _fundType: { writable: true, enumerable: false },
      fundType: {
        get: () => this._fundType,
        set: (newFundType) => {
          if (newFundType) {
            if (FUND_TYPES.indexOf(newFundType) === -1) {
              throw new Error(`Invalid Fund Type: ${newFundType}`)
            }
            this._fundType = fundType
          }
        },
        enumerable: true
      },
      _expenseRatio: { writable: true, enumerable: false },
      expenseRatio: {
        get: () => this._expenseRatio,
        set: (newExpenseRatio) => {
          if (!newExpenseRatio) {
            this._expenseRatio = new Decimal(0)
          } else {
            this._expenseRatio = new Decimal(newExpenseRatio)
          }
        },
        enumerable: true
      },
      _nav: { writable: true, enumerable: false },
      nav: {
        get: () => this._nav,
        set: (newNav) => {
          if (!newNav) {
            this._nav = new Decimal(0)
          } else {
            this._nav = new Decimal(newNav)
          }
        },
        enumerable: true
      }
    })
    this.fundType = fundType
    this.creationDate = creationDate
    this.nav = nav
    this.expenseRatio = expenseRatio
    this.netAssets = netAssets
  }
}

export default Fund
