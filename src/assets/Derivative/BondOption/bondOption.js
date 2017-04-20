import { Decimal } from 'decimal.js'

import Derivative from '../Derivative/derivative.js'
import { OPTION_STYLES, OPTION_TYPES } from '../../enums'

/**
 * Class representing an Bond Option
 * @memberof module:Assets.class
 * @extends module:Assets.Derivative
 */
class BondOption extends Derivative {
  /**
   * Construct a new Bond Option instance
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
   * @param {number} params.premium - Premium of the Asset
   * @param {string} params.optionStyle - Option style (American, Bermudan, European)
   * @param {string} params.optionType - Option type (Put, Call)
   * @param {number} params.strike - Strike price of the Option
   * @param {string} params.underlyingAssetId - ID of the underlying Asset
   * @param {object} params.comments - Object of Comments attached to the Asset
   * @param {object} params.links - Object of array of Links attached to the Asset
   * @param {object} params.references - Object of References associated with this Asset
   * @param {string} params.createdBy - ID of the user that created the Bond Option
   * @param {string} params.updatedBy - ID of the user that updated the Bond Option
   * @param {date} params.createdTime - Time that the Bond Option was created
   * @param {date} params.updatedTime - Time that the Bond Option was updated
   * @param {number} params.version - Version number of the Bond Option
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='Derivative',
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
    premium,
    optionType,
    strike,
    underlyingAssetId,
    optionStyle,
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
      premium,
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
      _optionType: { writable: true, enumerable: false },
      optionType: {
        get: () => this._optionType,
        set: (newOptionType) => {
          if (OPTION_TYPES.indexOf(newOptionType) === -1) {
            throw new Error(`Invalid Option Type: ${newOptionType}`)
          }
          this._optionType = newOptionType
        },
        enumerable: true
      },
      _optionStyle: { writable: true, enumerable: false },
      optionStyle: {
        get: () => this._optionStyle,
        set: (newOptionStyle) => {
          if (OPTION_STYLES.indexOf(newOptionStyle) === -1) {
            throw new Error(`Invalid Option Style: ${newOptionStyle}`)
          }
          this._optionStyle = newOptionStyle
        },
        enumerable: true
      },
      _strike: { writable: true, enumerable: false },
      strike: {
        get: () => this._strike,
        set: (newStrike) => {
          if (!newStrike) {
            this._strike = new Decimal(0)
          } else {
            this._strike = new Decimal(newStrike)
          }
        },
        enumerable: true
      }
    })
    this.optionStyle = optionStyle
    this.optionType = optionType
    this.strike = strike
    this.underlyingAssetId = underlyingAssetId
  }
}

export default BondOption
