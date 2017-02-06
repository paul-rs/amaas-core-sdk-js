import { AMaaSModel } from '../'

/**
 * Class representing a Reference
 * @extends AMaaSModel
 */
class Reference extends AMaaSModel {
  /**
    * Construct a new Reference object
    * @param {string} referenceValue - The identifier of this Reference (e.g. transactionId)
    * @param {string} createdBy - ID of the user that created this object (required if creating a new Reference)
    * @param {string} updatedBy - ID of the user that updated this object (use if amending existing Reference)
    * @param {date} createdTime - Time that the Reference was created (required if creating new Reference)
    * @param {date} updatedTime - Time that the Reference was updated (required if amending existing Reference)
    * @param {number} version - Version number of the Reference
  */
  constructor({ referenceValue, active, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
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
