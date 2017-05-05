import { AMaaSModel } from '../../core'

/**
 * Class representing an Email
 * @memberof module:parties
 * @extends module:core.AMaaSModel
 */
class Email extends AMaaSModel {
  /**
   * Construct a new Email object
   * @param {object} params - Email creation options:
   * @param {boolean} params.emailPrimary - Whether the Email is primary for its owner. If a Party has Emails, at least one must be primary
   * @param {string} params.email - Email address
   * @param {boolean} params.active - Whether the Email is active for its owner
   * @param {string} [params.createdBy] - ID of the user that created the Email
   * @param {string} [params.updatedBy] - ID of the user that updated the Email
   * @param {date} [params.createdTime] - Time that the Email was created
   * @param {date} [params.updatedTime] - Time that the Email was updated
   * @param {number} [params.version] - Version number of the Email
   */
  constructor({ emailPrimary, email, active, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _active: { writable: true, enumerable: false },
      active: {
        get: () => this._active,
        set: (newActive) => {
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
        }, enumerable: true
      },
      _emailPrimary: { writable: true, enumerable: false },
      emailPrimary: {
        get: () => this._emailPrimary,
        set: (newEmailPrimary) => {
          switch (!!newEmailPrimary) {
            case false:
              this._emailPrimary = false
              break
            case undefined:
              this._emailPrimary = true
              break
            default:
              this._emailPrimary = !!newEmailPrimary
          }
        }, enumerable: true
      }
    })
    this.emailPrimary = emailPrimary
    this.email = email
    this.active = active
  }
}

export default Email
