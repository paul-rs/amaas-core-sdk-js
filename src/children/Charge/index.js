import { AMaaSModel } from '../../core'
import { Decimal } from 'decimal.js'

class Charge extends AMaaSModel {
  constructor({
    chargeValue,
    currency,
    active,
    netAffecting,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })

    Object.defineProperties(this, {
      _chargeValue: { writable: true, enumerable: false },
      chargeValue: {
        get: () => this._chargeValue,
        set: (newChargeValue) => {
          if (newChargeValue) {
            this._chargeValue = new Decimal(chargeValue)
          } else {
            this._chargeValue = new Decimal(0)
          }
        },
        enumerable: true
      }
    })

    this.chargeValue = chargeValue
    this.currency = currency
    this.active = active === false ? false : true
    this.netAffecting = netAffecting === false ? false : true
  }
}

export default Charge
