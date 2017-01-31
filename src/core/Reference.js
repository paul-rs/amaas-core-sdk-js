import { AMaaSModel } from './'

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
    super(coreData)
    this.referenceValue = referenceValue
    this.active = active === false ? false : true
  }

  set active(newActive) {
    this._active = newActive === false ? false : true
  }

  get active() {
    return this._active
  }
}

export default Reference
