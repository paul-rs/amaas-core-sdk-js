import { AMaaSModel } from '../../core'
const Decimal = require('decimal.js')

/**
 * Class representing a Charge (a Transaction children type)
 * @extends AMaaSModel
 */
class Charge extends AMaaSModel {
  /**
   * Construct a new Charge object
   * @param {object} params - Charge creation options
   * @param {string} params.chargeValue - Value of the charge
   * @param {string} params.currency - Currency of the charge (e.g. SGD, USD etc.)
   * @param {bool} params.active - Whether this Charge is active
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new Charge)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing Charge)
   * @param {date} params.createdTime - Time that the Charge was created (required if creating new Charge)
   * @param {date} params.updatedTime - Time that the Charge was updated (required if amending existing Charge)
   * @param {number} params.version - Version number of the Charge
   */
  constructor({ chargeValue, currency, active, netAffecting, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
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
      _netAffecting: { writable: true, enumerable: false },
      netAffecting: {
        get: () => this._netAffecting,
        set: (newNetAffecting) => {
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
        }, enumerable: true
      },
      _chargeValue: { writable: true, enumerable: false },
      chargeValue: {
        get: () => this._chargeValue,
        set: (newChargeValue=0) => {
          this._chargeValue = new Decimal(newChargeValue)
        }, enumerable: true
      }
    })
    this.chargeValue = chargeValue
    this.currency = currency
    this.active = active
    this.netAffecting = netAffecting === false ? false : true
  }

  // set active(newActive) {
  //   switch (newActive) {
  //     case false:
  //       this._active = false
  //       break
  //     case undefined:
  //       this._active = true
  //       break
  //     default:
  //       this._active = newActive
  //   }
  // }
  //
  // get active() {
  //   return this._active
  // }
  //
  // set netAffecting(newNetAffecting) {
  //   switch (newNetAffecting) {
  //     case false:
  //       this._netAffecting = false
  //       break
  //     case undefined:
  //       this._netAffecting = true
  //       break
  //     default:
  //       this._netAffecting = newNetAffecting
  //   }
  // }
  //
  // get netAffecting() {
  //   return this._netAffecting
  // }
  //
  // set chargeValue(newChargeValue=0) {
  //   this._chargeValue = new Decimal(newChargeValue)
  // }
  //
  // get chargeValue() {
  //   return this._chargeValue
  // }

  // toJSON() {
  //   return Object.assign({}, {
  //     active: this.active,
  //     netAffecting: this.netAffecting,
  //     chargeValue: this.chargeValue
  //   }, this)
  // }
}

export default Charge
