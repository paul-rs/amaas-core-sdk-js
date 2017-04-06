import { AMaaSModel } from '../../core'

/**
 * Class representing a Link (a Transaction children type)
 * @extends AMaaSModel
 */
class Link extends AMaaSModel {
  /**
   * Construct a new Link object
   * @param {object} params - Link creation options
   * @param {string} params.linkedTransactionId - ID of the linked Transaction
   * @param {bool} params.active - Whether this Link is active (Note: NOT whether the linked Transaction itself is active)
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new Link)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing Link)
   * @param {date} params.createdTime - Time that the Link was created (required if creating new Link)
   * @param {date} params.updatedTime - Time that the Link was updated (required if amending existing Link)
   * @param {number} params.version - Version number of the Link
   */
  constructor({ linkedTransactionId, active, createdBy, updatedBy, createdTime, updatedTime, version }) {
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
      }
    })
    this.linkedTransactionId = linkedTransactionId
    this.active = active
  }

  // set active(newActive) {
  //   switch (newActive) {
  //     case false:
  //       this._active = false
  //       break
  //     case undefined:
  //       this._active = true
  //       break
  //     default:
  //       this._active = newActive
  //   }
  // }
  //
  // get active() {
  //   return this._active
  // }
  //
  // toJSON() {
  //   return Object.assign({}, {
  //     active: this.active
  //   }, this)
  // }
}

export default Link
