import { AMaaSModel } from '../../core'

/**
 * Class representing a Comment (a Transaction children type)
 * @extends AMaaSModel
 */
class Comment extends AMaaSModel {
  /**
   * Construct a new Comment object
   * @param {object} params - Comment creation options
   * @param {string} params.commentValue - The comment itself
   * @param {bool} params.active - Whether this Comment is active
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new Comment)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing Comment)
   * @param {date} params.createdTime - Time that the Comment was created (required if creating new Comment)
   * @param {date} params.updatedTime - Time that the Comment was updated (required if amending existing Comment)
   * @param {number} params.version - Version number of the Comment
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
