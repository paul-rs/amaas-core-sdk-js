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
  constructor(referenceData, coreData) {
    super(coreData)
    Object.assign(this, referenceData)
    this.active = this.active === false ? false : true
    this.version = this.version || 1
  }
}

export default Reference
