import { AMaaSModel } from '../../core'
const Decimal = require('decimal.js')

class Charge extends AMaaSModel {
  constructor(data, coreData) {
    super(coreData)
    Object.assign(this, data)
    this.active = this.active === false ? false : true
    this.netAffecting = this.netAffecting === false ? false : true
    this.version = this.version || 1
  }

  set chargeValue(newChargeValue) {
    this._chargeValue = new Decimal(newChargeValue)
  }

  get chargeValue() {
    return this._chargeValue
  }
}

export default Charge
