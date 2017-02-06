import { AMaaSModel } from '../../core'

/**
 * Class representing a Link (a Transaction children type)
 * @extends AMaaSModel
 */
class Link extends AMaaSModel {
  /**
   * Construct a new Link object
   * @param {string} linkedTransactionId - ID of the linked Transaction
   * @param {bool} active - Whether this Link is active (Note: NOT whether the linked Transaction itself is active)
   * @param {string} createdBy - ID of the user that created this object (required if creating a new Link)
   * @param {string} updatedBy - ID of the user that updated this object (use if amending existing Link)
   * @param {date} createdTime - Time that the Link was created (required if creating new Link)
   * @param {date} updatedTime - Time that the Link was updated (required if amending existing Link)
   * @param {number} version - Version number of the Link
   */
  constructor({ linkedTransactionId, active, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.linkedTransactionId = linkedTransactionId
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

export default Link
