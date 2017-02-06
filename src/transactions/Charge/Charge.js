import { AMaaSModel } from '../../core'
const Decimal = require('decimal.js')

/**
 * Class representing a Charge (a Transaction children type)
 * @extends AMaaSModel
 */
class Charge extends AMaaSModel {
  /**
   * Construct a new Charge object
   * @param {string} chargeValue - Value of the charge
   * @param {string} currency - Currency of the charge (e.g. SGD, USD etc.)
   * @param {bool} active - Whether this Charge is active
   * @param {string} createdBy - ID of the user that created this object (required if creating a new Charge)
   * @param {string} updatedBy - ID of the user that updated this object (use if amending existing Charge)
   * @param {date} createdTime - Time that the Charge was created (required if creating new Charge)
   * @param {date} updatedTime - Time that the Charge was updated (required if amending existing Charge)
   * @param {number} version - Version number of the Charge
   */
  constructor({ chargeValue, currency, active, netAffecting, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.chargeValue = chargeValue
    this.currency = currency
    this.active = active
    this.netAffecting = netAffecting === false ? false : true
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

  set netAffecting(newNetAffecting) {
    switch (newNetAffecting) {
      case false:
        this._netAffecting = false
        break
      case undefined:
        this._netAffecting = true
        break
      default:
        this._netAffecting = newNetAffecting
    }
  }

  get netAffecting() {
    return this._netAffecting
  }

  set chargeValue(newChargeValue=0) {
    this._chargeValue = new Decimal(newChargeValue)
  }

  get chargeValue() {
    return this._chargeValue
  }
}

export default Charge
