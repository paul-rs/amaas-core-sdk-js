import { AMaaSModel } from '../../core'
const Decimal = require('decimal.js')

class Charge extends AMaaSModel {
  /**
   * Constructs new Charge object
   * @param {object} data: creation options
   * @param {decimal} data.chargeValue: Value of the charge
   * @param {string} data.currency: Currency of charge
   * @param {bool} data.active: Whether this charge is active
   * @param {bool} data.netAffecting: Does this charge affect the net settlement (e.g. true broker commission, false for gov tax)
   * @param {number} data.version: Version of the object
   * @param {object} coreData: AMaaSModel creation options
 */
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
