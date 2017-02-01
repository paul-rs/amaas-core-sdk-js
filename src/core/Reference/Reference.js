import { AMaaSModel } from '../'

class Reference extends AMaaSModel {
  /**
    * Constructs a new Reference object
    * @param {object} referenceData: creation options
    * @param {string} referenceData.referenceValue: The reference to the object e.g. Transaction ID
    * @param {bool} referenceData.active: Whether the object is active or not
    * @param {string} referenceData.version: The version of the object (incremented by e.g. amends)
    * @param {object} coreData: AMaasModel constructor options
  */
  constructor({ referenceValue, active }, args, coreData) {
    super(coreData, args)
    this.referenceValue = referenceValue
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

export default Reference
