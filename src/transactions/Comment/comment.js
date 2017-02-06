import { AMaaSModel } from '../../core'

/**
 * Class representing a Comment (a Transaction children type)
 * @extends AMaaSModel
 */
class Comment extends AMaaSModel {
  /**
   * Construct a new Comment object
   * @param {string} commentValue - The comment itself
   * @param {bool} active - Whether this Comment is active
   * @param {string} createdBy - ID of the user that created this object (required if creating a new Comment)
   * @param {string} updatedBy - ID of the user that updated this object (use if amending existing Comment)
   * @param {date} createdTime - Time that the Comment was created (required if creating new Comment)
   * @param {date} updatedTime - Time that the Comment was updated (required if amending existing Comment)
   * @param {number} version - Version number of the Comment
   */
  constructor({ commentValue, active, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.commentValue = commentValue
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

export default Comment
