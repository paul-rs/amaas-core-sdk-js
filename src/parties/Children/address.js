import { AMaaSModel } from '../../core'

/**
 * Class representing an Address
 * @extends AMaaSModel
 */
class Address extends AMaaSModel {
  /**
   * Construct a new Address object
   * @param {object} params - Address creation options
   * @param {bool} params.addressPrimary - Flag for whether Address is primary for its owner
   * @param {string} params.lineOne - First line of the Address
   * @param {string} params.lineTwo - Second line of the Address
   * @param {string} params.city - City of the Address
   * @param {string} params.region - Region of the Address
   * @param {string} params.postalCode - Postal code of the Address
   * @param {string} params.countryId - Country of the Address
   * @param {bool} params.active - Whether this Address is active for its owner
   * @param {string} params.createdBy - ID of the user that created the Address (required if creating a new Address)
   * @param {string} params.updatedBy - ID of the user that updated the Address (use if amending existing Address)
   * @param {date} params.createdTime - Time that the Address was created (required if creating new Address)
   * @param {date} params.updatedTime - Time that the Address was updated (required if amending existing Address)
   * @param {number} params.version - Version number of the Address
   */
  constructor({ addressPrimary=false, lineOne, lineTwo, city, region, postalCode, countryId, active, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      createdTime,
      updatedBy,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _active: { writable: true, enumerable: false },
      active: {
        get: () => this._active,
        set: (newActive) => {
          switch (newActive) {
            case false:
              this._active = false
              break
            case undefined:
              this._active = true
              break
            default:
              this._active = newActive
          }
        }, enumerable: true
      },
      _addressPrimary: { writable: true, enumerable: false },
      addressPrimary: {
        get: () => this._addressPrimary,
        set: (newAddressPrimary) => {
          switch (!!newAddressPrimary) {
            case false:
              this._addressPrimary = false
              break
            case undefined:
              this._addressPrimary = true
              break
            default:
              this._addressPrimary = !!newAddressPrimary
          }
        }, enumerable: true
      },
      _countryId: { writable: true, enumerable: false },
      countryId: {
        get: () => this._countryId,
        set: (newCountryId) => {
          if (newCountryId) {
            if (newCountryId.length !== 3) {
              throw new Error(`Invalid Country ID: ${newCountryId}`)
            }
          }
        },
        enumerable: true
      }
    })
    this.addressPrimary = addressPrimary
    this.lineOne = lineOne
    this.lineTwo = lineTwo
    this.city = city
    this.region = region
    this.postalCode = postalCode
    this.countryId = countryId
    this.active = active
  }
}

export default Address
