import { AMaaSModel } from '../../core'

/**
 * Class representing a Code (a Transaction children type)
 * @extends AMaaSModel
 */
class Code extends AMaaSModel {
  /**
   * Construct a new Code object
   * @param {object} options - Code creation options
   * @param {string} options.codeValue - The code itself
   * @param {bool} options.active - Whether this Code is active
   * @param {string} options.createdBy - ID of the user that created this object (required if creating a new Code)
   * @param {string} options.updatedBy - ID of the user that updated this object (use if amending existing Code)
   * @param {date} options.createdTime - Time that the Code was created (required if creating new Code)
   * @param {date} options.updatedTime - Time that the Code was updated (required if amending existing Code)
   * @param {number} options.version - Version number of the Code
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
