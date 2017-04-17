import { Decimal } from 'decimal.js'

import Asset from '../../Asset/asset'
import { FUND_TYPES } from '../../enums.js'

class Fund extends Asset {
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
