import { AMaaSModel } from '../../core'

class Address extends AMaaSModel {
  constructor({ addressPrimary, lineOne, lineTwo, city, region, postalCode, countryId, active }, args, coreData) {
    super(coreData, args)
    this.addressPrimary = addressPrimary
    this.lineOne = lineOne
    this.lineTwo = lineTwo
    this.city = city
    this.region = region
    this.postalCode = postalCode
    this.countryId = countryId
    this.active = active
  }

  set active(newActive) {
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
  }

  get active() {
    return this._active
  }
}

export default Address
