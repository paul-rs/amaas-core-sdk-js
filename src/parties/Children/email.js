import { AMaaSModel } from '../../core'

/**
 * Class representing an Email
 * @extends AMaaSModel
 */
class Email extends AMaaSModel {
  /**
   * Construct a new Email object
   * @param {object} params - Email creation options
   * @param {string} params.email - Email address
   * @param {bool} params.emailPrimary - Whether the Email is primary for its owner
   * @param {bool} params.active - Whether the Email is active for its owner
   * @param {string} params.createdBy - ID of the user that created the Email (required if creating a new Email)
   * @param {string} params.updatedBy - ID of the user that updated the Email (use if amending existing Email)
   * @param {date} params.createdTime - Time that the Email was created (required if creating new Email)
   * @param {date} params.updatedTime - Time that the Email was updated (required if amending existing Email)
   * @param {number} params.version - Version number of the Email
   */
  constructor({ emailPrimary, email, active, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.emailPrimary = emailPrimary
    this.email = email
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

  set emailPrimary(newEmailPrimary) {
    switch (!!newEmailPrimary) {
      case false:
        this._emailPrimary = false
        break
      case undefined:
        this._emailPrimary = true
        break
      default:
        this._emailPrimary = newEmailPrimary
    }
  }

  get emailPrimary() {
    return this._emailPrimary
  }

  toJSON() {
    return {
      email_primary: this.emailPrimary,
      email: this.email,
      active: this.active,
      created_by: this.createdBy,
      updated_by: this.updatedBy,
      created_time: this.createdTime,
      updated_time: this.updatedTime,
      version: this.version
    }
  }
}

export default Email
