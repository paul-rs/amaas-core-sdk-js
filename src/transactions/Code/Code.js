import { AMaaSModel } from '../../core'

/**
 * Class representing a Code (a Transaction children type)
 * @extends AMaaSModel
 */
class Code extends AMaaSModel {
  /**
   * Construct a new Code object
   * @param {object} params - Code creation options
   * @param {string} params.codeValue - The code itself
   * @param {bool} params.active - Whether this Code is active
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new Code)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing Code)
   * @param {date} params.createdTime - Time that the Code was created (required if creating new Code)
   * @param {date} params.updatedTime - Time that the Code was updated (required if amending existing Code)
   * @param {number} params.version - Version number of the Code
   */
  constructor({ codeValue, active, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.codeValue = codeValue
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

export default Code
